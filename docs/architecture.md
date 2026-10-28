# Arquitetura do frontend

A landing page é uma SPA estática de uma única rota: React 19 + TypeScript, empacotada pelo Vite e publicada como Static Site no Render. Não há backend, roteador nem estado global. O contato acontece por links para canais oficiais (WhatsApp e Instagram).

## Estrutura

```text
├── design/brand/            Arte original da logo (fonte dos recortes; não vai para o bundle)
├── public/                  Arquivos servidos como estão: favicons, og-image.png, robots.txt
├── scripts/
│   ├── brand_assets.py      Gera os recortes da logo e os favicons a partir da arte original
│   ├── og-image.html        Template da imagem de compartilhamento
│   └── generate-og-image.mjs  Renderiza o template em public/og-image.png (Playwright)
├── src/
│   ├── assets/brand/        Símbolo, wordmark e lockup recortados da logo (WebP com transparência)
│   ├── assets/projects/     Capturas reais dos projetos publicados
│   ├── components/          Peças reutilizáveis sem conteúdo próprio
│   ├── data/                Todo o texto e os links da página
│   ├── hooks/               useScrolled (estado do header) e useInitialHashScroll (âncora na URL ao abrir)
│   ├── sections/            Uma seção da página por arquivo
│   ├── styles/global.css    Tailwind + design tokens + estilos de base
│   ├── App.tsx              Ordem das seções e link "pular para o conteúdo"
│   └── main.tsx             Fontes, CSS global e montagem do React
└── tests/landing.spec.ts    Testes de navegador (Playwright + axe)
```

## Responsabilidades

| Arquivo | Papel |
| --- | --- |
| `data/contact.ts` | Canais oficiais (WhatsApp, Instagram, Linktree) e itens da navegação. **É o único lugar para trocar telefone ou links.** |
| `data/content.ts` | Serviços, etapas do processo, princípios e perguntas frequentes. |
| `data/projects.ts` | Portfólio: contexto, o que foi construído, stack, link e capturas. |
| `sections/Header.tsx` | Header fixo. Fica transparente sobre o hero e sólido após rolar. Tem o menu mobile acessível (`aria-expanded`, fecha com Esc, ao navegar ou ao passar para o desktop). |
| `sections/Hero.tsx` | Proposta de valor, CTAs e a figura técnica do símbolo. |
| `components/BlueprintMark.tsx` | SVG do símbolo redesenhado a partir da geometria da logo, com linhas de construção. A animação é só CSS e fica desligada com `prefers-reduced-motion`. |
| `components/Logo.tsx` | Logo horizontal: símbolo e "ATLAS" vêm da arte original, "SOFTWARE" é texto. |
| `components/ButtonLink.tsx` | Links com aparência de botão (primário/secundário), com aviso de "abre em nova aba" para leitores de tela. |
| `components/SectionHeading.tsx` | Numeração `/0N`, título `h2` e introdução de cada seção. |

## Estilos

- **Tailwind CSS v4** pela integração oficial com o Vite (`@tailwindcss/vite`). Não há `tailwind.config.js`: os tokens ficam no bloco `@theme` de `src/styles/global.css` e viram utilitários automaticamente (`bg-ink-950`, `text-atlas-600`, `text-display`, `py-section`…).
- **Tokens:** cores extraídas da logo, famílias e escala tipográfica, larguras (`container-site`), espaçamento de seção, raios, sombras, curvas e durações de transição, breakpoints.
- **Classes de componente** (`.container-site`, `.label`, `.blueprint-grid`, `.skip-link`, animação da figura) ficam em `@layer components` no mesmo arquivo.
- **Fontes** auto-hospedadas via Fontsource (OFL): Sora Variable (títulos), IBM Plex Sans (texto) e IBM Plex Mono (rótulos). Só o subconjunto latino é importado. Não há requisição a serviços de fontes externos.

## Dependências e motivo

| Pacote | Motivo |
| --- | --- |
| `react`, `react-dom` 19.3 | Base da interface. |
| `lucide-react` | Ícones SVG consistentes. Só os importados entram no bundle. A v1 não traz ícones de marca, então WhatsApp e Instagram são identificados por texto. |
| `@fontsource*` | Fontes locais, sem bloqueio de terceiros. |
| `vite` 8, `@vitejs/plugin-react` 6 | Build e servidor de desenvolvimento. |
| `tailwindcss` 4, `@tailwindcss/vite` | Utilitários de CSS ligados aos tokens. |
| `typescript` 6.0 | Tipagem estrita. A 7.0 já existe, mas o `typescript-eslint` ainda exige `<6.1`. |
| `eslint` 10 + `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` | Análise estática. |
| `@playwright/test`, `@axe-core/playwright` | Testes de navegador e de acessibilidade. |

**Avaliados e não adotados:**

- **Motion for React:** as únicas animações (traçado da figura, hover, abertura de FAQ) cabem em CSS. A biblioteca acrescentaria JavaScript sem benefício perceptível.
- **React Helmet Async:** existe uma única página, então os metadados ficam direto no `index.html`.

## Decisões

- **Sem formulário de contato.** Um formulário real exigiria backend ou serviço externo com conta do proprietário. O WhatsApp oficial é o canal confirmado. Se um formulário for necessário no futuro, use um serviço de formulários com chave pública ou um endpoint próprio, e nunca coloque segredos em variáveis `VITE_*`, que vão para o bundle.
- **Domínio opcional no build.** `canonical`, `og:url` e a URL absoluta do `og:image` só são gerados quando a variável `SITE_URL` existe no build (plugin `siteUrlMeta` em `vite.config.ts`). Assim nenhum domínio é presumido.
- **Âncoras vindas de fora.** Links externos como `/#processo` (Linktree, redes sociais) carregam a página do zero, e o navegador tenta rolar antes de o React renderizar a seção. O `useInitialHashScroll` refaz essa rolagem depois da montagem e quando as fontes carregam. Âncoras malformadas são ignoradas.
- **Sem fallback de rotas.** É uma página única com âncoras (`#servicos`…). Não há roteamento client-side, então o Render não precisa de regra de rewrite.
- **Logo.** O arquivo original (`design/brand/logo-atlas-original.jpeg`) é uma arte circular com fundo escuro. `scripts/brand_assets.py` recorta o símbolo e o wordmark e torna o fundo transparente. Por isso a logo deve ser usada sobre superfícies escuras. Quando houver um arquivo vetorial oficial, substitua os recortes por ele.
