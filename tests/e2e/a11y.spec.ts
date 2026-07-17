import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES = ['/', '/pricing/', '/solutions/route-planning/', '/features/proof-of-delivery/', '/faq/', '/demo/'];

for (const path of PAGES) {
  test(`axe: no serious or critical violations on ${path}`, async ({ page }) => {
    await page.goto(path);
    // Freeze entrance animations so axe never samples a color mid-transition.
    await page.addStyleTag({
      content:
        '*, *::before, *::after { transition: none !important; animation: none !important; } .reveal { opacity: 1 !important; transform: none !important; }',
    });
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter((v) =>
      ['serious', 'critical'].includes(v.impact ?? '')
    );
    expect(
      blocking,
      blocking.map((v) => `${v.id}: ${v.help} (${v.nodes.length} nodes)`).join('\n')
    ).toEqual([]);
  });
}
