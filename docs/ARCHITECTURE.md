# Architecture — ROWEA Website (Phase 1)

## Overview

`rowea-website` is a standalone, backend-free static web application built with React 19, TypeScript (strict mode), Vite 8, and Tailwind CSS v4. It introduces the ROWEA Global Weather Platform across nine routes and guides visitors to platform-appropriate installation methods.

## Architectural Layers

```text
Index Entry (index.html + src/main.tsx)
  └─ Providers (ThemeProvider, LanguageProvider, BrowserRouter / MemoryRouter)
       └─ AppShell (Skip Link, Header, <main>, Footer)
            └─ AppRoutes (9 Named Routes + 404 NotFound)
                 ├─ Brand Pages: Home, Features, Pricing, About
                 ├─ Routing Pages: Download, Installation Guide
                 └─ Trust & Help: Support, Privacy Policy, Terms of Service
```

## Key Design Decisions

1. **Zero Runtime Backend**: No server-side APIs, weather feeds, databases, or payment processors are included in Phase 1.
2. **Build-Time Static Prerendering (`scripts/prerender.tsx`)**:
   - After `vite build` creates the client bundle in `dist/`, `tsx scripts/prerender.tsx` renders all 9 routes via `react-dom/server` (`renderToString`) and `MemoryRouter`.
   - Each route receives its own static directory (`dist/features/index.html`, `dist/download/index.html`, etc.) with route-specific `<title>`, `<meta name="description">`, Open Graph, Twitter Card, and `<link rel="canonical">` tags.
   - **Prerender Scope Note**: Prerendering emits the default English (`en`) static snapshot at build time; when a user previously chose Vietnamese (`vi`) or Dark Mode in `localStorage`, the `<head>` inline bootstrap updates `<html lang>` and `.dark` immediately while React syncs localized text on mount.
3. **Resilient Asset Handling**: Images live in `src/assets/images/` and are copied into `dist/src/assets/` by the Vite build plugin, referenced via string URLs in `src/config/site.ts` so both browser bundles and Node prerendering resolve cleanly without crashing on binary imports.
4. **Honest Release Configuration (`src/config/releases.ts`)**: Centralizes APK release state (`coming_soon` by default) so UI components cannot render placeholder download URLs.
