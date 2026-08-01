import { test, expect } from '@playwright/test';

test('hero lead carries the measured and operational proof anchors', async ({ page }) => {
  await page.goto('/');
  const lead = page.locator('main p.lead').first();
  await expect(lead).toContainText('From login to a published route in under a minute');
  await expect(lead).toContainText('£200k+ in driver pay');
  await expect(lead).toContainText('5,600+ shifts');
  await expect(lead).not.toContainText('designs and delivers scalable software');
});
