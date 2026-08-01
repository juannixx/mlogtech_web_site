import { test, expect } from '@playwright/test';
import { SHOW_SIGNUP_CTA } from '../../src/data/site';

// Com signup escondido, nenhuma página de conteúdo promete trial.
if (!SHOW_SIGNUP_CTA) {
  for (const path of ['/faq/', '/pricing/']) {
    test(`no trial promises in main content of ${path}`, async ({ page }) => {
      await page.goto(path);
      const body = (await page.locator('main').textContent()) ?? '';
      expect(body).not.toMatch(/free trial/i);
      expect(body).not.toMatch(/no card required/i);
      expect(body).not.toMatch(/\btrial\b/i);
    });
  }

  test('pricing meta description makes no trial claim', async ({ page }) => {
    await page.goto('/pricing/');
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc).not.toMatch(/trial/i);
  });
}
