import { test, expect } from '@playwright/test';

test('home stat strip shows the four verified aggregates', async ({ page }) => {
  await page.goto('/');
  const strip = page.locator('section[aria-label="Platform proof points"]');
  await expect(strip).toBeVisible();
  await expect(strip).toContainText('£200k+');
  await expect(strip).toContainText('5,600+');
  await expect(strip).toContainText('160+');
  await expect(strip).toContainText('80+');
  await expect(strip).toContainText('Real numbers from a live last-mile operation.');
});

test('stat strip sits right after the trust strip', async ({ page }) => {
  await page.goto('/');
  const order = await page.evaluate(() => {
    const trust = document.querySelector('img[alt="Molina Express"]')?.closest('section');
    const stats = document.querySelector('section[aria-label="Platform proof points"]');
    if (!trust || !stats) return 'missing';
    return trust.nextElementSibling === stats ? 'adjacent' : 'not-adjacent';
  });
  expect(order).toBe('adjacent');
});
