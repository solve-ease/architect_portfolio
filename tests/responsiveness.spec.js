import { test, expect } from '@playwright/test'

/**
 * Responsiveness test suite for Architect Portfolio.
 *
 * Covers three device categories defined in playwright.config.js:
 *   - laptop  (1280 × 720)
 *   - tablet  (768 × 1024)
 *   - mobile  (390 × 844)
 *
 * Each test navigates to a page, asserts that no horizontal overflow
 * is present, checks visibility of key layout elements, and captures
 * a full-page screenshot for visual review.
 */

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Assert that the page has no horizontal scroll (no content overflow).
 * @param {import('@playwright/test').Page} page
 */
async function assertNoHorizontalOverflow(page) {
  const overflow = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth
  })
  expect(overflow, 'Page must not have horizontal overflow').toBe(false)
}

// ─── Page list ─────────────────────────────────────────────────────────────

const pages = [
  { name: 'Home',       path: '/' },
  { name: 'About',      path: '/about' },
  { name: 'Projects',   path: '/projects' },
  { name: 'Team',       path: '/team' },
  { name: 'Contact',    path: '/contact' },
  { name: 'Careers',    path: '/careers' },
]

// ─── Tests ─────────────────────────────────────────────────────────────────

test.describe('Responsiveness', () => {

  // ── Navbar ────────────────────────────────────────────────────────────────

  test.describe('Navbar', () => {
    test('desktop navbar is visible on laptop viewport', async ({ page }) => {
      // Navbar only renders on the home route
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      const viewport = page.viewportSize()
      if (viewport.width >= 1024) {
        const desktopNav = page.locator('.navbar-desktop')
        await expect(desktopNav).toBeVisible()
      }
    })

    test('hamburger button is visible on mobile/tablet viewport', async ({ page }) => {
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      const viewport = page.viewportSize()
      if (viewport.width < 1024) {
        const hamburger = page.locator('.hamburger-button')
        await expect(hamburger).toBeVisible()
      }
    })

    test('mobile menu opens and closes via hamburger', async ({ page }) => {
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      const viewport = page.viewportSize()
      if (viewport.width >= 1024) {
        test.skip() // hamburger not present on desktop
        return
      }

      const hamburger = page.locator('.hamburger-button')
      await expect(hamburger).toBeVisible()

      // Open the menu
      await hamburger.click()
      const mobileMenu = page.locator('.mobile-menu')
      await expect(mobileMenu).toHaveClass(/open/)

      // Close the menu
      await hamburger.click()
      await expect(mobileMenu).not.toHaveClass(/open/)
    })
  })

  // ── Per-page overflow & screenshot ───────────────────────────────────────

  for (const { name, path } of pages) {
    test.describe(`${name} page`, () => {
      test('has no horizontal overflow', async ({ page }) => {
        await page.goto(path)
        await page.waitForLoadState('networkidle')
        await assertNoHorizontalOverflow(page)
      })

      test('renders at expected viewport width', async ({ page }) => {
        await page.goto(path)
        await page.waitForLoadState('networkidle')

        const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
        const viewportWidth = page.viewportSize().width
        // body must not extend beyond the viewport
        expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1) // +1 for rounding
      })

      test('screenshot', async ({ page }, testInfo) => {
        await page.goto(path)
        await page.waitForLoadState('networkidle')

        // Allow animations to settle
        await page.waitForTimeout(500)

        const screenshotPath = testInfo.outputPath(`${name.toLowerCase()}.png`)
        await page.screenshot({ path: screenshotPath, fullPage: true })

        // Attach to report
        await testInfo.attach(`${name} – ${testInfo.project.name}`, {
          path: screenshotPath,
          contentType: 'image/png',
        })
      })
    })
  }

  // ── Home-page specific checks ─────────────────────────────────────────────

  test.describe('Home page layout', () => {
    test('3D grid scene is present', async ({ page }) => {
      await page.goto('/')
      await page.waitForLoadState('networkidle')
      const scene = page.locator('.fx-3d-scene')
      await expect(scene).toBeVisible()
    })

    test('main content fills the viewport height', async ({ page }) => {
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      const mainHeight = await page.locator('.main-content').evaluate(el => el.offsetHeight)
      const viewportHeight = page.viewportSize().height
      // main content should be roughly full-screen (within 50px tolerance)
      expect(mainHeight).toBeGreaterThanOrEqual(viewportHeight - 50)
    })
  })

  // ── Projects page specific checks ─────────────────────────────────────────

  test.describe('Projects page layout', () => {
    test('project cards are present', async ({ page }) => {
      await page.goto('/projects')
      await page.waitForLoadState('networkidle')
      const cards = page.locator('.project-card, .project-item, [class*="project"]').first()
      // At least one project-related element should exist
      await expect(cards).toBeAttached()
    })
  })

  // ── Contact page specific checks ──────────────────────────────────────────

  test.describe('Contact page layout', () => {
    test('contact form or contact info is visible', async ({ page }) => {
      await page.goto('/contact')
      await page.waitForLoadState('networkidle')
      // Form or contact section should be visible
      const contactSection = page.locator('form, .contact-section, [class*="contact"]').first()
      await expect(contactSection).toBeAttached()
    })
  })

})
