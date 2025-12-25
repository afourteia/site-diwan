## Purpose

Provide concise, actionable guidance for AI coding agents working on the Diwan Group static site (Astro + Tailwind).

## Big picture

- This is a small bilingual (English/Arabic) static site built with Astro (v5). Pages live in `src/pages` and are organized under a route parameter folder `[lang]` (e.g. `src/pages/[lang]/index.astro`).
- The site is static — build with `astro build`; local dev with `astro dev`. See `package.json` scripts.
- Layout and navigation are centralized in `src/layouts/Layout.astro`. Language selection is URL-driven via `getLangFromUrl(Astro.url)` and translations are provided by the i18n helper under `src/i18n`.

## Key files & where to look

- Page templates: `src/pages/[lang]/*.astro` — add routes here for each language.
- Layout & nav: `src/layouts/Layout.astro` — update nav links and language switch here. The file uses `Astro.props`, `Astro.url`, and `useTranslations()` from `src/i18n`.
- Translations: `src/i18n/index.ts` — add translation keys and language map. Keep keys consistent (e.g. `nav.home`, `contact.title`).
- Global data: `src/data/contact.ts` — contact details and site metadata used in footer.
- Styles: `src/styles/global.css`, Tailwind config at `tailwind.config.cjs` and PostCSS config `postcss.config.cjs`.
- Static assets: `public/` (images, icons). Use `/images/diwan-icon.svg` as seen in the layout.

## Build / dev commands

- Local dev: `pnpm dev` or `npm run dev` (runs `astro dev`).
- Typecheck + build: `pnpm build` or `npm run build` (runs `astro check && astro build`).
- Preview production build: `pnpm preview` or `npm run preview` (runs `astro preview`).
- Use `pnpm` in this monorepo workspace when possible; scripts are defined in `package.json`.

## Conventions & patterns to preserve

- Bilingual routing: every page is duplicated under `[lang]` and uses the `lang` param from the route. When adding pages, add both language variants.
- Language switching: `Layout.astro` computes `currentPath` by stripping `/{lang}` and links to other language as `/${otherLang}${currentPath}` — preserve this pattern to keep correct links.
- Right-to-left support: `Layout.astro` sets `dir` to `rtl` when `lang === 'ar'`. If adding new components, ensure layout respects this by using logical CSS where possible.
- Centralized strings: avoid hardcoding UI text in pages; use `useTranslations(lang)` and translation keys.
- Small data modules: contact and other site data are simple TS exports under `src/data/` — update here for site-wide changes.

## Typical AI tasks & examples

- Add a new page: create `src/pages/[lang]/newpage.astro` and corresponding translations in `src/i18n`. Update nav in `src/layouts/Layout.astro` if needed.
- Update footer contact details: edit `src/data/contact.ts` and keep formatting (plain strings for `email`, `phone`, `site`).
- Modify nav: edit `src/layouts/Layout.astro` — navigation links are string templates using the `lang` variable (e.g. `href={`/${lang}/about`}`).

## Dependencies & integrations

- Framework: `astro` (v5). UI: `react` is present but not extensively used in current pages. Styling: `tailwindcss` + `postcss`.
- No CI/hosting config detected in repo root (additions should include build scripts and deploy config as needed).

## What not to change without confirmation

- Do not remove or rename the `[lang]` folder structure or the language URL pattern — that is the core i18n routing mechanism.
- Avoid changing the `dir` logic in `Layout.astro` unless you update all pages to handle RTL.

## Short examples (copyable)

- Dev server:

  pnpm dev

- Build:

  pnpm build

## If you need clarification

- Ask which language string to add when creating new content (we need both `en` + `ar`).
- Confirm whether to add a React component — the project is primarily Astro/TSX-free by default.

---

If any section is unclear or you want more details (CI, deploy, or testing), tell me which area to expand.
