import { test, expect } from '@playwright/test';
import { MEASURED_LOGIN_TO_ROUTE_CLAIM } from '../../src/data/site';

test('hero lead carries the measured and operational proof anchors', async ({ page }) => {
  await page.goto('/');
  const lead = page.locator('main p.lead').first();
  await expect(lead).toContainText(MEASURED_LOGIN_TO_ROUTE_CLAIM);
  await expect(lead).toContainText('£200k+ in driver pay');
  await expect(lead).toContainText('5,600+ shifts');
  await expect(lead).not.toContainText('designs and delivers scalable software');
});
