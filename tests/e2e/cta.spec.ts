import { test, expect } from '@playwright/test';
import { SHOW_SIGNUP_CTA } from '../../src/data/site';

const PAGES = ['/', '/features/proof-of-delivery/', '/solutions/route-planning/'];

const EXPECTED_CHIPS = SHOW_SIGNUP_CTA
  ? [
      'Free trial, no card required',
      'Set up in minutes, not weeks',
      'Your data exports anytime',
    ]
  : [
      'From login to first route in under a minute',
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
