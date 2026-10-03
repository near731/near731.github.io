import { expect, test } from '@playwright/test'

test('home renders key sections and links', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Áron Imre Németh')
  await expect(page.getByAltText('Placeholder avatar')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'My Professional Experience' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Education', exact: true })).toBeVisible()
  await expect(page.getByText('High School')).toHaveCount(0)
  await expect(page.getByRole('link', { name: /Download CV/ }).first()).toHaveAttribute(
    'href',
    /Aron_Imre_Nemeth_CV_EN\.pdf$/,
  )
  await expect(page.getByRole('link', { name: 'LinkedIn' }).first()).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/aron-imre-nemeth/',
  )
})

test('subpages are reachable', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Skills' }).click()
  await expect(page.getByRole('heading', { name: 'Skills', exact: true })).toBeVisible()
  await page.goto('/projects')
  await expect(page.getByRole('heading', { name: 'Projects', exact: true })).toBeVisible()
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
