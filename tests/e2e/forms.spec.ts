import { test, expect } from '@playwright/test';

test('demo form blocks empty submission via native validation', async ({ page }) => {
  await page.goto('/demo/');
  await page.locator('#demo-form button[type="submit"]').click();
  const nameValid = await page
    .locator('#d-name')
    .evaluate((el) => (el as HTMLInputElement).checkValidity());
  expect(nameValid).toBe(false);
  await expect(page).toHaveURL(/\/demo\/$/);
});

test('demo form has a honeypot field hidden from users', async ({ page }) => {
  await page.goto('/demo/');
  const honeypot = page.locator('#demo-form [name="companysite"]');
  await expect(honeypot).toBeHidden();
});

test('valid demo submit shows the personalized success state', async ({ page }) => {
  await page.goto('/demo/');
  await page.locator('#d-name').fill('Dana Fields');
  await page.locator('#d-email').fill('dana@fleetco.example');
  await page.locator('#demo-form button[type="submit"]').click();
  await expect(page.locator('#demo-success')).toBeVisible();
  await expect(page.locator('#demo-form')).toBeHidden();
  await expect(page.locator('#ds-name')).toHaveText('Dana');
  await expect(page.locator('#ds-email')).toHaveText('dana@fleetco.example');
});

test('contact form requires a valid email', async ({ page }) => {
  await page.goto('/contact/');
  await page.locator('#c-first').fill('Test');
  await page.locator('#c-last').fill('Person');
  await page.locator('#c-email').fill('not-an-email');
  await page.locator('#c-message').fill('Hello');
  await page.locator('#contact-form button[type="submit"]').click();
  const emailValid = await page
    .locator('#c-email')
    .evaluate((el) => (el as HTMLInputElement).checkValidity());
  expect(emailValid).toBe(false);
});
