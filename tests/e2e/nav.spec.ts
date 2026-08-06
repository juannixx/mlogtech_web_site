import { test, expect } from '@playwright/test';
import { SHOW_SIGNUP_CTA } from '../../src/data/site';

test('home loads with the hero and header login link', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Proof of delivery');
  // Signup CTA in the header follows SHOW_SIGNUP_CTA (hidden while the trial flow is not ready).
  await expect(page.locator('header nav[aria-label="Main"] a.btn-primary')).toHaveCount(
    SHOW_SIGNUP_CTA ? 1 : 0
  );
  const login = page.locator('header nav[aria-label="Main"]').getByRole('link', { name: 'Log in' });
  await expect(login).toHaveAttribute('href', 'https://molina-express-app.web.app/client/login');
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

test('solutions dropdown reaches the solutions hub page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Solutions' }).click();
  await page.getByRole('link', { name: 'See all solutions' }).click();
  await expect(page).toHaveURL(/\/solutions\/$/);
  await expect(page.locator('h1')).toContainText('One platform');
});

test('features dropdown reaches the features hub page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Features' }).click();
  await page.getByRole('link', { name: 'See all features' }).click();
  await expect(page).toHaveURL(/\/features\/$/);
});

test('header links to the about page', async ({ page }) => {
  await page.goto('/');
  await page.locator('header nav[aria-label="Main"]').getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/\/about\/$/);
});

test('features dropdown links to a feature page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Features' }).click();
  await page.getByRole('link', { name: 'Electronic proof of delivery' }).click();
  await expect(page).toHaveURL(/\/features\/proof-of-delivery\/$/);
});

test('arrow keys move focus through an open dropdown', async ({ page }) => {
  await page.goto('/');
  const btn = page.getByRole('button', { name: 'Solutions' });
  await btn.focus();
  await page.keyboard.press('ArrowDown');
  await expect(btn).toHaveAttribute('aria-expanded', 'true');
  const panel = page.locator('[data-drop]:has(button:has-text("Solutions")) .drop-panel');
  const links = panel.locator('a');
  await expect(links.first()).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(links.nth(1)).toBeFocused();
  await page.keyboard.press('ArrowUp');
  await expect(links.first()).toBeFocused();
  // Arrow-up from the first link wraps to the last link.
  await page.keyboard.press('ArrowUp');
  const count = await links.count();
  await expect(links.nth(count - 1)).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(btn).toHaveAttribute('aria-expanded', 'false');
  await expect(btn).toBeFocused();
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
