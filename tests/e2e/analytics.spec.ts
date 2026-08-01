import { test, expect } from '@playwright/test';
import { UMAMI_WEBSITE_ID, SHOW_SIGNUP_CTA } from '../../src/data/site';

test('umami script is present only when a website ID is configured', async ({ page }) => {
  await page.goto('/');
  const scripts = page.locator('head script[src*="umami"]');
  await expect(scripts).toHaveCount(UMAMI_WEBSITE_ID ? 1 : 0);
  if (UMAMI_WEBSITE_ID) {
    await expect(scripts).toHaveAttribute('data-website-id', UMAMI_WEBSITE_ID);
  }
});

test('conversion CTAs carry umami event attributes', async ({ page }) => {
  await page.goto('/');
  if (SHOW_SIGNUP_CTA) {
    await expect(
      page.locator('header [data-umami-event="cta-signup"][data-umami-event-position="header"]')
    ).toHaveCount(1);
    await expect(
      page.locator('[data-umami-event="cta-signup"][data-umami-event-position="hero"]')
    ).toHaveCount(1);
    await expect(
      page.locator('[data-umami-event="cta-signup"][data-umami-event-position="banner"]')
    ).toHaveCount(1);
  }
  await expect(
    page.locator('[data-umami-event="cta-demo"][data-umami-event-position="hero"]')
  ).toHaveCount(1);
  await expect(
    page.locator('[data-umami-event="cta-demo"][data-umami-event-position="banner"]')
  ).toHaveCount(1);
});
