// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production defaults to the real domain; the GitHub Pages preview overrides
// via env (see .github/workflows/deploy.yml).
// [PENDENTE: dominio UK definitivo]
const SITE = process.env.SITE_URL ?? 'https://mlogtech.com';
const BASE = process.env.BASE_PATH ?? '/';

/**
 * Source files use root-absolute URLs (href="/pricing/", url(/fonts/...)).
 * When the site is served under a subpath (GitHub Pages project site), this
 * hook prefixes those URLs in the built output. It is a no-op when BASE='/',
 * so the future root-domain deploy is untouched.
 */
function basePathRewrite() {
  return {
    name: 'base-path-rewrite',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const base = BASE.replace(/\/+$/, '');
        if (!base) return;
        // Astro/Vite already prefixes the asset URLs it generates itself;
        // skip anything that already carries the base.
        const skip = base.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const htmlRe = new RegExp(`(href|src)="/(?!/|${skip}/)`, 'g');
        const cssRe = new RegExp(`url\\((['"]?)/(?!/|${skip}/)`, 'g');
        const { readdir, readFile, writeFile } = await import('node:fs/promises');
        const { fileURLToPath } = await import('node:url');
        const { join } = await import('node:path');
        const root = fileURLToPath(dir);
        async function walk(d) {
          for (const entry of await readdir(d, { withFileTypes: true })) {
            const p = join(d, entry.name);
            if (entry.isDirectory()) {
              await walk(p);
            } else if (/\.(html|css)$/.test(entry.name)) {
              let text = await readFile(p, 'utf8');
              if (entry.name.endsWith('.html')) {
                text = text.replace(htmlRe, `$1="${base}/`);
              } else {
                text = text.replace(cssRe, `url($1${base}/`);
              }
              await writeFile(p, text);
            }
          }
        }
        await walk(root);
      },
    },
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [sitemap(), basePathRewrite()],
  vite: {
    plugins: [tailwindcss()],
  },
});
