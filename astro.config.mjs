import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
