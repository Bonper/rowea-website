# Deployment Guide — GitHub & Cloudflare Pages

> **Status Note:** This repository is *configured and verified locally* for GitHub Actions and Cloudflare Pages. Do not assume remote deployment has succeeded until you push to GitHub, connect Cloudflare Pages, and test the live URL.

---

## 1. Local Production Verification

```bash
npm ci
npm run typecheck
npm run lint
npm run build
npm run preview
```

Verify in `dist/`:
- Per-route static HTML exists for `/`, `/features`, `/download`, `/installation`, `/pricing`, `/about`, `/support`, `/privacy`, and `/terms`.
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `_redirects`, and `/src/assets/images/*` exist at the root of `dist/`.

---

## 2. GitHub Repository & CI Setup

1. Create a repository named `rowea-website` on GitHub.
2. Push your code to `main`:
   ```bash
   git init
   git add .
   git commit -m "Initialize ROWEA Phase 1 website"
   git branch -M main
   git remote add origin https://github.com/<your-org>/rowea-website.git
   git push -u origin main
   ```
3. GitHub Actions (`.github/workflows/ci.yml`) automatically runs on every push and pull request:
   - `npm ci`
   - `npm run typecheck`
   - `npm run lint`
   - `npm run build`

---

## 3. Cloudflare Pages Configuration

In the Cloudflare Dashboard (**Workers & Pages → Create → Pages → Connect to Git**):

- **Project name**: `rowea-website`
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Environment variables** (optional):
  - `NODE_VERSION`: `22`
  - `VITE_SITE_URL`: `https://your-custom-domain.com` (defaults to `https://rowea.app`)

### Routing & Static Assets Behavior

- All nine primary routes are prerendered into `dist/<route>/index.html`, so direct URL visits and page refreshes resolve directly as static HTML.
- `public/_redirects` (`/* /index.html 200`) handles unknown paths cleanly in the SPA (rendering the 404 view) while static files (`robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `/assets/*`, `/favicon/*`) are served directly with their native MIME types.
- After connecting a custom domain in Cloudflare Pages, verify direct URL access and browser refresh on all nine routes plus `/robots.txt` and `/sitemap.xml`.
