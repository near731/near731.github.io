import { expect, test } from '@playwright/test'

test('CV downloads follow the selected language in the hero and navigation', async ({ page }) => {
  await page.goto('/')
  for (const [language, label, filename] of [
    ['English', 'Download CV', 'Aron_Imre_Nemeth_CV_EN.pdf'],
    ['Deutsch', 'Lebenslauf herunterladen', 'Aron_Imre_Nemeth_CV_DE.pdf'],
  ]) {
    await page.getByRole('button', { name: language, exact: true }).click()
    const heroLink = page.getByRole('link', { name: label, exact: true })
    await expect(heroLink).toHaveAttribute('href', `/cv/${filename}`)
    await expect(heroLink).toHaveAttribute('download', '')
    const downloadPromise = page.waitForEvent('download')
    await heroLink.click()
    const download = await downloadPromise
    expect(download.suggestedFilename()).toBe(filename)
    expect(await download.failure()).toBeNull()
    const headerLink = page.locator('header a[download]')
    await expect(headerLink).toHaveAttribute('href', `/cv/${filename}`)
    const response = await page.request.get(`/cv/${filename}`)
    expect(response.headers()['content-type']).toContain('application/pdf')
    expect((await response.body()).subarray(0, 5).toString()).toBe('%PDF-')
  }
  await page.setViewportSize({ width: 375, height: 812 })
  await page.getByRole('button', { name: 'Menü öffnen' }).click()
  await expect(page.locator('#mobile-nav a[download]')).toHaveAttribute(
    'href',
    '/cv/Aron_Imre_Nemeth_CV_DE.pdf',
  )
})

test('language defaults to English even with a German browser preference', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'de-DE' })
  const page = await context.newPage()
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { name: 'Summary', exact: true })).toBeVisible()
  await expect(page.getByRole('button', { name: 'English', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await context.close()
})

test('German choice translates routes, persists, and can return to English', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Deutsch', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page.getByRole('heading', { name: 'Kurzprofil', exact: true })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Akademischer Werdegang', exact: true }),
  ).toBeVisible()
  await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Masterstudent/)
  await page
    .getByRole('navigation', { name: 'Hauptnavigation' })
    .getByRole('link', { name: 'Kompetenzen' })
    .click()
  await expect(page.getByRole('heading', { level: 1, name: 'Kompetenzen' })).toBeVisible()
  await expect(page.getByText('Ungarisch', { exact: true })).toBeVisible()
  await page.goto('/projects')
  await expect(page.getByRole('heading', { level: 1, name: 'Projekte' })).toBeVisible()
  const cards = page.locator('main a[href^="/projects/"]')
  await expect(cards).toHaveCount(4)
  for (let i = 0; i < 4; i++) {
    await page.goto('/projects')
    await cards.nth(i).click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'de')
    await expect(page.getByRole('link', { name: /Alle Projekte/ }).first()).toBeVisible()
    await expect(page.locator('article h1')).toBeVisible()
  }
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  const path = new URL(page.url()).pathname
  await page.getByRole('button', { name: 'English', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  expect(new URL(page.url()).pathname).toBe(path)
  await expect(page.getByRole('link', { name: /All projects/ }).first()).toBeVisible()
})

test('mobile language control works without opening the menu', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Deutsch', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await page.getByRole('button', { name: 'Menü öffnen' }).click()
  await page
    .getByRole('navigation', { name: 'Mobile Navigation' })
    .getByRole('link', { name: 'Projekte' })
    .click()
  await expect(page.getByRole('heading', { level: 1, name: 'Projekte' })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  )
})

test('switching works when language storage is blocked', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error('Storage blocked')
    }
    Storage.prototype.setItem = () => {
      throw new Error('Storage blocked')
    }
  })
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await page.getByRole('button', { name: 'Deutsch', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page.getByRole('heading', { name: 'Kurzprofil', exact: true })).toBeVisible()
})

test('unsupported saved languages fall back to English', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('language', 'fr'))
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByRole('heading', { name: 'Summary', exact: true })).toBeVisible()
})

test('German project layouts fit mobile and desktop viewports', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.getByRole('button', { name: 'Deutsch', exact: true }).click()
  for (const width of [375, 1280]) {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/projects')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await page.screenshot({ path: testInfo.outputPath(`projects-de-${width}.png`) })
    for (const slug of [
      'mppi-flow-matching-franka',
      'autonomous-driving-ros2',
      'tactile-raycasting-nn',
      'footstep-sound-cnn',
    ]) {
      await page.goto(`/projects/${slug}`)
      await expect(page.locator('article h1')).toBeVisible()
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      )
      await page.locator('article figure').first().scrollIntoViewIfNeeded()
      await page.screenshot({ path: testInfo.outputPath(`${slug}-de-${width}.png`) })
    }
  }
})
