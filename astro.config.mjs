import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // `site` should be the public URL where the site will be hosted.
  // Examples:
  // - Root domain: 'https://example.com'
  // - Subpath deployment: 'https://example.com/subpath' (also set `base` below)
  site: 'https://diwancash.ly',
  // `base` is the subpath where the site will be served. Use '/' for root,
  // or '/subpath/' when hosting under a subfolder.
  base: '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwind()],
  },
  i18n: {
    defaultLocale: 'ar',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
