import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';

export function DownloadCtaSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#10243B] py-16 text-white sm:py-20 dark:bg-[#0D1E32]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {t.home.finalCta.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#F3F6FA]/85">
              {t.home.finalCta.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={ROUTES.download}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#75C8D9] px-6 py-3 text-sm font-semibold text-[#10243B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75C8D9]"
            >
              <span>{t.home.finalCta.buttonLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              to={ROUTES.installation}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75C8D9]"
            >
              {t.home.finalCta.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
