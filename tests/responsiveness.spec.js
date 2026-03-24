import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

// Ensure screenshots directory exists
const screenshotsDir = path.join(process.cwd(), 'tests', 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

/**
 * Helper to save a named screenshot for the current viewport/browser project.
 * Playwright's built-in screenshot captures the viewport; we derive a label
 * from the viewport width so tests self-document which device they ran on.
 */
async function saveScreenshot(page, label) {
  const width = page.viewportSize()?.width ?? 0;
  const device =
    width <= 480 ? 'mobile' : width <= 900 ? 'tablet' : 'laptop';
  const filename = `${device}-${label}.png`.replace(/[^a-z0-9._-]/gi, '_');
  await page.screenshot({
    path: path.join(screenshotsDir, filename),
    fullPage: true,
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Navigate and wait for the network to be mostly idle, then pause briefly
 * for any CSS animations (e.g. Home's fly-in grid).
 */
async function goTo(page, url, { waitFor = 'load', extraMs = 300 } = {}) {
  await page.goto(url, { waitUntil: waitFor });
  if (extraMs) await page.waitForTimeout(extraMs);
}

/**
 * Returns true when the current project is run with a "mobile" viewport
 * (≤ 768 px wide), matching the CSS breakpoint used in App.css / Navbar.css.
 */
function isMobileViewport(page) {
  return (page.viewportSize()?.width ?? 1280) <= 768;
}

// ─── Navbar responsiveness ─────────────────────────────────────────────────────

test.describe('Navbar responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/');
  });

  test('desktop navbar is visible on laptop and hidden on mobile/tablet', async ({ page }) => {
    const desktopNav = page.locator('.navbar-desktop');
    const hamburgerContainer = page.locator('.hamburger-container');

    if (isMobileViewport(page)) {
      // Mobile / tablet: hamburger visible, desktop nav hidden
      await expect(desktopNav).toBeHidden();
      await expect(hamburgerContainer).toBeVisible();
    } else {
      // Laptop: desktop nav visible, hamburger hidden
      await expect(desktopNav).toBeVisible();
      await expect(hamburgerContainer).toBeHidden();
    }

    await saveScreenshot(page, 'home-navbar');
  });

  test('hamburger menu opens and shows navigation links on mobile/tablet', async ({ page }) => {
    if (!isMobileViewport(page)) {
      test.skip();
    }

    const hamburgerBtn = page.locator('.hamburger-button');
    const mobileMenu = page.locator('.mobile-menu');

    // Initially the menu should be closed (translateX(-100%) so it's off-screen)
    await expect(mobileMenu).not.toHaveClass(/\bopen\b/);

    // Open the menu
    await hamburgerBtn.click();
    await expect(mobileMenu).toHaveClass(/\bopen\b/);

    // Navigation links should be present
    const navLinks = page.locator('.mobile-menu-nav a');
    await expect(navLinks).toHaveCount(6);

    await saveScreenshot(page, 'home-hamburger-open');

    // Close the menu
    await hamburgerBtn.click();
    await expect(mobileMenu).not.toHaveClass(/\bopen\b/);
  });
});

// ─── Home page ─────────────────────────────────────────────────────────────────

test.describe('Home page responsiveness', () => {
  test('renders the 3-D project grid at all viewport sizes', async ({ page }) => {
    await goTo(page, '/', { extraMs: 800 });

    // The hero logo is always present
    const heroLogo = page.locator('.hero-logo');
    await expect(heroLogo).toBeVisible();

    // The 3-D scene container should be in the DOM
    const scene = page.locator('.fx-3d-scene');
    await expect(scene).toBeAttached();

    await saveScreenshot(page, 'home-grid');
  });

  test('fx-grid cards are correctly sized for the viewport', async ({ page }) => {
    await goTo(page, '/', { extraMs: 800 });

    const firstLayer = page.locator('.fx-layer').first();
    await expect(firstLayer).toBeAttached();

    const box = await firstLayer.boundingBox();
    const vw = page.viewportSize()?.width ?? 1280;

    if (vw <= 380) {
      // Extra-small: ≤ 188 px wide  (CSS: width: 188px)
      expect(box?.width).toBeLessThanOrEqual(200);
    } else if (vw <= 600) {
      // Small mobile: ≤ 225 px wide (CSS: width: 225px)
      expect(box?.width).toBeLessThanOrEqual(240);
    } else if (vw <= 1024) {
      // Tablet: ≤ 313 px wide (CSS: width: 313px)
      expect(box?.width).toBeLessThanOrEqual(330);
    } else {
      // Laptop: default 375 px (CSS: width: 375px)
      expect(box?.width).toBeLessThanOrEqual(400);
    }
  });

  test('no horizontal scroll on home page', async ({ page }) => {
    await goTo(page, '/', { extraMs: 500 });

    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // +1 for sub-pixel rounding
  });
});

// ─── Projects page ─────────────────────────────────────────────────────────────

test.describe('Projects page responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/projects');
  });

  test('renders projects grid', async ({ page }) => {
    const grid = page.locator('.projects-grid');
    await expect(grid).toBeVisible();

    await saveScreenshot(page, 'projects');
  });

  test('projects grid uses single column on mobile', async ({ page }) => {
    const grid = page.locator('.projects-grid');
    await expect(grid).toBeVisible();

    const vw = page.viewportSize()?.width ?? 1280;
    if (vw <= 768) {
      // On mobile (≤768px) the CSS sets grid-template-columns: 1fr
      const columnCount = await grid.evaluate((el) => {
        const cols = getComputedStyle(el).gridTemplateColumns;
        return cols.trim().split(/\s+/).length;
      });
      expect(columnCount).toBe(1);
    }
  });

  test('no horizontal scroll on projects page', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
});

// ─── About page ────────────────────────────────────────────────────────────────

test.describe('About page responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/about');
  });

  test('renders about page at all viewport sizes', async ({ page }) => {
    // The about page always shows at least one slide
    const slide = page.locator('.about-slide').first();
    await expect(slide).toBeAttached();

    await saveScreenshot(page, 'about');
  });

  test('about slide stacks vertically on tablet and mobile', async ({ page }) => {
    const vw = page.viewportSize()?.width ?? 1280;
    const slide = page.locator('.about-slide').first();
    await expect(slide).toBeAttached();

    if (vw <= 1024) {
      // CSS sets flex-direction: column at ≤1024px
      const flexDir = await slide.evaluate(
        (el) => getComputedStyle(el).flexDirection,
      );
      expect(flexDir).toBe('column');
    }
  });

  test('no horizontal scroll on about page', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
});

// ─── Contact page ──────────────────────────────────────────────────────────────

test.describe('Contact page responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/contact');
  });

  test('renders contact form at all viewport sizes', async ({ page }) => {
    const form = page.locator('form, .contact-form').first();
    await expect(form).toBeAttached();

    await saveScreenshot(page, 'contact');
  });

  test('contact grid becomes single column on mobile', async ({ page }) => {
    const grid = page.locator('.contact-grid');
    await expect(grid).toBeAttached();

    const vw = page.viewportSize()?.width ?? 1280;
    if (vw <= 768) {
      // CSS: grid-template-columns: 1fr
      const columnCount = await grid.evaluate((el) => {
        const cols = getComputedStyle(el).gridTemplateColumns;
        return cols.trim().split(/\s+/).length;
      });
      expect(columnCount).toBe(1);
    }
  });

  test('form rows become single column on mobile', async ({ page }) => {
    const vw = page.viewportSize()?.width ?? 1280;
    if (vw <= 768) {
      const formRow = page.locator('.form-row').first();
      if ((await formRow.count()) > 0) {
        const columnCount = await formRow.evaluate((el) => {
          const cols = getComputedStyle(el).gridTemplateColumns;
          return cols.trim().split(/\s+/).length;
        });
        expect(columnCount).toBe(1);
      }
    }
  });

  test('no horizontal scroll on contact page', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
});

// ─── Team page ─────────────────────────────────────────────────────────────────

test.describe('Team page responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/team');
  });

  test('renders team page at all viewport sizes', async ({ page }) => {
    // Team navbar (Navbar.jsx) should be present
    const teamNav = page.locator('.team-navbar, .team-navbar-container').first();
    await expect(teamNav).toBeAttached();

    await saveScreenshot(page, 'team');
  });

  test('team navbar has correct width on mobile', async ({ page }) => {
    const vw = page.viewportSize()?.width ?? 1280;
    const teamNavbar = page.locator('.team-navbar');
    await expect(teamNavbar).toBeAttached();

    if (vw <= 768) {
      // CSS sets width: 90vw on mobile
      const width = await teamNavbar.evaluate((el) => getComputedStyle(el).width);
      const widthPx = parseFloat(width);
      // 90vw means 90% of viewport width
      expect(widthPx).toBeLessThanOrEqual(vw * 0.92); // slight tolerance
    }
  });

  test('no horizontal scroll on team page', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
});

// ─── Careers page ──────────────────────────────────────────────────────────────

test.describe('Careers page responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/careers');
  });

  test('renders careers page at all viewport sizes', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
    await saveScreenshot(page, 'careers');
  });

  test('no horizontal scroll on careers page', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
});

// ─── Privacy Info page ─────────────────────────────────────────────────────────

test.describe('Privacy Info page responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await goTo(page, '/privacy-info');
  });

  test('renders privacy info page at all viewport sizes', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
    await saveScreenshot(page, 'privacy-info');
  });

  test('no horizontal scroll on privacy info page', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
});

// ─── Project Detail page ───────────────────────────────────────────────────────

test.describe('Project Detail page responsiveness', () => {
  // Use the first project slug that exists in the data
  const projectId = 'urban-square';

  test.beforeEach(async ({ page }) => {
    await goTo(page, `/project/${projectId}`);
  });

  test('renders project detail page at all viewport sizes', async ({ page }) => {
    // The project detail hero is always present (class is pd-hero)
    const hero = page.locator('.pd-hero');
    await expect(hero).toBeAttached();

    await saveScreenshot(page, 'project-detail');
  });

  test('no horizontal scroll on project detail page', async ({ page }) => {
    const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const clientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });
});

// ─── Cross-page screenshot sweep ───────────────────────────────────────────────

test.describe('Full-page screenshot sweep', () => {
  const pages = [
    { label: 'home', url: '/' },
    { label: 'projects', url: '/projects' },
    { label: 'about', url: '/about' },
    { label: 'team', url: '/team' },
    { label: 'contact', url: '/contact' },
    { label: 'careers', url: '/careers' },
    { label: 'privacy-info', url: '/privacy-info' },
  ];

  for (const { label, url } of pages) {
    test(`captures full-page screenshot: ${label}`, async ({ page }) => {
      await goTo(page, url, { extraMs: 600 });
      await saveScreenshot(page, `sweep-${label}`);

      // Basic smoke: page renders without a crash (body is visible)
      await expect(page.locator('body')).toBeVisible();
    });
  }
});
