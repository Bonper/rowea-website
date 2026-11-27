export const SITE_CONFIG = {
  brandName: 'ROWEA',
  productName: 'ROWEA Weather',
  slogan: 'Weather. Everywhere.',
  supportingPhrase: 'A smarter view of our world.',
  defaultUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) || 'https://rowea.app',
  repositorySlug: 'rowea-website',
  images: {
    heroAtmosphere: '/src/assets/images/hero_atmosphere_1795765085624.jpg',
    appDemoShowcase: '/src/assets/images/app_demo_showcase_1795765086740.jpg',
    ecosystemEarth: '/src/assets/images/ecosystem_radar_earth_1795765087110.jpg',
    installWorkspace: '/src/assets/images/install_devices_desk_1795765087697.jpg',
  },
} as const;

export const ROUTES = {
  home: '/',
  features: '/features',
  download: '/download',
  installation: '/installation',
  pricing: '/pricing',
  about: '/about',
  support: '/support',
  privacy: '/privacy',
  terms: '/terms',
} as const;

export const ALL_STATIC_ROUTES = [
  ROUTES.home,
  ROUTES.features,
  ROUTES.download,
  ROUTES.installation,
  ROUTES.pricing,
  ROUTES.about,
  ROUTES.support,
  ROUTES.privacy,
  ROUTES.terms,
] as const;

export type AppRoute = (typeof ALL_STATIC_ROUTES)[number];
