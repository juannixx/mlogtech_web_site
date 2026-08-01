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
        // srcset holds a comma-separated URL list ("/a.jpg 1280w, /b.jpg 2560w"),
        // so each entry needs the prefix, not just the attribute start.
        const srcsetAttrRe = /(srcset|imagesrcset)="([^"]*)"/g;
        const srcsetUrlRe = new RegExp(`(^|,\\s*)/(?!/|${skip}/)`, 'g');
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
                text = text.replace(
                  srcsetAttrRe,
                  (_m, attr, val) => `${attr}="${val.replace(srcsetUrlRe, `$1${base}/`)}"`
                );
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
