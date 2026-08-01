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

test('valid demo submit fires the demo-submit event', async ({ page }) => {
  await page.addInitScript(() => {
    (window as any).__umamiEvents = [];
    (window as any).umami = {
      track: (name: string) => (window as any).__umamiEvents.push(name),
    };
  });
  await page.goto('/demo/');
  await page.locator('#d-name').fill('Dana Fields');
  await page.locator('#d-email').fill('dana@fleetco.example');
  await page.locator('#demo-form button[type="submit"]').click();
  await expect(page.locator('#demo-success')).toBeVisible();
  expect(await page.evaluate(() => (window as any).__umamiEvents)).toContain('demo-submit');
});

test('invalid demo submit does not fire the event', async ({ page }) => {
  await page.addInitScript(() => {
    (window as any).__umamiEvents = [];
    (window as any).umami = {
      track: (name: string) => (window as any).__umamiEvents.push(name),
    };
  });
  await page.goto('/demo/');
  await page.locator('#demo-form button[type="submit"]').click();
  expect(await page.evaluate(() => (window as any).__umamiEvents)).toEqual([]);
});
