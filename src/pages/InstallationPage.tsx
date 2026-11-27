import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, ShieldAlert } from 'lucide-react';
import { ROUTES, SITE_CONFIG } from '../config/site';
import { SELECTABLE_PLATFORMS } from '../data/platforms';
import { detectCurrentDevice } from '../device-detection/detector';
import type { SelectablePlatform } from '../device-detection/types';
import { useLanguage } from '../i18n/LanguageContext';
import { PageHead } from '../components/common/PageHead';
import { ResilientImage } from '../components/common/ResilientImage';
import { PageIntro } from '../components/layout/PageIntro';
import { PlatformIcon } from '../download/PlatformIcon';

function isSelectablePlatform(value: string | null): value is SelectablePlatform {
  return value !== null && (SELECTABLE_PLATFORMS as readonly string[]).includes(value);
}

export function InstallationPage() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPlatform = searchParams.get('platform');

  const [activePlatform, setActivePlatform] = useState<SelectablePlatform>(() =>
    isSelectablePlatform(queryPlatform) ? queryPlatform : 'android',
  );

  useEffect(() => {
    if (isSelectablePlatform(queryPlatform)) {
      setActivePlatform(queryPlatform);
      return;
    }
    const detected = detectCurrentDevice();
    if (detected.platform !== 'unknown') {
      setActivePlatform(detected.platform);
    }
  }, [queryPlatform]);

  const handleSelectPlatform = (platform: SelectablePlatform) => {
    setActivePlatform(platform);
    setSearchParams({ platform }, { replace: true });
  };

  const guide = t.download.platforms[activePlatform];

  return (
    <>
      <PageHead route="/installation" />
      <PageIntro
        kicker={t.installation.kicker}
        heading={t.installation.heading}
        subtitle={t.installation.subtitle}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          {/* Platform Tab Selector */}
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wider text-[#246B9E] dark:text-[#75C8D9]">
              {t.installation.selectPlatformLabel}
            </p>
            <div
              role="tablist"
              aria-label={t.installation.selectPlatformLabel}
              className="flex flex-wrap gap-2"
            >
              {SELECTABLE_PLATFORMS.map((platformKey) => {
                const item = t.download.platforms[platformKey];
                const isActive = activePlatform === platformKey;

                return (
                  <button
                    key={platformKey}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleSelectPlatform(platformKey)}
                    className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] ${
                      isActive
                        ? 'border-[#10243B] bg-[#10243B] text-white dark:border-[#75C8D9] dark:bg-[#75C8D9] dark:text-[#10243B]'
                        : 'border-[#10243B]/15 bg-white text-[#10243B] hover:bg-[#F3F6FA] dark:border-white/15 dark:bg-[#152A42] dark:text-[#F3F6FA] dark:hover:bg-[#0E1E31]'
                    }`}
                  >
                    <PlatformIcon platform={platformKey} className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            {/* Active Guide Details */}
            <div className="space-y-6 rounded-2xl border border-[#10243B]/10 bg-white p-6 sm:p-8 lg:col-span-7 dark:border-white/10 dark:bg-[#152A42]">
              <div className="space-y-2">
                <p className="font-mono text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                  {guide.deliveryLabel}
                </p>
                <h2 className="text-2xl font-bold text-[#10243B] dark:text-white">
                  {guide.headline}
                </h2>
                <p className="text-sm leading-relaxed text-[#10243B]/80 dark:text-[#F3F6FA]/85">
                  {guide.summary}
                </p>
              </div>

              <div className="space-y-4 border-t border-[#10243B]/10 pt-5 dark:border-white/10">
                <h3 className="text-sm font-semibold text-[#10243B] dark:text-white">
                  {guide.stepsTitle}
                </h3>
                <ol className="space-y-4">
                  {guide.steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-start gap-3.5 rounded-xl border border-[#10243B]/10 bg-[#F3F6FA]/70 p-4 text-sm leading-relaxed text-[#10243B]/85 dark:border-white/10 dark:bg-[#0E1E31] dark:text-[#F3F6FA]/90"
                    >
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#10243B] font-mono text-xs font-semibold text-white dark:bg-[#75C8D9] dark:text-[#10243B]">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-xl border border-[#246B9E]/25 bg-[#F3F6FA] p-4 text-xs leading-relaxed text-[#10243B]/80 dark:border-[#75C8D9]/25 dark:bg-[#0E1E31] dark:text-[#F3F6FA]/85">
                {guide.compatibilityNote}
              </div>
            </div>

            {/* Right Visual & Safety */}
            <div className="space-y-6 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-[#10243B]/10 bg-white dark:border-white/10 dark:bg-[#152A42]">
                <ResilientImage
                  src={SITE_CONFIG.images.installWorkspace}
                  alt={t.installation.imageAlt}
                  containerClassName="aspect-[4/3] w-full"
                />
              </div>

              <div className="rounded-2xl border border-[#10243B]/10 bg-white p-6 space-y-4 dark:border-white/10 dark:bg-[#152A42]">
                <div className="flex items-start gap-3">
                  <ShieldAlert
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#246B9E] dark:text-[#75C8D9]"
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-relaxed text-[#10243B]/80 sm:text-sm dark:text-[#F3F6FA]/85">
                    {t.installation.safetyNote}
                  </p>
                </div>

                <Link
                  to={ROUTES.download}
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#10243B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#246B9E] dark:bg-[#75C8D9] dark:text-[#10243B]"
                >
                  <span>{t.installation.openDownloadPage}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
