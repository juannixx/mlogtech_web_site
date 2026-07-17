import { defineConfig } from '@playwright/test';

// E2E runs against the built site (astro preview). Run `npm run build` first.
// Locally we use the installed Chrome (no browser download); CI downloads
// chromium via `playwright install`.
export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  fullyParallel: true,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4173',
    // Reveal animations respect prefers-reduced-motion; forcing it here keeps
    // axe contrast checks from sampling colors mid-transition.
    reducedMotion: 'reduce',
    ...(process.env.CI ? {} : { channel: 'chrome' as const }),
  },
  webServer: {
    command: 'npm run preview -- --port 4173',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
});
