# Atlas Software: landing page

Landing page institucional da Atlas Software, com serviços, portfólio, processo de trabalho, perguntas frequentes e contato comercial pelo WhatsApp.

## Stack

- React 19 + TypeScript 6 (modo estrito)
- Vite 8
- Tailwind CSS 4 (tokens em `src/styles/global.css`)
- Lucide React (ícones) e Fontsource (fontes locais)
- ESLint 10 + typescript-eslint
- Playwright + axe-core (testes de navegador e acessibilidade)
- Render Static Site (publicação)

Detalhes em [docs/architecture.md](docs/architecture.md). A pesquisa de referências e a direção visual estão em [docs/design-research.md](docs/design-research.md).

## Pré-requisitos

- Node.js 24 LTS (mínimo 22.13, veja `.node-version`)
- npm 11

## Instalação e desenvolvimento

```bash
npm ci
npm run dev            # http://localhost:5173
```

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Verifica tipos e gera o build de produção em `dist/` |
| `npm run preview` | Serve o build de produção (`http://localhost:4173`) |
| `npm run typecheck` | Só a verificação de tipos |
| `npm run lint` | ESLint |
| `npm run test:e2e` | Testes Playwright (gera o build e sobe o preview sozinho) |

Na primeira execução dos testes, instale o navegador:

```bash
npx playwright install chromium
```

Os testes cobrem metadados, console sem erros, imagens, âncoras da navegação, links do WhatsApp, ausência de rolagem horizontal de 320 a 1920px, menu mobile (abrir, navegar, fechar com Esc), link de pular conteúdo, FAQ pelo teclado e auditoria axe WCAG 2.2 A/AA. Rodam em desktop (1440px) e mobile (Pixel 7).

## Conteúdo

Todo o texto fica em `src/data/`:

- `contact.ts`: telefone do WhatsApp, mensagem inicial, Instagram, Linktree e itens do menu.
- `content.ts`: serviços, processo, princípios e perguntas frequentes.
- `projects.ts`: projetos do portfólio.

### Logo e imagens

- A arte original da logo está em `design/brand/logo-atlas-original.jpeg`. Para regenerar os recortes e os favicons depois de trocar a arte, rode `pip install pillow` e depois `python scripts/brand_assets.py`.
- Imagem de compartilhamento (`public/og-image.png`): edite `scripts/og-image.html` e rode `node scripts/generate-og-image.mjs`.
- As capturas dos projetos (`src/assets/projects/`) foram tiradas dos sites publicados em 28/10/2026.

## Variáveis de configuração

| Variável | Onde | Uso |
| --- | --- | --- |
| `SITE_URL` | Build (Render → Environment) | Opcional. Com o domínio oficial (ex.: `https://www.exemplo.com.br`), o build adiciona `canonical`, `og:url` e a URL absoluta do `og:image`. Sem ela, essas tags são omitidas. |
| `NODE_VERSION` | Render | Versão do Node no build (`24`). |

Não há segredos no projeto. Lembre que qualquer variável com prefixo `VITE_` vai para o JavaScript público.

## Deploy no Render (Static Site)

### Pelo painel

1. **New → Static Site** e conecte o repositório `atlas-software-landing-page`.
2. Preencha:
   - **Branch:** `main`
   - **Root Directory:** vazio (raiz do repositório)
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist`
   - **Auto-Deploy:** `On Commit`
3. Em **Environment**, adicione `NODE_VERSION=24` e, quando houver domínio, `SITE_URL`.
4. Em **Headers** (opcional, recomendado), adicione `/assets/*` com `Cache-Control: public, max-age=31536000, immutable`. Os arquivos em `assets/` têm hash no nome.

### Por Blueprint

O arquivo `render.yaml` descreve a mesma configuração. No Render, use **New → Blueprint** apontando para o repositório.

Não é preciso regra de rewrite, porque a página é única e usa âncoras.

## Domínio próprio (futuro)

1. No serviço do Render, abra **Settings → Custom Domains → Add**.
2. Crie no provedor de DNS os registros indicados pelo Render: `CNAME` para `www` e `A`/`ALIAS` para o domínio raiz.
3. Aguarde a verificação. O certificado HTTPS é emitido automaticamente.
4. Defina `SITE_URL` com o domínio final e faça um novo deploy.
5. Se quiser, crie um `public/sitemap.xml` com a URL definitiva e referencie-o no `robots.txt`.

## Dados pendentes de confirmação

- **Domínio oficial.** `atlassoftware.dev` responde com um site Docusaurus de conteúdo padrão, sem vínculo confirmado com a marca. Por isso não é usado como canonical.
- **Autorização para exibir clientes.** É preciso confirmar se Emiju Cones e Lava Car e Estética Danúbio autorizam aparecer no portfólio com nome e captura de tela.
- **Link do lava-car.** `https://lavacar.onrender.com` tem o mesmo título e as mesmas funcionalidades do projeto `lavacar-agendamento`, mas o README dele não registra essa URL.
- **Serviço de evolução/manutenção.** Está listado como oferta. Confirme se faz parte do que a Atlas vende hoje.
- **E-mail comercial.** Nenhum e-mail foi confirmado, então o site não exibe e-mail.
- **Arquivo vetorial da logo.** Os recortes vêm de uma imagem JPEG. Um SVG oficial melhoraria a nitidez em telas grandes.
