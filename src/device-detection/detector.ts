import type { ClientSignals, DetectionResult, HuaweiVariantHint } from './types';

interface NavigatorWithUAData extends Navigator {
  userAgentData?: {
    platform?: string;
    mobile?: boolean;
  };
}

/**
 * Collects non-identifying browser & capability signals safely in browser contexts.
 */
export function collectClientSignals(): ClientSignals {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return {
      userAgent: '',
      platform: '',
      userAgentDataPlatform: null,
      userAgentDataMobile: null,
      maxTouchPoints: 0,
      coarsePointer: false,
      standaloneMode: false,
      hasTouchEvent: false,
    };
  }

  const nav = navigator as NavigatorWithUAData;
  const coarsePointer =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(pointer: coarse)').matches
      : false;
  const standaloneMedia =
    typeof window.matchMedia === 'function'
      ? window.matchMedia('(display-mode: standalone)').matches
      : false;
  const safariStandalone =
    'standalone' in nav && Boolean((nav as { standalone?: boolean }).standalone);

  return {
    userAgent: nav.userAgent || '',
    platform: nav.platform || '',
    userAgentDataPlatform: nav.userAgentData?.platform ?? null,
    userAgentDataMobile:
      typeof nav.userAgentData?.mobile === 'boolean' ? nav.userAgentData.mobile : null,
    maxTouchPoints: typeof nav.maxTouchPoints === 'number' ? nav.maxTouchPoints : 0,
    coarsePointer,
    standaloneMode: standaloneMedia || safariStandalone,
    hasTouchEvent: 'ontouchstart' in window,
  };
}

/**
 * Pure multi-signal heuristic OS detector.
 *
 * Design principles:
 * 1. Never rely solely on navigator.platform for iPadOS / macOS classification.
 * 2. Handle iPadOS reporting "MacIntel" by combining maxTouchPoints, pointer, and Apple/Safari cues.
 * 3. Treat Huawei-related browser/vendor tokens strictly as weak hints; NEVER treat HMSCore as a decisive OS signal.
 * 4. Distinguish Android-based EMUI / earlier HarmonyOS from HarmonyOS NEXT (where APK compatibility must NOT be assumed).
 * 5. Return "unknown" with manual selection + PWA preference whenever confidence is insufficient.
 */
export function detectDeviceFromSignals(signals: ClientSignals): DetectionResult {
  const ua = signals.userAgent;
  const uaLower = ua.toLowerCase();
  const platformLower = signals.platform.toLowerCase();
  const uaDataPlatformLower = (signals.userAgentDataPlatform || '').toLowerCase();
  const reasons: string[] = [];

  if (!ua && !platformLower && !uaDataPlatformLower) {
    return {
      platform: 'unknown',
      recommendedMethod: 'manual',
      confidence: 'low',
      huaweiVariantHint: null,
      signalReasons: ['Insufficient browser platform signals available'],
    };
  }

  // 1. Weak Huawei / HarmonyOS browser & vendor hints (HMSCore explicitly excluded as decisive)
  const hasHuaweiBrowserToken = /huaweibrowser/i.test(ua);
  const hasHarmonyToken = /harmonyos/i.test(ua);
  const hasOpenHarmonyOrNextToken = /openharmony|arkweb|harmonyos\s*next/i.test(ua);
  const hasEmuiToken = /\bemui\b/i.test(ua);
  const hasHuaweiDeviceHint = /\b(huawei|honor)\b/i.test(ua);
  const hasAndroidToken = /android/i.test(uaLower) || uaDataPlatformLower === 'android';

  if (hasHuaweiBrowserToken || hasHarmonyToken || hasOpenHarmonyOrNextToken || hasEmuiToken || hasHuaweiDeviceHint) {
    if (hasHuaweiBrowserToken) reasons.push('Weak hint: HuaweiBrowser token');
    if (hasOpenHarmonyOrNextToken) reasons.push('Weak hint: OpenHarmony / ArkWeb / HarmonyOS NEXT indicator');
    if (hasHarmonyToken) reasons.push('Weak hint: HarmonyOS user-agent token');
    if (hasEmuiToken) reasons.push('Weak hint: EMUI user-agent token');
    if (hasHuaweiDeviceHint) reasons.push('Weak hint: Huawei/Honor vendor token');
    if (hasAndroidToken) reasons.push('Android compatibility token present');

    let variantHint: HuaweiVariantHint = 'undetermined';
    if (hasOpenHarmonyOrNextToken && !hasAndroidToken) {
      variantHint = 'harmonyos_next_possible';
    } else if ((hasEmuiToken || hasAndroidToken) && !hasOpenHarmonyOrNextToken) {
      variantHint = 'emui_or_legacy_harmony';
    }

    // Only classify as Huawei when we have at least a browser/OS hint or Android + vendor hint;
    // still recommend PWA first and treat detection as low/medium confidence.
    const hasStrongerHuaweiCue =
      hasHuaweiBrowserToken || hasOpenHarmonyOrNextToken || hasHarmonyToken || hasEmuiToken;

    if (hasStrongerHuaweiCue) {
      return {
        platform: 'huawei',
        recommendedMethod: variantHint === 'emui_or_legacy_harmony' ? 'pwa_with_optional_apk' : 'pwa',
        confidence: 'medium',
        huaweiVariantHint: variantHint,
        signalReasons: reasons,
      };
    }

    // Vendor string alone without OS/browser clarity is too weak to be certain
    return {
      platform: 'unknown',
      recommendedMethod: 'pwa',
      confidence: 'low',
      huaweiVariantHint: variantHint,
      signalReasons: [...reasons, 'Huawei vendor hint alone is insufficient for OS certainty; recommending PWA + manual selection'],
    };
  }

  // 2. Explicit iPhone / iPad / iPod User-Agent + multi-signal verification
  const isExplicitIOSUA = /iphone|ipod/.test(uaLower);
  const isExplicitIPadUA = /ipad/.test(uaLower);
  const isApplePlatform =
    platformLower === 'iphone' ||
    platformLower === 'ipad' ||
    platformLower === 'ipod' ||
    platformLower === 'macintel';
  const isSafariLike = /safari/.test(uaLower) && !/chrome|crios|edg|android|opr|firefox|fxios/.test(uaLower);
  const isAppleWebKitMobile = /applewebkit/.test(uaLower) && /mobile/.test(uaLower);

  if (isExplicitIPadUA) {
    reasons.push('iPad token in User-Agent');
    if (signals.maxTouchPoints > 0 || signals.coarsePointer) {
      reasons.push(`Touch hardware detected (${signals.maxTouchPoints} touch points)`);
    }
    return {
      platform: 'ios',
      recommendedMethod: 'pwa',
      confidence: 'high',
      huaweiVariantHint: null,
      signalReasons: reasons,
    };
  }

  if (isExplicitIOSUA) {
    reasons.push('iPhone/iPod token in User-Agent');
    if (isApplePlatform || signals.maxTouchPoints > 0 || isAppleWebKitMobile) {
      reasons.push('Consistent Apple touch/WebKit signals');
      return {
        platform: 'ios',
        recommendedMethod: 'pwa',
        confidence: 'high',
        huaweiVariantHint: null,
        signalReasons: reasons,
      };
    }
    reasons.push('Conflicting platform signals alongside iPhone User-Agent');
    return {
      platform: 'unknown',
      recommendedMethod: 'pwa',
      confidence: 'low',
      huaweiVariantHint: null,
      signalReasons: reasons,
    };
  }

  // 3. iPadOS 13+ masquerading as "MacIntel" vs desktop macOS
  // Never classify using navigator.platform alone.
  const hasMacUAToken = /macintosh|mac os x/.test(uaLower) || uaDataPlatformLower === 'macos';
  if (hasMacUAToken || platformLower === 'macintel') {
    const looksLikeIPadOS =
      platformLower === 'macintel' &&
      signals.maxTouchPoints > 1 &&
      (signals.coarsePointer || signals.hasTouchEvent || isSafariLike || /applewebkit/.test(uaLower)) &&
      !/windows|linux|android/.test(uaLower);

    if (looksLikeIPadOS) {
      reasons.push('MacIntel platform combined with multi-touch input (maxTouchPoints > 1)');
      if (signals.coarsePointer) reasons.push('Coarse primary pointer (touchscreen)');
      if (isSafariLike) reasons.push('Apple Safari WebKit engine signature');
      return {
        platform: 'ios',
        recommendedMethod: 'pwa',
        confidence: isSafariLike && signals.coarsePointer ? 'high' : 'medium',
        huaweiVariantHint: null,
        signalReasons: reasons,
      };
    }

    // Desktop macOS requires corroborating macOS UA/uaData signals AND absence of conflicting touch/OS signals
    const consistentMacDesktop =
      hasMacUAToken &&
      !/android|windows|linux/.test(uaLower) &&
      signals.maxTouchPoints <= 1;

    if (consistentMacDesktop) {
      reasons.push('macOS User-Agent / Client Hints corroborated with non-multi-touch input');
      if (platformLower === 'macintel' || uaDataPlatformLower === 'macos') {
        reasons.push('Consistent Apple desktop platform hint');
      }
      return {
        platform: 'macos',
        recommendedMethod: 'pwa',
        confidence: uaDataPlatformLower === 'macos' || platformLower === 'macintel' ? 'high' : 'medium',
        huaweiVariantHint: null,
        signalReasons: reasons,
      };
    }

    // Ambiguous Mac/touch hybrid or platform-only clue without UA corroboration
    reasons.push('Ambiguous Apple/Mac signals; refusing to classify by platform string alone');
    return {
      platform: 'unknown',
      recommendedMethod: 'manual',
      confidence: 'low',
      huaweiVariantHint: null,
      signalReasons: reasons,
    };
  }

  // 4. Android (standard non-Huawei)
  if (hasAndroidToken) {
    reasons.push('Android User-Agent or Client Hints token');
    if (platformLower.includes('linux') || platformLower.includes('arm') || signals.maxTouchPoints > 0) {
      reasons.push('Supporting mobile/Linux-kernel hardware signal');
    }
    return {
      platform: 'android',
      recommendedMethod: 'apk',
      confidence: signals.userAgentDataMobile === true || /linux|arm/.test(platformLower) || signals.maxTouchPoints > 0 ? 'high' : 'medium',
      huaweiVariantHint: null,
      signalReasons: reasons,
    };
  }

  // 5. Windows
  if (/windows nt|win32|win64/.test(uaLower) || uaDataPlatformLower === 'windows') {
    reasons.push('Windows User-Agent or Client Hints token');
    if (platformLower.includes('win') || uaDataPlatformLower === 'windows') {
      reasons.push('Corroborating Windows platform signal');
    }
    return {
      platform: 'windows',
      recommendedMethod: 'pwa',
      confidence: platformLower.includes('win') || uaDataPlatformLower === 'windows' ? 'high' : 'medium',
      huaweiVariantHint: null,
      signalReasons: reasons,
    };
  }

  // 6. Linux (desktop, excluding Android)
  if (
    (/linux|x11/.test(uaLower) || uaDataPlatformLower === 'linux') &&
    !/android/.test(uaLower)
  ) {
    reasons.push('Desktop Linux User-Agent or Client Hints token (non-Android)');
    if (platformLower.includes('linux') || uaDataPlatformLower === 'linux') {
      reasons.push('Corroborating Linux platform signal');
    }
    return {
      platform: 'linux',
      recommendedMethod: 'pwa',
      confidence: platformLower.includes('linux') || uaDataPlatformLower === 'linux' ? 'high' : 'medium',
      huaweiVariantHint: null,
      signalReasons: reasons,
    };
  }

  return {
    platform: 'unknown',
    recommendedMethod: 'manual',
    confidence: 'low',
    huaweiVariantHint: null,
    signalReasons: ['No confident OS signal matched; manual selection recommended'],
  };
}

export function detectCurrentDevice(): DetectionResult {
  return detectDeviceFromSignals(collectClientSignals());
}
