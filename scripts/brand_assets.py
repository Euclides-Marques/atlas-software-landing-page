"""Gera os recortes da logo usados no site a partir do arquivo original.

Uso (na raiz do repositório):  python scripts/brand_assets.py
Requer Pillow (pip install pillow). Os arquivos gerados são versionados,
então o build do site não depende de Python.
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "design" / "brand" / "logo-atlas-original.jpeg"
BRAND_OUT = ROOT / "src" / "assets" / "brand"
PUBLIC_OUT = ROOT / "public"

# Cor de fundo da arte original (azul-marinho quase preto) e caixas de recorte
# medidas sobre a imagem de 1254x1254.
BACKGROUND = (2, 8, 22)
MARK_BOX = (322, 262, 902, 716)
LOCKUP_BOX = (226, 262, 1040, 966)
WORDMARK_TOP = 740
ATLAS_WORD_BOX = (228, 748, 1038, 884)
SURFACE = (5, 11, 26)


def remove_dark_background(image: Image.Image) -> Image.Image:
    """Transforma o fundo escuro em transparência preservando as bordas suaves."""
    rgb = image.convert("RGB")
    out = Image.new("RGBA", rgb.size)
    low, high = 46, 112
    pixels = []
    for r, g, b in rgb.get_flattened_data():
        value = max(r, g, b)
        alpha = min(max((value - low) / (high - low), 0.0), 1.0)
        if alpha == 0:
            pixels.append((0, 0, 0, 0))
            continue
        channels = tuple(
            int(min(max((c - bg * (1 - alpha)) / alpha, 0), 255))
            for c, bg in zip((r, g, b), BACKGROUND)
        )
        pixels.append((*channels, round(alpha * 255)))
    out.putdata(pixels)
    return out


def build_lockup(original: Image.Image) -> Image.Image:
    """Símbolo + wordmark, sem o anel e os grafismos de fundo da arte circular."""
    left, top, right, bottom = LOCKUP_BOX
    lockup = Image.new("RGBA", (right - left, bottom - top), (0, 0, 0, 0))
    mark = remove_dark_background(original.crop(MARK_BOX))
    lockup.alpha_composite(mark, (MARK_BOX[0] - left, MARK_BOX[1] - top))

    words = neutral_only(remove_dark_background(original.crop((left, WORDMARK_TOP, right, bottom))))
    lockup.alpha_composite(words, (0, WORDMARK_TOP - top))
    return lockup


def neutral_only(image: Image.Image) -> Image.Image:
    """O wordmark é branco/cinza: descarta qualquer pixel azulado (restos do anel)."""
    image.putdata([
        (r, g, b, a) if max(r, g, b) - min(r, g, b) < 60 else (0, 0, 0, 0)
        for r, g, b, a in image.get_flattened_data()
    ])
    return image


def fit_height(image: Image.Image, height: int) -> Image.Image:
    width = round(image.width * height / image.height)
    return image.resize((width, height), Image.LANCZOS)


def icon(mark: Image.Image, size: int, padding: float) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (*SURFACE, 255))
    inner = round(size * (1 - 2 * padding))
    scaled = mark.copy()
    scaled.thumbnail((inner, inner), Image.LANCZOS)
    offset = ((size - scaled.width) // 2, (size - scaled.height) // 2)
    canvas.alpha_composite(scaled, offset)
    return canvas


def main() -> None:
    original = Image.open(SOURCE)
    mark = remove_dark_background(original.crop(MARK_BOX))
    lockup = build_lockup(original)

    BRAND_OUT.mkdir(parents=True, exist_ok=True)
    fit_height(mark, 168).save(BRAND_OUT / "atlas-mark.webp", quality=92, method=6)
    word = neutral_only(remove_dark_background(original.crop(ATLAS_WORD_BOX)))
    word = word.crop(word.getbbox())
    fit_height(word, 60).save(BRAND_OUT / "atlas-wordmark.webp", quality=92, method=6)
    lockup.thumbnail((720, 720), Image.LANCZOS)
    lockup.save(BRAND_OUT / "atlas-lockup.webp", quality=92, method=6)

    icon(mark, 32, 0.08).convert("RGB").save(PUBLIC_OUT / "favicon-32.png", optimize=True)
    icon(mark, 180, 0.16).convert("RGB").save(PUBLIC_OUT / "apple-touch-icon.png", optimize=True)
    icon(mark, 512, 0.2).convert("RGB").save(PUBLIC_OUT / "icon-512.png", optimize=True)
    icon(mark, 48, 0.08).convert("RGB").save(PUBLIC_OUT / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])


if __name__ == "__main__":
    main()
