import type { TranslationCatalog } from './types';

export const en: TranslationCatalog = {
  meta: {
    siteName: 'ROWEA',
    routes: {
      '/': {
        title: 'ROWEA — Global Weather Platform | Weather. Everywhere.',
        description:
          'Weather. Everywhere. A smarter view of our world. Explore the ROWEA global weather platform and find the right release path for your device.',
      },
      '/features': {
        title: 'Features — ROWEA Global Weather Platform',
        description:
          'Explore the planned ROWEA ecosystem: ROWEA Weather, Radar, Alerts, Air, and Climate.',
      },
      '/download': {
        title: 'Download ROWEA — Platform Guidance & Release Readiness',
        description:
          'Check device-aware installation guidance for Android APK, iOS Safari PWA, Windows, macOS, Linux, and Huawei devices.',
      },
      '/installation': {
        title: 'Installation Guide — ROWEA Multi-Platform Setup',
        description:
          'Step-by-step installation instructions for ROWEA on Android, iPhone, iPad, Windows, macOS, Linux, and Huawei.',
      },
      '/pricing': {
        title: 'Pricing — ROWEA Free & Premium Overview',
        description:
          'Learn about the planned ROWEA Freemium model: essential weather tools for everyone and upcoming Premium capabilities.',
      },
      '/about': {
        title: 'About ROWEA — Vision & Global Weather Architecture',
        description:
          'Discover ROWEA’s mission to build a clear, reliable global weather platform across every screen.',
      },
      '/support': {
        title: 'Support & FAQ — ROWEA Global Weather Platform',
        description:
          'Frequently asked questions about ROWEA platform compatibility, installation paths, and Phase 1 release status.',
      },
      '/privacy': {
        title: 'Privacy Policy — ROWEA Website',
        description:
          'Understand how the ROWEA showcase website handles browser preferences and standard hosting infrastructure logs.',
      },
      '/terms': {
        title: 'Terms of Service — ROWEA Website',
        description:
          'Terms governing informational use of the ROWEA Phase 1 brand and software distribution website.',
      },
      notFound: {
        title: 'Page Not Found — ROWEA',
        description: 'The requested ROWEA page could not be found.',
      },
    },
  },
  common: {
    skipToContent: 'Skip to main content',
    demoLabel: 'Demo / Concept Preview',
    conceptPreviewNote: 'Illustrative interface concept only — not live meteorological telemetry.',
    comingSoon: 'Coming Soon',
    planned: 'Planned',
    exploreRowea: 'Explore ROWEA',
    getTheApp: 'Get the App',
    viewInstallGuide: 'Installation Guide',
    changeDevice: 'Change device',
    learnMore: 'Learn more',
    backHome: 'Back to Home',
    languageLabel: 'Language',
    themeLabel: 'Theme',
    lightMode: 'Light',
    darkMode: 'Dark',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu',
    allRightsReserved: 'ROWEA Global Weather Platform.',
  },
  nav: {
    home: 'Home',
    features: 'Features',
    download: 'Download',
    installation: 'Install',
    pricing: 'Pricing',
    about: 'About',
    support: 'Support',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
  },
  footer: {
    tagline: 'Weather. Everywhere. A smarter view of our world.',
    platformHeading: 'Platform',
    companyHeading: 'Resources',
    legalHeading: 'Legal',
    preferencesHeading: 'Preferences',
    phaseNotice:
      'Phase 1 brand and distribution portal. Ecosystem modules and native packages are currently in development and clearly labeled where not yet released.',
  },
  home: {
    hero: {
      kicker: 'Global Weather Platform',
      headline: 'Weather. Everywhere.',
      subheadline: 'A smarter view of our world.',
      description:
        'ROWEA is being engineered as a unified global weather platform combining clear forecasts, atmospheric mapping, air quality context, and multi-device delivery across mobile and desktop.',
      primaryCta: 'Get the App',
      secondaryCta: 'Explore ROWEA',
      imageAlt: 'High-altitude coastal ocean horizon with layered morning clouds representing global atmospheric scale',
    },
    intro: {
      heading: 'Designed for atmospheric clarity across every screen',
      lead: 'Weather information should feel calm, readable, and grounded—never buried beneath visual noise.',
      body: 'ROWEA brings together human-centered design and modern meteorological architecture so everyday commuters, travelers, and planners can follow changing conditions effortlessly across Android, iOS, desktop, and Huawei ecosystems.',
      principles: [
        {
          title: 'Platform-Neutral Delivery',
          description:
            'Thoughtful distribution across Android APK and standards-based Progressive Web Apps without forcing a single vendor ecosystem.',
        },
        {
          title: 'Honest Product Readiness',
          description:
            'Every module and release package is transparently labeled as Planned or Coming Soon until verified builds are published.',
        },
        {
          title: 'Calm Visual Hierarchy',
          description:
            'High-contrast typography and disciplined spacing designed for quick reading in bright daylight or dark environments.',
        },
      ],
    },
    values: {
      heading: 'Core platform principles',
      subtitle: 'Built around precision, accessibility, and multi-platform independence.',
      items: [
        {
          index: '01.',
          title: 'Cross-device continuity',
          description:
            'A consistent experience whether installed as an Android package or launched as a Progressive Web App on iOS, Windows, macOS, Linux, or Huawei.',
        },
        {
          index: '02.',
          title: 'Layered atmospheric context',
          description:
            'Structured to grow from core daily forecasts into radar, severe alerts, air quality metrics, and longer-term climate perspectives.',
        },
        {
          index: '03.',
          title: 'Transparent security & verification',
          description:
            'When Android APK releases become available, published builds will include explicit version identifiers, file sizes, and SHA-256 checksums.',
        },
        {
          index: '04.',
          title: 'Bilingual & accessible by default',
          description:
            'Engineered with English and Vietnamese parity, Light and Dark themes, keyboard navigation, and reduced-motion support.',
        },
      ],
    },
    ecosystem: {
      heading: 'The ROWEA ecosystem roadmap',
      subtitle:
        'Five cohesive modules designed to work together as the platform rolls out. All modules are currently Planned or Coming Soon.',
      imageAlt: 'Orbital perspective of Earth cloud systems and blue atmospheric horizon',
      ctaLabel: 'Explore all features',
    },
    experience: {
      heading: 'A quiet, deliberate app experience',
      subtitle:
        'Designed to surface temperature, wind, precipitation probability, and atmospheric context without clutter.',
      disclaimer:
        'Demo / Concept Preview: The hardware screen imagery below illustrates visual direction only and does not represent live weather data.',
      imageAlt: 'Smartphone and tablet resting on stone surface displaying a minimal ROWEA Weather concept interface',
      metricsNote: 'Demo visual only — no live weather API is connected on this website.',
      highlights: [
        'Glanceable daily and hourly structure without ad clutter',
        'Adaptive Light and Dark surfaces tuned for outdoor legibility',
        'Clean multi-location switching planned for everyday travel',
      ],
    },
    freemium: {
      heading: 'Essential weather for everyone. Deeper intelligence coming soon.',
      subtitle:
        'ROWEA plans an accessible Freemium model—core forecasts stay free, while deeper analytical layers arrive later in Premium.',
      freeTitle: 'Free',
      freeDesc: 'Everyday weather visibility with essential tools at no cost.',
      freePoints: [
        'Core daily and standard forecasts',
        'Saved location tracking',
        'Essential weather overview',
      ],
      premiumTitle: 'Premium',
      premiumStatus: 'Coming Soon',
      premiumDesc: 'Expanded atmospheric tooling planned for future releases. Pricing is not yet announced.',
      premiumPoints: [
        'Advanced radar layers & trend analysis',
        'Enhanced air quality & custom alerts',
        'Deeper personalization options',
      ],
      ctaLabel: 'Compare Free & Premium',
    },
    finalCta: {
      heading: 'Find the right ROWEA setup for your device',
      description:
        'Visit the Download hub for automatic best-effort platform detection, HarmonyOS guidance, and step-by-step installation instructions.',
      buttonLabel: 'Go to Download Hub',
      secondaryLabel: 'Read Installation Guide',
    },
  },
  features: {
    kicker: 'Platform Roadmap',
    heading: 'Five modules. One global view.',
    subtitle:
      'ROWEA is organized into focused modules that progressively expand how you observe local weather and broader atmospheric trends.',
    honestyNotice:
      'Development transparency: ROWEA Weather and its companion modules are currently in planning and pre-release development. No live weather service is active on this site.',
    modules: [
      {
        id: 'weather',
        name: 'ROWEA Weather',
        statusLabel: 'Coming Soon',
        summary:
          'The core companion for clear current conditions, structured hourly timelines, and multi-day outlook across saved locations.',
        highlights: [
          'Readable temperature, wind, and precipitation summaries',
          'Multi-city location management',
          'Light and Dark interface harmony',
        ],
      },
      {
        id: 'radar',
        name: 'ROWEA Radar',
        statusLabel: 'Planned',
        summary:
          'Visual precipitation and cloud-movement layers built to help users anticipate incoming weather shifts with clarity.',
        highlights: [
          'Smooth regional radar framing',
          'Storm path & precipitation timing context',
          'Low-clutter map controls',
        ],
      },
      {
        id: 'alerts',
        name: 'ROWEA Alerts',
        statusLabel: 'Planned',
        summary:
          'Focused severe-weather notifications prioritizing actionable timing over noisy, repetitive alerts.',
        highlights: [
          'Severity-tiered warning notifications',
          'Customizable alert thresholds (Premium planned)',
          'Clear safety context per region',
        ],
      },
      {
        id: 'air',
        name: 'ROWEA Air',
        statusLabel: 'Planned',
        summary:
          'Atmospheric air quality context including particulate indicators and outdoor comfort guidance.',
        highlights: [
          'Clear Air Quality Index breakdown',
          'Pollutant and visibility indicators',
          'Extended air quality trends (Premium planned)',
        ],
      },
      {
        id: 'climate',
        name: 'ROWEA Climate',
        statusLabel: 'Planned',
        summary:
          'Longer-horizon seasonal patterns and historical context to help readers understand anomalies beyond a single forecast week.',
        highlights: [
          'Seasonal pattern comparisons',
          'Regional temperature & rainfall baselines',
          'Educational climate context',
        ],
      },
    ],
    bottomCtaTitle: 'Check platform readiness for your device',
    bottomCtaDesc:
      'See how ROWEA prepares Android APK and cross-platform Progressive Web App installation.',
  },
  download: {
    kicker: 'Platform Distribution',
    heading: 'Get ROWEA for your device',
    subtitle:
      'We inspect browser signals locally in your browser to suggest the most suitable installation path—without automatic downloads or forced redirects.',
    detectedPrefix: 'Detected platform',
    manualOverrideLabel: 'Not right? Switch manually below or click Change device.',
    accuracyDisclaimer:
      'Browser-based device detection is best-effort and not 100% accurate (for example, when browsers mask User-Agent strings or share desktop identifiers). Always verify or select your platform manually.',
    confidenceLabel: 'Detection confidence',
    confidenceLevels: {
      high: 'High',
      medium: 'Medium',
      low: 'Low / Ambiguous',
    },
    platformNames: {
      android: 'Android',
      ios: 'iOS / iPadOS',
      windows: 'Windows',
      macos: 'macOS',
      linux: 'Linux',
      huawei: 'Huawei Device',
      unknown: 'Unknown / Ambiguous Device',
    },
    noAutoActionNotice:
      'No files download automatically and no automatic redirects occur without your action.',
    apkCard: {
      title: 'Android APK Package',
      statusPending: 'Coming Soon — Official APK Not Yet Published',
      statusReady: 'Verified Android APK Available',
      versionLabel: 'Version',
      sizeLabel: 'File Size',
      sha256Label: 'SHA-256 Checksum',
      notPublishedValue: 'Not published yet (Coming Soon)',
      buttonComingSoon: 'Android APK — Coming Soon',
      buttonDownload: 'Download Android APK',
      honestyNote:
        'Phase 1 integrity rule: No placeholder APK URLs, dummy build numbers, or unverified hashes are published here. Release metadata will appear once an official build is signed.',
    },
    pwaCard: {
      title: 'Progressive Web App (PWA)',
      statusLabel: 'Planned / Installable Architecture',
      description:
        'For iOS, desktop operating systems, and compatible Huawei browsers, ROWEA prioritizes standards-based PWA installation directly from your browser—no app store lock-in required.',
      openGuideCta: 'Open Step-by-Step Guide',
    },
    huaweiNotice: {
      title: 'Important Huawei & HarmonyOS Compatibility Note',
      emuiLegacy:
        'Weak browser hints suggest an Android-based EMUI or earlier HarmonyOS environment. PWA is recommended first; an Android APK may be compatible optionally without requiring Google Mobile Services (GMS), depending on your device build.',
      harmonyNext:
        'Weak browser hints suggest a possible OpenHarmony / HarmonyOS NEXT environment. Do NOT assume Android APK compatibility on HarmonyOS NEXT—use the PWA path instead.',
      undetermined:
        'Huawei devices span distinct architectures (Android-based EMUI, earlier HarmonyOS, and HarmonyOS NEXT). Because browser signals cannot guarantee APK compatibility and HMSCore is not treated as an OS signal, ROWEA recommends PWA first.',
    },
    signalsSummaryTitle: 'Observed browser signals (local diagnostic)',
    manualSelectorTitle: 'Select your platform manually',
    manualSelectorSubtitle:
      'Choose any supported operating system below to view tailored installation guidance.',
    platforms: {
      android: {
        id: 'android',
        name: 'Android',
        deliveryLabel: 'Recommended: Android APK (Coming Soon)',
        badgeText: 'Android APK Priority',
        headline: 'ROWEA for Android',
        summary:
          'Compatible Android phones and tablets will receive an official signed Android APK package with transparent SHA-256 verification.',
        compatibilityNote:
          'Android devices can install signed APK packages directly once published, or use compatible Chromium browsers for PWA access.',
        stepsTitle: 'Preparation & installation overview',
        steps: [
          'Wait for the official signed APK release metadata (version, size, and SHA-256) to appear on this page.',
          'Download the APK only from the official ROWEA Download page once published.',
          'Allow installation from your browser in Android Settings when prompted, then verify and install.',
        ],
      },
      ios: {
        id: 'ios',
        name: 'iOS / iPadOS',
        deliveryLabel: 'Recommended: Safari PWA',
        badgeText: 'Safari Add to Home Screen',
        headline: 'ROWEA for iPhone & iPad',
        summary:
          'Apple iOS and iPadOS devices do not install Android APK files. ROWEA is designed to run cleanly via Safari Progressive Web App installation.',
        compatibilityNote:
          'iPadOS 13+ often reports a desktop Mac platform string; ROWEA combines multi-touch and WebKit cues to keep iPad users on the iPadOS PWA guide.',
        stepsTitle: 'Safari PWA installation overview',
        steps: [
          'Open ROWEA in Safari on your iPhone or iPad.',
          'Tap the Share icon in the Safari toolbar.',
          'Select "Add to Home Screen" and confirm to place ROWEA alongside your apps.',
        ],
      },
      windows: {
        id: 'windows',
        name: 'Windows',
        deliveryLabel: 'Recommended: Desktop PWA (Edge / Chrome)',
        badgeText: 'Windows Desktop PWA',
        headline: 'ROWEA for Windows',
        summary:
          'Install ROWEA as a standalone desktop window on Windows 10 or Windows 11 using Microsoft Edge or Google Chrome.',
        compatibilityNote:
          'No heavy native installer is needed. Installing as a PWA creates a dedicated taskbar shortcut and clean app frame.',
        stepsTitle: 'Windows PWA overview',
        steps: [
          'Open ROWEA in Microsoft Edge or Google Chrome.',
          'Look for the Install App icon in the right side of the address bar (or open Browser Menu → Apps).',
          'Confirm installation to launch ROWEA in its own desktop window.',
        ],
      },
      macos: {
        id: 'macos',
        name: 'macOS',
        deliveryLabel: 'Recommended: Desktop PWA (Chrome / Edge / Safari)',
        badgeText: 'macOS Desktop PWA',
        headline: 'ROWEA for Mac',
        summary:
          'Run ROWEA cleanly on macOS as a Progressive Web App via Chrome, Edge, or Safari (macOS Sonoma+ Add to Dock).',
        compatibilityNote:
          'Desktop Mac systems are disambiguated from touch-enabled iPadOS devices using multi-signal pointer and touch-point checks.',
        stepsTitle: 'macOS PWA overview',
        steps: [
          'Open ROWEA in Safari (macOS Sonoma or newer) or a Chromium browser such as Chrome or Edge.',
          'In Safari, choose File → Add to Dock; in Chrome/Edge, click the Install icon in the address bar.',
          'Launch ROWEA directly from your Mac Dock or Applications folder.',
        ],
      },
      linux: {
        id: 'linux',
        name: 'Linux',
        deliveryLabel: 'Recommended: Desktop PWA',
        badgeText: 'Linux Browser PWA',
        headline: 'ROWEA for Linux',
        summary:
          'Use ROWEA directly in any modern Linux browser or install it as a standalone desktop PWA in Chromium-based browsers.',
        compatibilityNote:
          'Desktop Linux setups vary by distribution and browser engine; Chromium and Chrome provide native desktop shortcut creation.',
        stepsTitle: 'Linux PWA overview',
        steps: [
          'Open ROWEA in Google Chrome, Chromium, Brave, or Microsoft Edge on Linux.',
          'Open the address bar install prompt or browser menu → Cast, save, and share / Apps → Install ROWEA.',
          'Pin the generated desktop entry to your application launcher.',
        ],
      },
      huawei: {
        id: 'huawei',
        name: 'Huawei',
        deliveryLabel: 'Recommended: PWA First (OS-Dependent APK Note)',
        badgeText: 'Huawei PWA Priority',
        headline: 'ROWEA for Huawei Devices',
        summary:
          'Huawei devices span Android-based EMUI, earlier HarmonyOS builds, and HarmonyOS NEXT. ROWEA prioritizes PWA first and never assumes Google Mobile Services.',
        compatibilityNote:
          'Android APK compatibility must NOT be assumed on HarmonyOS NEXT. Only Android-based EMUI or legacy HarmonyOS builds may support optional APK sideloading once an official APK exists.',
        stepsTitle: 'Huawei PWA installation overview',
        steps: [
          'Open ROWEA in Huawei Browser or a compatible standards-compliant browser on your device.',
          'Open the browser menu and select "Add to Home Screen" / "Add shortcut" to install the PWA.',
          'If your device runs Android-based EMUI or earlier HarmonyOS (not HarmonyOS NEXT), check the Android APK section only after official builds release.',
        ],
      },
    },
  },
  installation: {
    kicker: 'Setup Guides',
    heading: 'Platform installation guide',
    subtitle:
      'Clear, device-specific steps for installing ROWEA via Android APK (when released) or standards-based Progressive Web App.',
    imageAlt: 'Minimalist workspace with laptop and smartphone prepared for multi-device installation',
    selectPlatformLabel: 'Choose platform guide',
    safetyNote:
      'Important: Never install unofficial APK files claiming to be ROWEA from third-party mirrors. Only use verified packages published on the official Download page once available.',
    openDownloadPage: 'Go to Download Hub',
  },
  pricing: {
    kicker: 'Freemium Model',
    heading: 'Free essentials. Premium depth later.',
    subtitle:
      'ROWEA is structured around an accessible Free foundation for daily weather clarity, paired with a planned Premium tier for deeper atmospheric tools.',
    notice:
      'Phase 1 notice: Payment processing is not implemented and official Premium pricing has not been announced. There are no checkout buttons or active subscriptions on this site.',
    freeTier: {
      name: 'Free',
      subtitle: 'Planned core tier',
      badge: 'Included',
      description:
        'Built for everyday weather awareness across all supported platforms without locking essential forecasts behind a paywall.',
      features: [
        'Basic current weather conditions',
        'Standard hourly and multi-day forecasts',
        'Saved location tracking',
        'Essential weather overview and clean Light/Dark UI',
      ],
      ctaLabel: 'View platform readiness',
    },
    premiumTier: {
      name: 'Premium',
      subtitle: 'Advanced meteorological tools',
      badge: 'Coming Soon',
      description:
        'Designed for weather enthusiasts, frequent travelers, and planners who want deeper radar, trend diagnostics, and personalized alerts.',
      features: [
        'Advanced radar layers & extended motion playback',
        'In-depth forecasts & atmospheric trend analysis',
        'Enhanced air quality breakdowns',
        'Advanced custom weather alerts',
        'Extended personalization across synced views',
      ],
      statusNote: 'Premium — Coming Soon. Pricing and launch schedule will be published in a future phase.',
    },
  },
  about: {
    kicker: 'Our Vision',
    heading: 'Building a clearer global view of weather.',
    subtitle:
      'ROWEA exists to make global atmospheric information understandable, calm, and dependable across every screen.',
    visionTitle: 'Why we are building ROWEA',
    visionBody: [
      'Weather shapes daily decisions—from simple commutes to travel planning and outdoor safety—yet many weather platforms bury essential context beneath cluttered interfaces, aggressive ads, and inconsistent cross-platform experiences.',
      'ROWEA approaches weather as an architectural information system: pairing clean, readable typography with structured atmospheric modules that scale gracefully from a pocket phone to a desktop monitor.',
      'In Phase 1, this website introduces the ROWEA brand, explains our five planned modules, and establishes honest, multi-signal device guidance before releasing production applications and binaries.',
    ],
    pillars: [
      {
        title: 'Design Clarity',
        description:
          'We prioritize legibility, balanced spacing, and restrained color contrast over sensational weather graphics.',
      },
      {
        title: 'Cross-Platform Respect',
        description:
          'Android, iOS/iPadOS, Windows, macOS, Linux, and Huawei users each receive tailored installation paths that respect their operating system.',
      },
      {
        title: 'Transparent Engineering',
        description:
          'We distinguish clearly between concept previews, planned modules, and released builds—never fabricating metrics or links.',
      },
    ],
    roadmapNoteTitle: 'Phase 1 Status',
    roadmapNoteBody:
      'This site is currently the standalone introduction and platform-routing portal (rowea-website). The ROWEA Weather application, backend weather pipelines, and APK binaries are planned for subsequent phases.',
  },
  support: {
    kicker: 'Help & Answers',
    heading: 'Support & frequently asked questions',
    subtitle:
      'Clear answers about platform compatibility, PWA vs. APK installation, device detection limits, and Phase 1 availability.',
    categories: {
      all: 'All Topics',
      platform: 'Platforms & Detection',
      installation: 'Installation',
      releases: 'Releases & Pricing',
      privacy: 'Privacy',
    },
    faqHeading: 'Frequently asked questions',
    faqs: [
      {
        id: 'when-apk',
        category: 'releases',
        question: 'Can I download the ROWEA Android APK right now?',
        answer:
          'Not yet. In Phase 1, this website introduces the ROWEA platform and prepares the release hub. Rather than publishing fake links or placeholder files, the Android APK slot is clearly marked Coming Soon until a verified, signed build is ready.',
      },
      {
        id: 'why-pwa-ios',
        category: 'installation',
        question: 'Why does ROWEA recommend PWA instead of an APK for iOS, iPadOS, and desktop?',
        answer:
          'Android APK files only run on Android-compatible environments. iPhone, iPad, Windows, macOS, and Linux devices work seamlessly with Progressive Web Apps (PWAs), which install directly from Safari, Edge, or Chrome without requiring third-party packages.',
      },
      {
        id: 'huawei-support',
        category: 'platform',
        question: 'How does ROWEA handle Huawei and HarmonyOS devices?',
        answer:
          'Huawei devices do not all run the same operating system. Devices running Android-based EMUI or earlier HarmonyOS builds may optionally support Android APKs without Google Mobile Services, whereas HarmonyOS NEXT must NOT be assumed to run Android APKs. For that reason, ROWEA prioritizes PWA first across Huawei hardware.',
      },
      {
        id: 'detection-accuracy',
        category: 'platform',
        question: 'Is automatic device detection 100% accurate?',
        answer:
          'No. Modern browsers limit or normalize User-Agent strings, and iPadOS often identifies similarly to Mac desktop browsers. ROWEA combines multiple browser signals on a best-effort basis and always lets you override the platform manually via "Change device".',
      },
      {
        id: 'demo-data',
        category: 'releases',
        question: 'Are the weather graphics on the Home page showing live weather?',
        answer:
          'No. Phase 1 does not connect to any live weather API. Any weather interface visuals shown on this website are explicitly labeled as Demo / Concept Previews.',
      },
      {
        id: 'premium-payments',
        category: 'releases',
        question: 'How much does ROWEA Premium cost and how do I subscribe?',
        answer:
          'Official pricing and payment systems are not launched in Phase 1. ROWEA Premium is currently listed as Coming Soon.',
      },
      {
        id: 'local-storage',
        category: 'privacy',
        question: 'What does this website store in my browser?',
        answer:
          'The ROWEA website stores only your selected interface language (English or Vietnamese) and theme preference (Light or Dark) in browser localStorage so your viewing preference persists across visits.',
      },
    ],
    guidanceTitle: 'Need platform-specific steps?',
    guidanceDescription:
      'Because Phase 1 has no backend ticket portal or support inbox yet, use the verified guides below to check device compatibility and installation steps.',
    guidanceSteps: [
      {
        title: 'Run Device Check',
        detail: 'View your browser’s detected platform signals or select another OS manually.',
        actionLabel: 'Open Download Hub',
        to: '/download',
      },
      {
        title: 'Follow Step-by-Step Setup',
        detail: 'Read exact browser and OS instructions for Android, iOS, Desktop, and Huawei.',
        actionLabel: 'Open Installation Guide',
        to: '/installation',
      },
      {
        title: 'Review Website Privacy',
        detail: 'Read how static hosting logs and localStorage preferences work in Phase 1.',
        actionLabel: 'Read Privacy Policy',
        to: '/privacy',
      },
    ],
  },
  privacy: {
    kicker: 'Legal & Transparency',
    heading: 'Privacy Policy',
    lastUpdated: 'Effective for Phase 1 Website Release',
    intro:
      'This Privacy Policy describes the actual technical behavior of the ROWEA Phase 1 showcase website. It applies solely to this informational site and does not cover future ROWEA Weather application releases, which will publish dedicated notices prior to launch.',
    sections: [
      {
        title: '1. Overview of Phase 1 Website Behavior',
        paragraphs: [
          'The ROWEA website is a static brand, product overview, and platform-routing portal. It does not include user accounts, login forms, weather location tracking, analytics trackers, or payment processors in Phase 1.',
          'Device detection runs locally inside your browser using standard browser-provided properties (such as User-Agent, platform hints, and touch capability checks) solely to highlight relevant installation instructions on screen. These signals are not transmitted to an application backend by ROWEA.',
        ],
      },
      {
        title: '2. Browser localStorage Usage',
        paragraphs: [
          'To remember your display preferences between page visits, the website stores two non-identifying values in your browser’s localStorage: your chosen language ("en" or "vi") and your chosen theme ("light" or "dark").',
          'You can clear or disable localStorage at any time through your browser settings; doing so simply resets language and theme choices to defaults.',
        ],
      },
      {
        title: '3. Hosting Infrastructure & Standard Server Logs',
        paragraphs: [
          'Although the ROWEA website itself does not operate an application database or collect personal profiles, static web hosting and content delivery infrastructure (such as Cloudflare Pages or similar CDN/web hosts) automatically process standard HTTP request metadata to deliver pages securely and reliably.',
          'Such standard infrastructure processing may include your IP address, requested URL path, timestamp, browser user-agent string, and referral headers in accordance with the hosting provider’s operational and security practices.',
        ],
      },
      {
        title: '4. Third-Party Links & Future Updates',
        paragraphs: [
          'This website makes no claims of third-party privacy certifications or formal legal compliance seals. When ROWEA Weather applications, weather data APIs, or official APK downloads are introduced in future phases, this Privacy Policy will be updated before those features become active.',
        ],
      },
    ],
  },
  terms: {
    kicker: 'Legal & Usage',
    heading: 'Terms of Service',
    lastUpdated: 'Effective for Phase 1 Website Release',
    intro:
      'By accessing the ROWEA Phase 1 website, you agree to the informational terms outlined below.',
    sections: [
      {
        title: '1. Informational Scope (Phase 1)',
        paragraphs: [
          'This website introduces the ROWEA brand, planned ecosystem modules (ROWEA Weather, Radar, Alerts, Air, and Climate), and multi-platform installation instructions.',
          'Features labeled "Coming Soon" or "Planned" represent current development direction and are not active services. Illustrative product previews labeled "Demo" do not represent live weather conditions or forecasts.',
        ],
      },
      {
        title: '2. Software Distribution & Checksums',
        paragraphs: [
          'No Android APK binaries or paid Premium subscriptions are distributed in Phase 1. When official releases become available in later phases, downloads should only be obtained from official ROWEA channels and verified against published SHA-256 checksums.',
        ],
      },
      {
        title: '3. Device Detection & Platform Guidance',
        paragraphs: [
          'Automated platform detection on the Download page is provided as a best-effort convenience and may occasionally misidentify devices due to browser privacy settings or user-agent masking. Visitors remain responsible for confirming their target operating system before installing software.',
        ],
      },
      {
        title: '4. Intellectual Property & Disclaimers',
        paragraphs: [
          'The ROWEA name, wordmark, slogan ("Weather. Everywhere."), and original visual assets on this site belong to the ROWEA project. The website is provided on an "as is" and "as available" basis without warranties of continuous availability or fitness for meteorological safety decisions.',
        ],
      },
    ],
  },
  notFound: {
    heading: 'Page not found',
    description: 'The link you followed may be outdated or the page does not exist on the ROWEA website.',
    ctaLabel: 'Return to ROWEA Home',
  },
};
