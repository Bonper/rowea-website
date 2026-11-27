import fs from 'node:fs';
import path from 'node:path';
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { ALL_STATIC_ROUTES, SITE_CONFIG, type AppRoute } from '../src/config/site';
import { en } from '../src/i18n/en';
import { ThemeProvider } from '../src/theme/ThemeContext';
import { LanguageProvider } from '../src/i18n/LanguageContext';
import { AppShell } from '../src/app/AppShell';
import { AppRoutes } from '../src/app/Router';

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function injectRouteMeta(template: string, route: AppRoute, renderedAppHtml: string): string {
  const meta = en.meta.routes[route];
  const baseUrl = SITE_CONFIG.defaultUrl.replace(/\/+$/, '');
  const normalizedPath = route === '/' ? '/' : route;
  const canonicalUrl = `${baseUrl}${normalizedPath}`;

  let html = template;

  // Replace root mount point
  html = html.replace('<div id="root"></div>', `<div id="root">${renderedAppHtml}</div>`);

  // Replace <title>
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtmlText(meta.title)}</title>`,
  );

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtmlAttr(meta.description)}" />`,
  );

  // Replace Open Graph metadata
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtmlAttr(meta.title)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeHtmlAttr(meta.description)}" />`,
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${escapeHtmlAttr(canonicalUrl)}" />`,
  );

  // Replace Twitter Card metadata
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtmlAttr(meta.title)}" />`,
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeHtmlAttr(meta.description)}" />`,
  );

  // Replace Canonical URL
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />`,
  );

  return html;
}

function prerenderAllRoutes(): void {
  const distDir = path.resolve(process.cwd(), 'dist');
  const baseIndexPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(baseIndexPath)) {
    throw new Error(`Missing base build template at ${baseIndexPath}. Run "vite build" first.`);
  }

  const template = fs.readFileSync(baseIndexPath, 'utf-8');

  for (const route of ALL_STATIC_ROUTES) {
    const appHtml = renderToString(
      <StrictMode>
        <MemoryRouter initialEntries={[route]}>
          <ThemeProvider>
            <LanguageProvider initialLanguage="en">
              <AppShell>
                <AppRoutes />
              </AppShell>
            </LanguageProvider>
          </ThemeProvider>
        </MemoryRouter>
      </StrictMode>,
    );

    const outputHtml = injectRouteMeta(template, route, appHtml);
    const targetFile =
      route === '/'
        ? baseIndexPath
        : path.join(distDir, route.replace(/^\//, ''), 'index.html');

    fs.mkdirSync(path.dirname(targetFile), { recursive: true });
    fs.writeFileSync(targetFile, outputHtml, 'utf-8');
    console.log(`Prerendered ${route} -> ${path.relative(process.cwd(), targetFile)}`);
  }
}

prerenderAllRoutes();
