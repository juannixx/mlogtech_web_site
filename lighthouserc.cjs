// Lighthouse CI (SPEC-04 §8). Performance in shared CI runners is noisy, so
// performance asserts as a warning; accessibility and SEO are hard errors.
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview -- --port 4173',
      startServerReadyPattern: 'astro',
      url: [
        'http://localhost:4173/',
        'http://localhost:4173/pricing/',
        'http://localhost:4173/solutions/route-planning/',
      ],
      numberOfRuns: 1,
      settings: {
        preset: 'desktop',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
