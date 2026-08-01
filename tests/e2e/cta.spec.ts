import { test, expect } from '@playwright/test';
import { SHOW_SIGNUP_CTA, MEASURED_LOGIN_TO_ROUTE_CLAIM } from '../../src/data/site';

const PAGES = ['/', '/features/proof-of-delivery/', '/solutions/route-planning/'];

const EXPECTED_CHIPS = SHOW_SIGNUP_CTA
  ? [
      'Free trial, no card required',
      'Set up in minutes, not weeks',
      'Your data exports anytime',
    ]
  : [
      MEASURED_LOGIN_TO_ROUTE_CLAIM,
      'Import orders from CSV or API',
      'Per-driver or per-order pricing',
    ];

for (const path of PAGES) {
  test(`cta banner shows the three reassurance chips on ${path}`, async ({ page }) => {
    await page.goto(path);
    const chips = page.locator('[data-testid="cta-chips"] li');
    await expect(chips).toHaveCount(3);
    await expect(chips.nth(0)).toContainText(EXPECTED_CHIPS[0]);
    await expect(chips.nth(1)).toContainText(EXPECTED_CHIPS[1]);
    await expect(chips.nth(2)).toContainText(EXPECTED_CHIPS[2]);
  });
}

test('cta banner note never duplicates the free-trial chip', async ({ page }) => {
  await page.goto('/');
  const banner = page.locator('section:has([data-testid="cta-chips"])');
  const noteText = await banner.locator('p').first().textContent();
  expect(noteText).not.toContain('Free trial, no card required');
});

// Regression: with signup hidden, no CTA band anywhere on the site may still
// claim a free trial or "no card required" via a page-supplied note that
// bypasses the component's flag-aware default (see fix round 1).
if (!SHOW_SIGNUP_CTA) {
  const ALL_CTA_PAGES = [
    '/',
    '/about/',
    '/pricing/',
    '/integrations/',
    '/faq/',
    '/features/',
    '/features/proof-of-delivery/',
    '/solutions/',
    '/solutions/route-planning/',
    '/blog/',
    '/blog/what-is-epod/',
    '/security/',
  ];

  for (const path of ALL_CTA_PAGES) {
    test(`cta band on ${path} makes no free-trial claim while signup is hidden`, async ({
      page,
    }) => {
      await page.goto(path);
      const banner = page.locator('section:has([data-testid="cta-chips"])');
      const bannerText = await banner.textContent();
      expect(bannerText).not.toMatch(/free trial/i);
      expect(bannerText).not.toMatch(/no card required/i);
      expect(bannerText).not.toMatch(/\btrial\b/i);
      expect(bannerText).not.toMatch(/\bstart free\b/i);
    });
  }
}
