import type { AppRoute } from '../config/site';
import type { OSPlatform, SelectablePlatform } from '../device-detection/types';

export type Language = 'en' | 'vi';

export interface RouteMeta {
  title: string;
  description: string;
}

export interface ModuleItem {
  id: 'weather' | 'radar' | 'alerts' | 'air' | 'climate';
  name: string;
  statusLabel: string;
  summary: string;
  highlights: string[];
}

export interface PlatformGuideContent {
  id: SelectablePlatform;
  name: string;
  deliveryLabel: string;
  badgeText: string;
  headline: string;
  summary: string;
  compatibilityNote: string;
  stepsTitle: string;
  steps: string[];
}

export interface FaqEntry {
  id: string;
  category: 'platform' | 'installation' | 'releases' | 'privacy';
  question: string;
  answer: string;
}

export interface TranslationCatalog {
  meta: {
    siteName: string;
    routes: Record<AppRoute, RouteMeta> & { notFound: RouteMeta };
  };
  common: {
    skipToContent: string;
    demoLabel: string;
    conceptPreviewNote: string;
    comingSoon: string;
    planned: string;
    exploreRowea: string;
    getTheApp: string;
    viewInstallGuide: string;
    changeDevice: string;
    learnMore: string;
    backHome: string;
    languageLabel: string;
    themeLabel: string;
    lightMode: string;
    darkMode: string;
    menuOpen: string;
    menuClose: string;
    allRightsReserved: string;
  };
  nav: {
    home: string;
    features: string;
    download: string;
    installation: string;
    pricing: string;
    about: string;
    support: string;
    privacy: string;
    terms: string;
  };
  footer: {
    tagline: string;
    platformHeading: string;
    companyHeading: string;
    legalHeading: string;
    preferencesHeading: string;
    phaseNotice: string;
  };
  home: {
    hero: {
      kicker: string;
      headline: string;
      subheadline: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      imageAlt: string;
    };
    intro: {
      heading: string;
      lead: string;
      body: string;
      principles: { title: string; description: string }[];
    };
    values: {
      heading: string;
      subtitle: string;
      items: { index: string; title: string; description: string }[];
    };
    ecosystem: {
      heading: string;
      subtitle: string;
      imageAlt: string;
      ctaLabel: string;
    };
    experience: {
      heading: string;
      subtitle: string;
      disclaimer: string;
      imageAlt: string;
      metricsNote: string;
      highlights: string[];
    };
    freemium: {
      heading: string;
      subtitle: string;
      freeTitle: string;
      freeDesc: string;
      freePoints: string[];
      premiumTitle: string;
      premiumStatus: string;
      premiumDesc: string;
      premiumPoints: string[];
      ctaLabel: string;
    };
    finalCta: {
      heading: string;
      description: string;
      buttonLabel: string;
      secondaryLabel: string;
    };
  };
  features: {
    kicker: string;
    heading: string;
    subtitle: string;
    honestyNotice: string;
    modules: ModuleItem[];
    bottomCtaTitle: string;
    bottomCtaDesc: string;
  };
  download: {
    kicker: string;
    heading: string;
    subtitle: string;
    detectedPrefix: string;
    manualOverrideLabel: string;
    accuracyDisclaimer: string;
    confidenceLabel: string;
    confidenceLevels: Record<'high' | 'medium' | 'low', string>;
    platformNames: Record<OSPlatform, string>;
    noAutoActionNotice: string;
    apkCard: {
      title: string;
      statusPending: string;
      statusReady: string;
      versionLabel: string;
      sizeLabel: string;
      sha256Label: string;
      notPublishedValue: string;
      buttonComingSoon: string;
      buttonDownload: string;
      honestyNote: string;
    };
    pwaCard: {
      title: string;
      statusLabel: string;
      description: string;
      openGuideCta: string;
    };
    huaweiNotice: {
      title: string;
      emuiLegacy: string;
      harmonyNext: string;
      undetermined: string;
    };
    signalsSummaryTitle: string;
    manualSelectorTitle: string;
    manualSelectorSubtitle: string;
    platforms: Record<SelectablePlatform, PlatformGuideContent>;
  };
  installation: {
    kicker: string;
    heading: string;
    subtitle: string;
    imageAlt: string;
    selectPlatformLabel: string;
    safetyNote: string;
    openDownloadPage: string;
  };
  pricing: {
    kicker: string;
    heading: string;
    subtitle: string;
    notice: string;
    freeTier: {
      name: string;
      subtitle: string;
      badge: string;
      description: string;
      features: string[];
      ctaLabel: string;
    };
    premiumTier: {
      name: string;
      subtitle: string;
      badge: string;
      description: string;
      features: string[];
      statusNote: string;
    };
  };
  about: {
    kicker: string;
    heading: string;
    subtitle: string;
    visionTitle: string;
    visionBody: string[];
    pillars: { title: string; description: string }[];
    roadmapNoteTitle: string;
    roadmapNoteBody: string;
  };
  support: {
    kicker: string;
    heading: string;
    subtitle: string;
    categories: {
      all: string;
      platform: string;
      installation: string;
      releases: string;
      privacy: string;
    };
    faqHeading: string;
    faqs: FaqEntry[];
    guidanceTitle: string;
    guidanceDescription: string;
    guidanceSteps: { title: string; detail: string; actionLabel: string; to: AppRoute }[];
  };
  privacy: {
    kicker: string;
    heading: string;
    lastUpdated: string;
    intro: string;
    sections: { title: string; paragraphs: string[] }[];
  };
  terms: {
    kicker: string;
    heading: string;
    lastUpdated: string;
    intro: string;
    sections: { title: string; paragraphs: string[] }[];
  };
  notFound: {
    heading: string;
    description: string;
    ctaLabel: string;
  };
}
