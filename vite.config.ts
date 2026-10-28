import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

/**
 * Metadados que dependem do domínio oficial (canonical, og:url e og:image absoluta).
 * Só são gerados quando SITE_URL está definido no build — enquanto o domínio
 * não for confirmado, o HTML sai sem eles em vez de apontar para um endereço inventado.
 */
function siteUrlMeta(siteUrl: string | undefined): Plugin {
  return {
    name: 'atlas-site-url-meta',
    transformIndexHtml(html) {
      if (!siteUrl) return html
      // new URL() valida o endereço (falha o build se for inválido) e codifica caracteres especiais.
      const base = new URL(siteUrl).href.replace(/\/+$/, '')
      const tags = [
        `<link rel="canonical" href="${base}/" />`,
        `<meta property="og:url" content="${base}/" />`,
      ].join('\n    ')
      return html
        .replace('content="/og-image.png"', `content="${base}/og-image.png"`)
        .replace('</head>', `    ${tags}\n  </head>`)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), siteUrlMeta(env.SITE_URL)],
  }
})
