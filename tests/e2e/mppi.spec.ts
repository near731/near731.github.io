import { expect, test } from '@playwright/test'

test('MPPI page separates real footage and simulation metrics in both languages', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/projects/mppi-flow-matching-franka')
  const videos = page.locator('article video')
  await expect(videos.nth(0)).toHaveAttribute(
    'aria-label',
    'Pick and place in simulation with the planner trajectories drawn',
  )
  await expect(videos.nth(1)).toHaveAttribute('aria-label', 'Real Hardware')
  await expect(
    videos.nth(1).locator('..').getByText('Real Hardware', { exact: true }),
  ).toBeVisible()
  await expect(page.getByText(/12 October 2026/)).toHaveCount(0)
  await expect(videos.nth(1)).toHaveAttribute('src', /real-brick/)
  await expect(page.getByText('96.0%', { exact: true })).toBeVisible()
  await expect(page.getByText('90.4%', { exact: true })).toBeVisible()
  await expect(page.getByText('98.7%', { exact: true })).toHaveCount(0)
  await expect(page.getByText('TODO')).toHaveCount(0)
  for (const [heading, count] of [
    ['Simulation: six objects', 'sim'],
    ['Real robot: six objects', 'real'],
  ] as const) {
    const section = page.getByRole('heading', { name: heading }).locator('..')
    await expect(section.locator('video')).toHaveCount(6)
    await expect(section.locator('video').first()).toHaveAttribute('src', new RegExp(count))
    const boxes = await section.locator('video').evaluateAll((elements) =>
      elements.map((el) => {
        const rect = el.getBoundingClientRect()
        return { x: rect.x, y: rect.y }
      }),
    )
    // Two columns, three rows.
    for (let row = 0; row < 3; row++) expect(boxes[row * 2].y).toBe(boxes[row * 2 + 1].y)
    expect(boxes[2].y).toBeGreaterThan(boxes[0].y)
    expect(boxes[4].y).toBeGreaterThan(boxes[2].y)
    expect(boxes[0].x).toBeLessThan(boxes[1].x)
  }
  await expect(page.getByText('576/600 (96.0%)')).toBeVisible()
  await expect(page.getByText('226/250 (90.4%)')).toBeVisible()
  await expect(page.getByText(/hand-edited 60 of the 250 goals/)).toBeVisible()
  const older = page
    .locator('details')
    .filter({ has: page.getByText('Earlier work: grasp and lift') })
  await expect(older.locator('video')).toHaveCount(6)
  await expect(older.locator('video').first()).toBeHidden()
  await older.locator('summary').click()
  await expect(older.getByText(/91.7% success/)).toBeVisible()

  await page.getByRole('button', { name: 'Deutsch', exact: true }).click()
  await expect(page.getByText('96,0 %', { exact: true })).toBeVisible()
  await expect(page.getByText('226/250 (90,4 %)')).toBeVisible()
  await expect(videos.nth(1)).toHaveAttribute('aria-label', 'Reale Hardware')
  await expect(
    videos.nth(1).locator('..').getByText('Reale Hardware', { exact: true }),
  ).toBeVisible()
  await expect(page.getByText('MPPI-Kostengewichtung', { exact: true })).toBeVisible()
  for (const width of [375, 1280]) {
    await page.setViewportSize({ width, height: 900 })
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  }
})

test('brick card preview has an independent pause control and opens the project', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/projects')
  const video = page.locator('main video').first()
  await expect(video).toHaveAttribute('src', /real-brick/)
  await expect(video).toHaveJSProperty('muted', true)
  await expect(video).toHaveJSProperty('loop', true)
  await expect(video).toHaveJSProperty('controls', false)
  await expect(page.locator('a button')).toHaveCount(0)
  const control = video.locator('..').getByRole('button')
  await expect(control).toHaveAttribute('aria-label', 'Pause video')
  await control.click()
  await expect(video).toHaveJSProperty('paused', true)
  await expect(page).toHaveURL(/\/projects$/)
  await page.getByRole('link', { name: /Sampling-based MPC/ }).click()
  await expect(page).toHaveURL(/\/projects\/mppi-flow-matching-franka$/)
})

test('card preview respects reduced motion and its cover still opens the project', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/projects')
  const video = page.locator('main video').first()
  await expect(video).toHaveJSProperty('loop', false)
  await expect(video).toHaveJSProperty('paused', true)
  await expect(page.getByRole('button', { name: /Pause video|Play video/ })).toHaveCount(0)
  const box = await video.boundingBox()
  expect(box).not.toBeNull()
  await page.mouse.click(box!.x + box!.width / 2, box!.y + box!.height / 2)
  await expect(page).toHaveURL(/\/projects\/mppi-flow-matching-franka$/)
})
