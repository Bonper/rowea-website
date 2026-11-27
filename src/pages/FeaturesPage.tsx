import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bell,
  CloudSun,
  Compass,
  Info,
  Radar,
  Wind,
  Check,
} from 'lucide-react';
import { ROUTES } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { PageHead } from '../components/common/PageHead';
import { PageIntro } from '../components/layout/PageIntro';

const MODULE_ICONS = {
  weather: CloudSun,
  radar: Radar,
  alerts: Bell,
  air: Wind,
  climate: Compass,
} as const;

export function FeaturesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHead route="/features" />
      <PageIntro
        kicker={t.features.kicker}
        heading={t.features.heading}
        subtitle={t.features.subtitle}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-[#246B9E]/25 bg-white p-4 text-sm text-[#10243B]/85 dark:border-[#75C8D9]/25 dark:bg-[#152A42] dark:text-[#F3F6FA]/90">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
              <p className="leading-relaxed">{t.features.honestyNotice}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {t.features.modules.map((mod, index) => {
              const Icon = MODULE_ICONS[mod.id];
              const isPrimary = index === 0;

              return (
                <article
                  key={mod.id}
                  className={`rounded-2xl border border-[#10243B]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-[#152A42] ${
                    isPrimary ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3F6FA] text-[#246B9E] dark:bg-[#0E1E31] dark:text-[#75C8D9]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h2 className="text-xl font-bold text-[#10243B] dark:text-white">
                        {mod.name}
                      </h2>
                    </div>

                    <span className="font-mono text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                      {mod.statusLabel}
                    </span>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#10243B]/80 sm:text-base dark:text-[#F3F6FA]/85">
                    {mod.summary}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-2.5 border-t border-[#10243B]/10 pt-5 sm:grid-cols-3 dark:border-white/10">
                    {mod.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-start gap-2 text-xs leading-relaxed text-[#10243B]/75 sm:text-sm dark:text-[#F3F6FA]/80"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#246B9E] dark:text-[#75C8D9]"
                          aria-hidden="true"
                        />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#10243B]/10 bg-[#10243B] p-6 text-white sm:flex-row sm:items-center sm:p-8 dark:border-white/10 dark:bg-[#152A42]">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white">{t.features.bottomCtaTitle}</h2>
              <p className="text-sm text-[#F3F6FA]/80">{t.features.bottomCtaDesc}</p>
            </div>
            <Link
              to={ROUTES.download}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#75C8D9] px-5 py-2.5 text-sm font-semibold text-[#10243B] whitespace-nowrap shrink-0 transition-colors hover:bg-white"
            >
              <span>{t.common.getTheApp}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
