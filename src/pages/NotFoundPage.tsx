import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ROUTES } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { PageHead } from '../components/common/PageHead';

export function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHead route="notFound" />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-sm font-medium text-[#246B9E] dark:text-[#75C8D9]">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#10243B] sm:text-4xl dark:text-white">
            {t.notFound.heading}
          </h1>
          <p className="mt-4 text-base text-[#10243B]/75 dark:text-[#F3F6FA]/80">
            {t.notFound.description}
          </p>
          <div className="mt-8">
            <Link
              to={ROUTES.home}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#10243B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#246B9E] dark:bg-[#75C8D9] dark:text-[#10243B]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>{t.notFound.ctaLabel}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
