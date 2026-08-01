import { test, expect } from '@playwright/test';
import { UMAMI_WEBSITE_ID } from '../../src/data/site';

test('umami script is present only when a website ID is configured', async ({ page }) => {
  await page.goto('/');
  const scripts = page.locator('head script[src*="umami"]');
  await expect(scripts).toHaveCount(UMAMI_WEBSITE_ID ? 1 : 0);
  if (UMAMI_WEBSITE_ID) {
    await expect(scripts).toHaveAttribute('data-website-id', UMAMI_WEBSITE_ID);
  }
});
