import { test, expect } from '@playwright/test';

test('per-driver plans show by default with annual prices', async ({ page }) => {
  await page.goto('/pricing/');
  await expect(page.locator('#plans-driver')).toBeVisible();
  await expect(page.locator('#plans-order')).toBeHidden();
  await expect(page.locator('#plans-driver .price-value').first()).toHaveText('£29');
});

test('cycle toggle switches to monthly prices and updates the URL', async ({ page }) => {
  await page.goto('/pricing/');
  await page.locator('#cycle-toggle button[data-cycle="monthly"]').click();
  await expect(page.locator('#plans-driver .price-value').first()).toHaveText('£35');
  await expect(page).toHaveURL(/cycle=monthly/);
});

test('model toggle switches to per-order plans', async ({ page }) => {
  await page.goto('/pricing/');
  await page.locator('#model-toggle button[data-model="order"]').click();
  await expect(page.locator('#plans-order')).toBeVisible();
  await expect(page.locator('#plans-driver')).toBeHidden();
  await expect(page).toHaveURL(/model=order/);
});

test('deep link ?model=order&cycle=monthly is honored on load', async ({ page }) => {
  await page.goto('/pricing/?model=order&cycle=monthly');
  await expect(page.locator('#plans-order')).toBeVisible();
  await expect(page.locator('#plans-driver')).toBeHidden();
});

test('plan CTAs point at signup or demo', async ({ page }) => {
  await page.goto('/pricing/');
  const hrefs = await page.locator('#plans-driver a.btn').evaluateAll((els) =>
    els.map((el) => el.getAttribute('href'))
  );
  for (const href of hrefs) {
    expect(href === 'https://app.mlogtech.com/signup' || href === '/demo/').toBeTruthy();
  }
});
