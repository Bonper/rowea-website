import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { RELEASE_MANIFEST } from '../config/releases';
import { ROUTES } from '../config/site';
import { SELECTABLE_PLATFORMS } from '../data/platforms';
import { detectCurrentDevice } from '../device-detection/detector';
import type { DetectionResult, SelectablePlatform } from '../device-detection/types';
import { useLanguage } from '../i18n/LanguageContext';
import { PlatformIcon } from './PlatformIcon';

export function DownloadPanel() {
  const { t } = useLanguage();
  const [detection, setDetection] = useState<DetectionResult | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<SelectablePlatform | null>(null);
  const [showSignals, setShowSignals] = useState(false);
  const selectorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const result = detectCurrentDevice();
    setDetection(result);
    if (result.platform !== 'unknown') {
      setSelectedPlatform(result.platform);
    } else {
      setSelectedPlatform(null);
    }
  }, []);

  const handleChangeDeviceClick = () => {
    selectorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const firstButton = selectorRef.current?.querySelector('button');
    firstButton?.focus();
  };

  const activeGuide = selectedPlatform ? t.download.platforms[selectedPlatform] : null;
  const apk = RELEASE_MANIFEST.androidApk;

  const showHuaweiWarning =
    selectedPlatform === 'huawei' || (detection?.platform === 'huawei' && !selectedPlatform);
  const huaweiNoteText = (() => {
    const hint = detection?.huaweiVariantHint;
    if (hint === 'harmonyos_next_possible') return t.download.huaweiNotice.harmonyNext;
    if (hint === 'emui_or_legacy_harmony') return t.download.huaweiNotice.emuiLegacy;
    return t.download.huaweiNotice.undetermined;
  })();

  return (
    <div className="space-y-10">
      {/* Detection Summary Banner */}
      <div className="rounded-2xl border border-[#10243B]/15 bg-white p-6 sm:p-8 dark:border-white/15 dark:bg-[#152A42]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3F6FA] text-[#246B9E] dark:bg-[#0E1E31] dark:text-[#75C8D9]">
                <PlatformIcon platform={detection?.platform ?? 'unknown'} />
              </span>
              <div>
                <p className="text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                  {t.download.detectedPrefix}
                </p>
                <h2 className="text-xl font-bold text-[#10243B] dark:text-white">
                  {detection
                    ? t.download.platformNames[detection.platform]
                    : t.download.platformNames.unknown}
                </h2>
              </div>
            </div>

            {detection && (
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                <span>
                  {t.download.confidenceLabel}:{' '}
                  <strong className="font-semibold text-[#10243B] dark:text-white">
                    {t.download.confidenceLevels[detection.confidence]}
                  </strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>{t.download.noAutoActionNotice}</span>
              </div>
            )}

            <p className="max-w-3xl text-xs leading-relaxed text-[#10243B]/70 dark:text-[#F3F6FA]/75">
              {t.download.accuracyDisclaimer}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleChangeDeviceClick}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#10243B]/20 bg-[#F3F6FA] px-4 py-2.5 text-sm font-semibold text-[#10243B] whitespace-nowrap shrink-0 transition-colors hover:bg-[#10243B] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] dark:border-white/20 dark:bg-[#0E1E31] dark:text-white dark:hover:bg-[#75C8D9] dark:hover:text-[#10243B]"
            >
              {t.common.changeDevice}
            </button>
          </div>
        </div>

        {/* Expandable Local Signals Inspector */}
        {detection && (
          <div className="mt-5 border-t border-[#10243B]/10 pt-4 dark:border-white/10">
            <button
              type="button"
              onClick={() => setShowSignals((prev) => !prev)}
              aria-expanded={showSignals}
              className="inline-flex min-h-[36px] items-center gap-1.5 text-xs font-medium text-[#246B9E] hover:text-[#10243B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] dark:text-[#75C8D9] dark:hover:text-white"
            >
              <span>{t.download.signalsSummaryTitle}</span>
              {showSignals ? (
                <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>

            {showSignals && (
              <ul className="mt-3 space-y-1.5 font-mono text-xs text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {detection.signalReasons.map((reason) => (
                  <li key={reason}>• {reason}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Ambiguous / Unknown Fallback Callout */}
      {!activeGuide && (
        <div className="rounded-2xl border border-[#246B9E]/25 bg-white p-6 sm:p-8 dark:border-[#75C8D9]/25 dark:bg-[#152A42]">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#10243B] dark:text-white">
                {t.download.manualSelectorTitle}
              </h3>
              <p className="text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {t.download.pwaCard.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Active Platform Recommendation & Cards */}
      {activeGuide && (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Platform Guidance Card */}
          <div className="space-y-6 rounded-2xl border border-[#10243B]/10 bg-white p-6 sm:p-8 lg:col-span-7 dark:border-white/10 dark:bg-[#152A42]">
            <div className="space-y-2">
              <p className="font-mono text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                {activeGuide.deliveryLabel}
              </p>
              <h3 className="text-2xl font-bold text-[#10243B] dark:text-white">
                {activeGuide.headline}
              </h3>
              <p className="text-sm leading-relaxed text-[#10243B]/80 dark:text-[#F3F6FA]/85">
                {activeGuide.summary}
              </p>
            </div>

            {showHuaweiWarning && (
              <div className="rounded-xl border border-[#246B9E]/30 bg-[#F3F6FA] p-4 dark:border-[#75C8D9]/30 dark:bg-[#0E1E31]">
                <div className="flex items-start gap-2.5">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
                  <div className="space-y-1 text-xs leading-relaxed">
                    <p className="font-semibold text-[#10243B] dark:text-white">
                      {t.download.huaweiNotice.title}
                    </p>
                    <p className="text-[#10243B]/80 dark:text-[#F3F6FA]/85">{huaweiNoteText}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3 border-t border-[#10243B]/10 pt-5 dark:border-white/10">
              <h4 className="text-sm font-semibold text-[#10243B] dark:text-white">
                {activeGuide.stepsTitle}
              </h4>
              <ol className="space-y-3">
                {activeGuide.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#10243B]/80 dark:text-[#F3F6FA]/85"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#10243B]/10 font-mono text-xs font-semibold text-[#10243B] dark:bg-white/10 dark:text-[#75C8D9]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-[#10243B]/10 pt-5 dark:border-white/10">
              <p className="mb-4 text-xs leading-relaxed text-[#10243B]/70 dark:text-[#F3F6FA]/75">
                {activeGuide.compatibilityNote}
              </p>
              <Link
                to={`${ROUTES.installation}?platform=${activeGuide.id}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#10243B] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#246B9E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] dark:bg-[#75C8D9] dark:text-[#10243B] dark:hover:bg-[#75C8D9]/90"
              >
                <span>{t.download.pwaCard.openGuideCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right: Release Slot / PWA Architecture */}
          <div className="space-y-6 lg:col-span-5">
            {(activeGuide.id === 'android' || activeGuide.id === 'huawei') && (
              <div className="rounded-2xl border border-[#10243B]/10 bg-white p-6 dark:border-white/10 dark:bg-[#152A42]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#10243B] dark:text-white">
                      {t.download.apkCard.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                      {apk.status === 'available'
                        ? t.download.apkCard.statusReady
                        : t.download.apkCard.statusPending}
                    </p>
                  </div>
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
                </div>

                <dl className="mt-5 divide-y divide-[#10243B]/10 border-y border-[#10243B]/10 text-xs dark:divide-white/10 dark:border-white/10">
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-[#10243B]/70 dark:text-[#F3F6FA]/75">
                      {t.download.apkCard.versionLabel}
                    </dt>
                    <dd className="font-mono font-medium tabular-nums text-[#10243B] dark:text-white">
                      {apk.version ?? t.download.apkCard.notPublishedValue}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-2.5">
                    <dt className="text-[#10243B]/70 dark:text-[#F3F6FA]/75">
                      {t.download.apkCard.sizeLabel}
                    </dt>
                    <dd className="font-mono font-medium tabular-nums text-[#10243B] dark:text-white">
                      {apk.fileSize ?? t.download.apkCard.notPublishedValue}
                    </dd>
                  </div>
                  <div className="flex flex-col gap-1 py-2.5">
                    <dt className="text-[#10243B]/70 dark:text-[#F3F6FA]/75">
                      {t.download.apkCard.sha256Label}
                    </dt>
                    <dd className="break-all font-mono text-[11px] text-[#10243B] dark:text-white">
                      {apk.sha256 ?? t.download.apkCard.notPublishedValue}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 space-y-3">
                  {apk.status === 'available' && apk.downloadUrl ? (
                    <a
                      href={apk.downloadUrl}
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#10243B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#246B9E] dark:bg-[#75C8D9] dark:text-[#10243B]"
                    >
                      <Download className="h-4 w-4" aria-hidden="true" />
                      <span>{t.download.apkCard.buttonDownload}</span>
                    </a>
                  ) : (
                    <div
                      role="status"
                      className="flex min-h-[44px] w-full items-center justify-center rounded-lg border border-dashed border-[#10243B]/25 bg-[#F3F6FA] px-4 py-2.5 text-center text-sm font-semibold text-[#10243B]/70 dark:border-white/25 dark:bg-[#0E1E31] dark:text-[#F3F6FA]/75"
                    >
                      {t.download.apkCard.buttonComingSoon}
                    </div>
                  )}

                  <p className="text-xs leading-relaxed text-[#10243B]/70 dark:text-[#F3F6FA]/75">
                    {t.download.apkCard.honestyNote}
                  </p>
                </div>
              </div>
            )}

            {/* PWA Overview Card */}
            <div className="rounded-2xl border border-[#10243B]/10 bg-white p-6 dark:border-white/10 dark:bg-[#152A42]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-[#10243B] dark:text-white">
                    {t.download.pwaCard.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                    {t.download.pwaCard.statusLabel}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {t.download.pwaCard.description}
              </p>

              <div className="mt-5">
                <Link
                  to={`${ROUTES.installation}?platform=${activeGuide.id}`}
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#246B9E] hover:text-[#10243B] dark:text-[#75C8D9] dark:hover:text-white"
                >
                  <span>{t.common.viewInstallGuide}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manual 6-Platform Selector */}
      <div
        ref={selectorRef}
        className="rounded-2xl border border-[#10243B]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-[#152A42]"
      >
        <div className="max-w-2xl">
          <h3 className="text-lg font-bold text-[#10243B] dark:text-white">
            {t.download.manualSelectorTitle}
          </h3>
          <p className="mt-1 text-sm text-[#10243B]/75 dark:text-[#F3F6FA]/80">
            {t.download.manualSelectorSubtitle}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SELECTABLE_PLATFORMS.map((platformKey) => {
            const info = t.download.platforms[platformKey];
            const isSelected = selectedPlatform === platformKey;

            return (
              <button
                key={platformKey}
                type="button"
                onClick={() => setSelectedPlatform(platformKey)}
                aria-pressed={isSelected}
                className={`flex min-h-[72px] items-start gap-3 rounded-xl border p-4 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] ${
                  isSelected
                    ? 'border-[#246B9E] bg-[#F3F6FA] dark:border-[#75C8D9] dark:bg-[#0E1E31]'
                    : 'border-[#10243B]/10 bg-transparent hover:border-[#246B9E]/50 hover:bg-[#F3F6FA]/60 dark:border-white/10 dark:hover:border-[#75C8D9]/50 dark:hover:bg-[#0E1E31]/60'
                }`}
              >
                <span
                  className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isSelected
                      ? 'bg-[#10243B] text-white dark:bg-[#75C8D9] dark:text-[#10243B]'
                      : 'bg-[#F3F6FA] text-[#246B9E] dark:bg-[#0E1E31] dark:text-[#75C8D9]'
                  }`}
                >
                  <PlatformIcon platform={platformKey} className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[#10243B] dark:text-white">
                    {info.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-[#10243B]/70 dark:text-[#F3F6FA]/75">
                    {info.badgeText}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
