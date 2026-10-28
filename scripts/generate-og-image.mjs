// Gera public/og-image.png a partir de scripts/og-image.html usando o Chromium do Playwright.
// Uso: node scripts/generate-og-image.mjs
import { chromium } from '@playwright/test'
import { fileURLToPath, pathToFileURL } from 'node:url'

const template = fileURLToPath(new URL('./og-image.html', import.meta.url))
const output = fileURLToPath(new URL('../public/og-image.png', import.meta.url))

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(pathToFileURL(template).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: output })
await browser.close()
console.log(`Imagem gerada em ${output}`)
