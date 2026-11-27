import { Link } from 'react-router-dom';
import { ArrowRight, Check, Info } from 'lucide-react';
import { ROUTES } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { PageHead } from '../components/common/PageHead';
import { PageIntro } from '../components/layout/PageIntro';

export function PricingPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHead route="/pricing" />
      <PageIntro
        kicker={t.pricing.kicker}
        heading={t.pricing.heading}
        subtitle={t.pricing.subtitle}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-[#246B9E]/25 bg-white p-4 text-sm text-[#10243B]/85 dark:border-[#75C8D9]/25 dark:bg-[#152A42] dark:text-[#F3F6FA]/90">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
              <p className="leading-relaxed">{t.pricing.notice}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Free Tier */}
            <article className="flex flex-col justify-between rounded-2xl border border-[#10243B]/10 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-[#152A42]">
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-bold text-[#10243B] dark:text-white">
                      {t.pricing.freeTier.name}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-[#10243B]/65 dark:text-[#F3F6FA]/70">
                      {t.pricing.freeTier.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#246B9E] dark:text-[#75C8D9]">
                    {t.pricing.freeTier.badge}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#10243B]/80 dark:text-[#F3F6FA]/85">
                  {t.pricing.freeTier.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-[#10243B]/10 pt-6 dark:border-white/10">
                  {t.pricing.freeTier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-[#10243B]/85 dark:text-[#F3F6FA]/90"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#246B9E] dark:text-[#75C8D9]"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-[#10243B]/10 pt-6 dark:border-white/10">
                <Link
                  to={ROUTES.download}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#10243B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#246B9E] dark:bg-[#75C8D9] dark:text-[#10243B]"
                >
                  <span>{t.pricing.freeTier.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>

            {/* Premium Tier */}
            <article className="flex flex-col justify-between rounded-2xl border border-[#246B9E]/25 bg-white p-6 sm:p-8 dark:border-[#75C8D9]/25 dark:bg-[#152A42]">
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-bold text-[#10243B] dark:text-white">
                      {t.pricing.premiumTier.name}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-[#10243B]/65 dark:text-[#F3F6FA]/70">
                      {t.pricing.premiumTier.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#246B9E] dark:text-[#75C8D9]">
                    {t.pricing.premiumTier.badge}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#10243B]/80 dark:text-[#F3F6FA]/85">
                  {t.pricing.premiumTier.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-[#10243B]/10 pt-6 dark:border-white/10">
                  {t.pricing.premiumTier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-[#10243B]/85 dark:text-[#F3F6FA]/90"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#246B9E] dark:text-[#75C8D9]"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-[#10243B]/10 pt-6 dark:border-white/10">
                <div
                  role="status"
                  className="rounded-lg border border-dashed border-[#10243B]/25 bg-[#F3F6FA] px-4 py-3 text-xs font-medium leading-relaxed text-[#10243B]/80 dark:border-white/25 dark:bg-[#0E1E31] dark:text-[#F3F6FA]/85"
                >
                  {t.pricing.premiumTier.statusNote}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
