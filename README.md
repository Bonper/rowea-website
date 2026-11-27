# ROWEA Website (`rowea-website`)

Official Phase 1 brand, product overview, and platform-routing website for **ROWEA** (*"Weather. Everywhere. — A smarter view of our world."*).

> **Scope Notice:** This repository contains the standalone ROWEA marketing and download website **only**—not the ROWEA Weather application, live weather APIs, payment processing, or published APK binaries. Unreleased modules and packages are explicitly labeled **Coming Soon** or **Planned**.

---

## Tech Stack

- **React 19** + **TypeScript** (`strict: true`)
- **Vite 8** (with build-time static prerendering across all 9 routes)
- **Tailwind CSS v4** (Light & Dark themes with `@custom-variant dark`)
- **React Router v7**
- **Lucide Icons**

---

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

### Verification & Production Build

```bash
npm run typecheck   # Strict TypeScript check (tsc --noEmit)
npm run lint        # Strict TypeScript & unused-symbol verification (tsc --noEmit)
npm run build       # Vite production build + static prerendering into dist/
npm run preview     # Preview built dist/ output locally on port 4173
```

---

## Project Structure

```text
public/
  _redirects              # Cloudflare Pages SPA fallback for unknown routes
  robots.txt              # Search crawler directives
  sitemap.xml             # Sitemap for all 9 routes
  manifest.webmanifest    # Website PWA metadata
  favicon/                # Brand SVG favicon & app icons
scripts/
  prerender.tsx           # Build-time static HTML generator for all 9 routes
src/
  app/                    # AppShell & React Router definitions
  assets/images/          # Generated visual assets
  components/
    common/               # Wordmark, ResilientImage, PageHead, UtilityControls
    layout/               # 3-zone Header, PageIntro, Global Footer
    sections/             # Home page sections
  config/
    site.ts               # Canonical domain, routes, and asset URLs
    releases.ts           # Typed release manifest (default: coming_soon)
  data/                   # Ordered platform lists
  device-detection/       # Pure multi-signal OS detector & TypeScript types
  download/               # DownloadPanel & platform icon helpers
  hooks/                  # Route SEO metadata hook
  i18n/                   # Complete English (default) & Vietnamese catalogs
  pages/                  # All 9 routed pages + 404 fallback
  theme/                  # Light/Dark ThemeProvider
docs/
  ARCHITECTURE.md
  DESIGN_SYSTEM.md
  DEPLOYMENT.md
  DEVICE_DETECTION.md
  ROADMAP.md
```

---

## Adding Content & Updating Releases

1. **Copy & Translations**: Update `src/i18n/types.ts`, `src/i18n/en.ts`, and `src/i18n/vi.ts` together so TypeScript verifies 100% parity between English and Vietnamese.
2. **Android APK Release**: Edit `src/config/releases.ts` when an official signed APK is published (`status: 'available'`, `version`, `fileSize`, `sha256`, `downloadUrl`). Never add placeholder links.
3. **Domain Configuration**:
   - Set `VITE_SITE_URL` in your build environment (or update `SITE_CONFIG.defaultUrl` in `src/config/site.ts`), and update `public/sitemap.xml` and `public/robots.txt` to match your custom domain.

---

## Deploying to GitHub & Cloudflare Pages

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for exact GitHub repository setup, GitHub Actions CI verification, and Cloudflare Pages settings (`Build command: npm run build`, `Build output directory: dist`).

---

## Testing Device Detection

Visit `/download` and verify:
1. Initial automatic best-effort detection notice (never auto-downloads or auto-redirects).
2. Expand **Observed browser signals** to inspect which signals were evaluated.
3. Click **Change device** or any card in **Select your platform manually** to test all 6 platform guides (`Android`, `iOS / iPadOS`, `Windows`, `macOS`, `Linux`, `Huawei`).
4. In browser DevTools Device Emulation, test:
   - Android mobile User-Agent → recommends Android APK (`Coming Soon`) + sideload overview.
   - iPhone / iPad (including `MacIntel` + touch points) → recommends Safari PWA.
   - Windows / macOS / Linux → recommends Desktop PWA.
   - Huawei / HarmonyOS NEXT hints → recommends PWA first and warns against assuming Android APK compatibility on HarmonyOS NEXT.
   - Unrecognized/ambiguous UA → falls back to `Unknown / Ambiguous Device` + manual selection.
