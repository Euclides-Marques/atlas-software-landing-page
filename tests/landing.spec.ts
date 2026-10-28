import AxeBuilder from '@axe-core/playwright'
import { expect, test, type Page } from '@playwright/test'

const WHATSAPP = /^https:\/\/wa\.me\/5514991776580\?text=/
const SECTIONS = ['servicos', 'projetos', 'processo', 'sobre', 'duvidas']

function isMobile(page: Page) {
  return (page.viewportSize()?.width ?? 0) < 1024
}

/** Rola a página inteira para carregar as imagens lazy. */
async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      // "instant": o site usa scroll-behavior: smooth, que atrasaria cada passo.
      window.scrollTo({ top: y, behavior: 'instant' })
      await new Promise((resolve) => setTimeout(resolve, 60))
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  })
}

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('carrega com metadados e um único h1', async ({ page }) => {
  await expect(page).toHaveTitle(/Atlas Software/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Atlas Software/)
  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('negócio')
})

test('não registra erros no console nem requisições com falha', async ({ page }) => {
  const problems: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') problems.push(message.text())
  })
  page.on('requestfailed', (request) => problems.push(`falhou: ${request.url()}`))
  await page.reload({ waitUntil: 'networkidle' })
  await scrollThrough(page)
  await page.waitForLoadState('networkidle')
  expect(problems).toEqual([])
})

test('todas as imagens visíveis carregam e têm atributo alt e dimensões', async ({ page }) => {
  await scrollThrough(page)
  const images = await page.locator('img').evaluateAll((nodes) =>
    Promise.all(
      nodes.map(async (node) => {
        const image = node as HTMLImageElement
        const visible = image.checkVisibility()
        // Imagens lazy ocultas por CSS (ex.: só no desktop) nunca são baixadas; não há o que carregar.
        if (visible) await image.decode().catch(() => undefined)
        return {
          src: image.getAttribute('src'),
          hasAlt: image.hasAttribute('alt'),
          hasSize: image.hasAttribute('width') && image.hasAttribute('height'),
          loaded: !visible || (image.complete && image.naturalWidth > 0),
        }
      }),
    ),
  )
  expect(images.length).toBeGreaterThan(0)
  for (const image of images) {
    expect(image, image.src ?? '').toMatchObject({ hasAlt: true, hasSize: true, loaded: true })
  }
})

test('âncoras da navegação apontam para seções existentes', async ({ page }) => {
  for (const id of SECTIONS) {
    await expect(page.locator(`section#${id}`)).toHaveCount(1)
  }
  const anchors = await page.locator('a[href^="#"]').evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute('href')),
  )
  for (const href of new Set(anchors)) {
    await expect(page.locator(href as string), `destino de ${href}`).toHaveCount(1)
  }
})

test('CTAs de contato levam ao WhatsApp oficial e links externos são seguros', async ({ page }) => {
  const whatsappLinks = page.locator('a[href*="wa.me"]')
  expect(await whatsappLinks.count()).toBeGreaterThanOrEqual(3)
  for (const href of await whatsappLinks.evaluateAll((nodes) => nodes.map((node) => node.getAttribute('href')))) {
    expect(href).toMatch(WHATSAPP)
  }

  const externals = await page.locator('a[target="_blank"]').evaluateAll((nodes) =>
    nodes.map((node) => ({ href: node.getAttribute('href'), rel: node.getAttribute('rel') ?? '' })),
  )
  for (const link of externals) {
    expect(link.href).toMatch(/^https:\/\//)
    expect(link.rel, link.href ?? '').toContain('noopener')
  }
})

test('sem rolagem horizontal em larguras comuns', async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 })
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow, `largura ${width}px`).toBeLessThanOrEqual(0)
  }
})

test('menu mobile abre, navega e fecha com Escape', async ({ page }) => {
  test.skip(!isMobile(page), 'Menu mobile só existe abaixo de 1024px')

  const toggle = page.getByRole('button', { name: 'Abrir menu' })
  const menu = page.locator('#menu-mobile')
  await expect(menu).toBeHidden()

  await toggle.click()
  await expect(page.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true')
  await expect(menu).toBeVisible()

  await menu.getByRole('link', { name: 'Projetos' }).click()
  await expect(menu).toBeHidden()
  await expect(page).toHaveURL(/#projetos$/)

  await page.getByRole('button', { name: 'Abrir menu' }).click()
  await page.keyboard.press('Escape')
  await expect(menu).toBeHidden()
  await expect(page.getByRole('button', { name: 'Abrir menu' })).toBeFocused()
})

test('navegação desktop leva às seções', async ({ page }) => {
  test.skip(isMobile(page), 'Navegação principal visível apenas no desktop')
  await page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: 'Processo' }).click()
  await expect(page).toHaveURL(/#processo$/)
  await expect(page.locator('#processo-title')).toBeInViewport()
})

test('link para pular ao conteúdo é o primeiro foco', async ({ page }) => {
  await page.keyboard.press('Tab')
  const skip = page.getByRole('link', { name: 'Pular para o conteúdo' })
  await expect(skip).toBeFocused()
  await expect(skip).toBeInViewport()
})

test('perguntas frequentes abrem pelo teclado', async ({ page }) => {
  const question = page.locator('#duvidas summary').first()
  await question.focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('#duvidas details').first()).toHaveAttribute('open', '')
})

test('sem violações de acessibilidade detectáveis (WCAG 2.2 A/AA)', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await scrollThrough(page)
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze()
  const summary = results.violations.map((violation) => `${violation.id}: ${violation.nodes.length} nó(s)`)
  expect(summary).toEqual([])
})
