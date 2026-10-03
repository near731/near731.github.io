import { expect, test } from '@playwright/test'

test('home renders key sections and links', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Áron Imre Németh')
  await expect(page.getByAltText('Placeholder avatar')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'My Professional Experience' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Education', exact: true })).toBeVisible()
  await expect(page.getByText('High School')).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'Relevant Coursework' })).toBeVisible()
  await expect(page.getByText('Roboterdynamik')).toBeVisible()
  await expect(page.getByText('Deep Generative Models')).toHaveCount(0)
  await expect(page.getByRole('link', { name: /CV/ })).toHaveCount(0)
  await expect(page.getByRole('link', { name: 'LinkedIn' }).first()).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/aron-imre-nemeth/',
  )
})

test('subpages are reachable', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Skills' }).click()
  await expect(page.getByRole('heading', { level: 1, name: 'Skills', exact: true })).toBeVisible()
  await page.goto('/projects')
  await expect(page.getByRole('heading', { level: 1, name: 'Projects', exact: true })).toBeVisible()
})

test('theme toggle switches and persists', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto('/')
  const html = page.locator('html')
  await expect(html).not.toHaveClass(/dark/)
  await page.getByRole('button', { name: /dark theme/ }).click()
  await expect(html).toHaveClass(/dark/)
  await page.reload()
  await expect(html).toHaveClass(/dark/)
})

test('project cards open detail pages', async ({ page }) => {
  await page.goto('/projects')
  await page.getByRole('link', { name: /Autonomous driving in ROS 2/ }).click()
  await expect(page).toHaveURL(/\/projects\/autonomous-driving-ros2$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Autonomous driving in ROS 2')
  await page.goto('/projects/does-not-exist')
  await expect(page.getByRole('heading', { name: 'Project not found' })).toBeVisible()
})

test('lab project shows the planner diagram and third-party links', async ({ page }) => {
  await page.goto('/projects/mppi-flow-matching-franka')
  await expect(page.getByRole('group', { name: /Planner loop/ })).toBeVisible()
  await expect(page.getByRole('link', { name: 'FoundationPose' }).first()).toHaveAttribute(
    'href',
    'https://github.com/NVlabs/FoundationPose',
  )
  await expect(page.getByRole('link', { name: 'CRISP', exact: true })).toHaveAttribute(
    'href',
    'https://github.com/learnsyslab/crisp_controllers',
  )
})

test('lab hero is a silent looping clip with a pause button', async ({ page }) => {
  await page.goto('/projects/mppi-flow-matching-franka')
  const hero = page.locator('article video').first()
  await expect(hero).toHaveJSProperty('muted', true)
  await expect(hero).toHaveJSProperty('loop', true)
  await expect(page.getByRole('button', { name: /Pause video|Play video/ })).toBeVisible()
  await expect(page.getByText('Simulation').first()).toBeVisible()
  await expect(page.locator('article video')).toHaveCount(10)
})

test('reduced motion: no autoplay, native controls instead', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/projects/mppi-flow-matching-franka')
  const hero = page.locator('article video').first()
  await expect(hero).toHaveJSProperty('loop', false)
  await expect(hero).toHaveJSProperty('controls', true)
  await expect(page.getByRole('button', { name: /Pause video|Play video/ })).toHaveCount(0)
})

test('manual video pause survives scrolling away and back, then Play resumes', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  // Chromium may lack H.264 support. Stub media playback, retaining real scroll/visibility events.
  await page.addInitScript(() => {
    const paused = new WeakMap<HTMLMediaElement, boolean>()
    Object.defineProperty(HTMLMediaElement.prototype, 'paused', {
      get() {
        return paused.get(this) ?? true
      },
    })
    HTMLMediaElement.prototype.play = function () {
      paused.set(this, false)
      this.dataset.playCalls = String(Number(this.dataset.playCalls ?? 0) + 1)
      this.dispatchEvent(new Event('play'))
      return Promise.resolve()
    }
    HTMLMediaElement.prototype.pause = function () {
      paused.set(this, true)
      this.dispatchEvent(new Event('pause'))
    }
    const NativeObserver = window.IntersectionObserver
    window.IntersectionObserver = class extends NativeObserver {
      constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
        super((entries, observer) => {
          callback(entries, observer)
          for (const entry of entries) {
            if (entry.target instanceof HTMLVideoElement) {
              entry.target.dataset.visible = String(entry.isIntersecting)
            }
          }
        }, options)
      }
    }
  })
  await page.goto('/projects/mppi-flow-matching-franka')
  const hero = page.locator('article video').first()
  await hero.scrollIntoViewIfNeeded()
  await expect(hero).toHaveAttribute('data-visible', 'true')
  await page.getByRole('button', { name: 'Pause video' }).click()
  await expect(hero).toHaveJSProperty('paused', true)
  const calls = await hero.getAttribute('data-play-calls')

  await page.locator('footer').scrollIntoViewIfNeeded()
  await expect(hero).toHaveAttribute('data-visible', 'false')
  await hero.scrollIntoViewIfNeeded()
  await expect(hero).toHaveAttribute('data-visible', 'true')
  await expect(hero).toHaveJSProperty('paused', true)
  await expect(hero).toHaveAttribute('data-play-calls', calls!)

  await page.getByRole('button', { name: 'Play video' }).click()
  await expect(hero).toHaveJSProperty('paused', false)
  await page.locator('footer').scrollIntoViewIfNeeded()
  await expect(hero).toHaveAttribute('data-visible', 'false')
  await expect(hero).toHaveJSProperty('paused', true)
  await hero.scrollIntoViewIfNeeded()
  await expect(hero).toHaveAttribute('data-visible', 'true')
  await expect(hero).toHaveJSProperty('paused', false)
})
