import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // `site` should be the public URL where the site will be hosted.
  // Examples:
  // - Root domain: 'https://example.com'
  // - Subpath deployment: 'https://example.com/subpath' (also set `base` below)
  site: 'https://diwancash.ly',

  // `base` is the path prefix used for built assets and links.
  // - For normal HTTP hosting at root use: '/' (default)
  // - To support opening `dist/index.html` directly via file:// use: '' (empty string)
  // - For hosting under a subfolder use: '/subpath/'
  // Setting to empty string instructs Astro to emit relative URLs where possible.
  base: '',

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

  integrations: [sitemap()],
});