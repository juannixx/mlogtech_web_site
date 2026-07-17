import { test, expect } from '@playwright/test';

test('home loads with the hero and primary CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Proof of delivery');
  const cta = page.locator('header nav[aria-label="Main"] a.btn-primary');
  await expect(cta).toHaveText('Try for free');
  await expect(cta).toHaveAttribute('href', 'https://app.mlogtech.com/signup');
});

test('solutions dropdown opens and navigates to route planning', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Solutions' }).click();
  const link = page.getByRole('link', { name: /Route planning/ }).first();
  await expect(link).toBeVisible();
  await link.click();
  await expect(page).toHaveURL(/\/solutions\/route-planning\/$/);
  await expect(page.locator('h1')).toContainText('Route planning software');
});

test('features dropdown links to a feature page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Features' }).click();
  await page.getByRole('link', { name: 'Electronic proof of delivery' }).click();
  await expect(page).toHaveURL(/\/features\/proof-of-delivery\/$/);
});

test('escape closes an open dropdown', async ({ page }) => {
  await page.goto('/');
  const btn = page.getByRole('button', { name: 'Solutions' });
  await btn.click();
  await expect(btn).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(btn).toHaveAttribute('aria-expanded', 'false');
});

test('mobile menu opens via hamburger and closes on Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto('/');
  const burger = page.locator('#nav-burger');
  const menu = page.locator('#mobile-menu');
  await expect(menu).toBeHidden();
  await burger.click();
  await expect(menu).toBeVisible();
  await expect(burger).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(burger).toHaveAttribute('aria-expanded', 'false');
});

test('footer legal links resolve', async ({ page }) => {
  await page.goto('/');
  for (const path of ['/terms/', '/privacy/', '/cookies/', '/faq/', '/security/', '/blog/']) {
    const res = await page.request.get(path);
    expect(res.status(), path).toBe(200);
  }
});
