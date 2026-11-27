import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

interface DocumentMetaOptions {
  title: string;
  description: string;
  pathname: string;
}

function upsertMetaTag(attribute: 'name' | 'property', key: string, content: string): void {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(url: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export function useDocumentMeta({ title, description, pathname }: DocumentMetaOptions): void {
  useEffect(() => {
    document.title = title;
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const base = SITE_CONFIG.defaultUrl.replace(/\/+$/, '');
    const canonicalUrl = `${base}${normalizedPath}`;

    upsertMetaTag('name', 'description', description);
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertCanonical(canonicalUrl);
  }, [title, description, pathname]);
}
