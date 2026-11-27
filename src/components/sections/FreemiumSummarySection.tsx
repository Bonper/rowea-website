import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ROUTES } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';

export function FreemiumSummarySection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#10243B]/10 bg-[#F3F6FA] py-16 sm:py-20 dark:border-white/10 dark:bg-[#0E1E31]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#10243B] sm:text-3xl dark:text-white">
              {t.home.freemium.heading}
            </h2>
            <p className="mt-3 text-base text-[#10243B]/75 dark:text-[#F3F6FA]/80">
              {t.home.freemium.subtitle}
            </p>
          </div>
          <Link
            to={ROUTES.pricing}
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#246B9E] whitespace-nowrap shrink-0 hover:text-[#10243B] dark:text-[#75C8D9] dark:hover:text-white"
          >
            <span>{t.home.freemium.ctaLabel}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Free Tier */}
          <div className="rounded-2xl border border-[#10243B]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-[#152A42]">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-[#10243B] dark:text-white">
                {t.home.freemium.freeTitle}
              </h3>
              <span className="font-mono text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                {t.pricing.freeTier.badge}
              </span>
            </div>
            <p className="mt-2 text-sm text-[#10243B]/75 dark:text-[#F3F6FA]/80">
              {t.home.freemium.freeDesc}
            </p>
            <ul className="mt-6 space-y-3 border-t border-[#10243B]/10 pt-5 dark:border-white/10">
              {t.home.freemium.freePoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-[#10243B]/85 dark:text-[#F3F6FA]/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Tier */}
          <div className="rounded-2xl border border-[#246B9E]/25 bg-white p-6 sm:p-8 dark:border-[#75C8D9]/25 dark:bg-[#152A42]">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold text-[#10243B] dark:text-white">
                {t.home.freemium.premiumTitle}
              </h3>
              <span className="font-mono text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                {t.home.freemium.premiumStatus}
              </span>
            </div>
            <p className="mt-2 text-sm text-[#10243B]/75 dark:text-[#F3F6FA]/80">
              {t.home.freemium.premiumDesc}
            </p>
            <ul className="mt-6 space-y-3 border-t border-[#10243B]/10 pt-5 dark:border-white/10">
              {t.home.freemium.premiumPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm text-[#10243B]/85 dark:text-[#F3F6FA]/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
