# Diwan Group Currency Exchange Website

Official website for Diwan Group Currency Exchange (مجموعة الديوان للصرافة), a leading currency exchange provider in Misurata, Libya.

## 🌟 Features

- **Bilingual Support**: Full English and Arabic versions with automatic routing
- **RTL Layout**: Proper right-to-left text direction for Arabic pages
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Static Site**: Fast, secure static site generation with Astro
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Professional Design**: Modern gradient design with blue and green colors

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── i18n/           # Translation system
│   ├── layouts/        # Base layout components
│   ├── pages/          # Page components
│   │   ├── en/         # English pages
│   │   ├── ar/         # Arabic pages
│   │   └── index.astro # Root redirect
│   └── components/     # Reusable components
├── public/             # Static assets
├── dist/               # Build output (generated)
│   ├── en/            # English static site
│   └── ar/            # Arabic static site
└── astro.config.mjs   # Astro configuration
```

## 🌐 Available Pages

Each language version includes:

- **Home** (`/`) - Company introduction and services overview
- **About** (`/about`) - Mission, vision, and company information
- **Services** (`/services`) - Detailed service offerings and currencies
- **Contact** (`/contact`) - Contact information and location

## 💱 Supported Currencies

- Libyan Dinar (LYD)
- US Dollar (USD)
- Euro (EUR)
- British Pound (GBP)
- UAE Dirham (AED)
- Saudi Riyal (SAR)
- Egyptian Pound (EGP)
- Tunisian Dinar (TND)
- And many more...

## 📞 Contact Information

- **Email**: info@diwancash.ly
- **Phone**: +218 91 959 5353
- **Location**: Misurata, Libya
- **Website**: diwancash.ly

## 🛠️ Technology Stack

- **Framework**: Astro 5.16.6
- **Language**: TypeScript (Strict mode)
- **Build**: Static Site Generation (SSG)
- **Styling**: Scoped CSS with CSS Variables
- **i18n**: Custom translation system

## 📝 Development

### Adding New Pages

1. Create pages in both `src/pages/en/` and `src/pages/ar/`
2. Add translations to `src/i18n/index.ts`
3. Update navigation in `src/layouts/Layout.astro`

### Adding Translations

Edit `src/i18n/index.ts` and add new keys to both `en` and `ar` objects:

```typescript
export const ui = {
  en: {
    'your.key': 'English text',
  },
  ar: {
    'your.key': 'النص العربي',
  }
}
```

## 🏗️ Building for Production

```bash
npm run build
```

This generates a static site in the `dist/` directory with:
- `/en/` - English version
- `/ar/` - Arabic version
- Root redirects to `/en/`

## 📄 License

© 2025 Diwan Group Currency Exchange. All rights reserved.
