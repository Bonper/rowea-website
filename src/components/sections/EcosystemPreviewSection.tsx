import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES, SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { ResilientImage } from '../common/ResilientImage';

export function EcosystemPreviewSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#10243B]/10 bg-[#F3F6FA] py-16 sm:py-20 dark:border-white/10 dark:bg-[#0E1E31]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#10243B] sm:text-3xl dark:text-white">
                {t.home.ecosystem.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {t.home.ecosystem.subtitle}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#10243B]/10 dark:border-white/10">
              <ResilientImage
                src={SITE_CONFIG.images.ecosystemEarth}
                alt={t.home.ecosystem.imageAlt}
                containerClassName="aspect-[16/10] w-full"
              />
            </div>

            <Link
              to={ROUTES.features}
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#246B9E] transition-colors hover:text-[#10243B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] dark:text-[#75C8D9] dark:hover:text-white"
            >
              <span>{t.home.ecosystem.ctaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="divide-y divide-[#10243B]/10 rounded-2xl border border-[#10243B]/10 bg-white lg:col-span-7 dark:divide-white/10 dark:border-white/10 dark:bg-[#152A42]">
            {t.features.modules.map((mod) => (
              <div key={mod.id} className="p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-[#10243B] sm:text-lg dark:text-white">
                    {mod.name}
                  </h3>
                  <span className="font-mono text-xs font-medium text-[#246B9E] dark:text-[#75C8D9]">
                    {mod.statusLabel}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                  {mod.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
