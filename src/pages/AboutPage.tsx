import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { PageHead } from '../components/common/PageHead';
import { PageIntro } from '../components/layout/PageIntro';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHead route="/about" />
      <PageIntro
        kicker={t.about.kicker}
        heading={t.about.heading}
        subtitle={t.about.subtitle}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold text-[#10243B] dark:text-white">
                {t.about.visionTitle}
              </h2>
            </div>

            <div className="space-y-4 lg:col-span-8">
              {t.about.visionBody.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-[#10243B]/80 dark:text-[#F3F6FA]/85"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-[#10243B]/10 pt-10 md:grid-cols-3 dark:border-white/10">
            {t.about.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-[#10243B]/10 bg-white p-6 dark:border-white/10 dark:bg-[#152A42]"
              >
                <h3 className="text-lg font-semibold text-[#10243B] dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#10243B]/10 bg-white p-6 sm:flex-row sm:items-center sm:p-8 dark:border-white/10 dark:bg-[#152A42]">
            <div className="max-w-2xl space-y-2">
              <h3 className="text-lg font-bold text-[#10243B] dark:text-white">
                {t.about.roadmapNoteTitle}
              </h3>
              <p className="text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {t.about.roadmapNoteBody}
              </p>
            </div>
            <Link
              to={ROUTES.features}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#10243B] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#246B9E] dark:bg-[#75C8D9] dark:text-[#10243B]"
            >
              <span>{t.common.exploreRowea}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
