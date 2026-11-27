export type OSPlatform =
  | 'android'
  | 'ios'
  | 'windows'
  | 'macos'
  | 'linux'
  | 'huawei'
  | 'unknown';

export type SelectablePlatform = Exclude<OSPlatform, 'unknown'>;

export type RecommendedMethod =
  | 'apk'
  | 'pwa'
  | 'pwa_with_optional_apk'
  | 'manual';

export type DetectionConfidence = 'high' | 'medium' | 'low';

export type HuaweiVariantHint =
  | 'emui_or_legacy_harmony'
  | 'harmonyos_next_possible'
  | 'undetermined';

export interface ClientSignals {
  userAgent: string;
  platform: string;
  userAgentDataPlatform: string | null;
  userAgentDataMobile: boolean | null;
  maxTouchPoints: number;
  coarsePointer: boolean;
  standaloneMode: boolean;
  hasTouchEvent: boolean;
}

export interface DetectionResult {
  platform: OSPlatform;
  recommendedMethod: RecommendedMethod;
  confidence: DetectionConfidence;
  huaweiVariantHint: HuaweiVariantHint | null;
  signalReasons: string[];
}
