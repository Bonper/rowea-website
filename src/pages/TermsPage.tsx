import { useLanguage } from '../i18n/LanguageContext';
import { PageHead } from '../components/common/PageHead';
import { PageIntro } from '../components/layout/PageIntro';

export function TermsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHead route="/terms" />
      <PageIntro
        kicker={t.terms.kicker}
        heading={t.terms.heading}
        subtitle={t.terms.lastUpdated}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-[#10243B]/85 dark:text-[#F3F6FA]/90">
            {t.terms.intro}
          </p>

          <div className="space-y-8 border-t border-[#10243B]/10 pt-8 dark:border-white/10">
            {t.terms.sections.map((section) => (
              <article key={section.title} className="space-y-3">
                <h2 className="text-xl font-bold text-[#10243B] dark:text-white">
                  {section.title}
                </h2>
                {section.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="text-sm leading-relaxed text-[#10243B]/80 sm:text-base dark:text-[#F3F6FA]/85"
                  >
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
