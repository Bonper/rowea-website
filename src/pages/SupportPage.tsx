import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import type { FaqEntry } from '../i18n/types';
import { PageHead } from '../components/common/PageHead';
import { PageIntro } from '../components/layout/PageIntro';

type FilterCategory = 'all' | FaqEntry['category'];

export function SupportPage() {
  const { t } = useLanguage();
  const [category, setCategory] = useState<FilterCategory>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(t.support.faqs[0]?.id ?? null);

  const filterKeys: FilterCategory[] = ['all', 'platform', 'installation', 'releases', 'privacy'];
  const filteredFaqs =
    category === 'all'
      ? t.support.faqs
      : t.support.faqs.filter((item) => item.category === category);

  return (
    <>
      <PageHead route="/support" />
      <PageIntro
        kicker={t.support.kicker}
        heading={t.support.heading}
        subtitle={t.support.subtitle}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
          {/* FAQ Filter + Accordion */}
          <div className="space-y-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <h2 className="text-2xl font-bold text-[#10243B] dark:text-white">
                {t.support.faqHeading}
              </h2>

              <div
                role="group"
                aria-label={t.support.faqHeading}
                className="flex flex-wrap gap-1.5 rounded-lg border border-[#10243B]/10 bg-white p-1 dark:border-white/10 dark:bg-[#152A42]"
              >
                {filterKeys.map((key) => {
                  const isActive = category === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCategory(key)}
                      aria-pressed={isActive}
                      className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] ${
                        isActive
                          ? 'bg-[#10243B] text-white dark:bg-[#75C8D9] dark:text-[#10243B]'
                          : 'text-[#10243B]/75 hover:text-[#10243B] dark:text-[#F3F6FA]/80 dark:hover:text-white'
                      }`}
                    >
                      {t.support.categories[key]}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="divide-y divide-[#10243B]/10 rounded-2xl border border-[#10243B]/10 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#152A42]">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold text-[#10243B] transition-colors hover:bg-[#F3F6FA]/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#246B9E] dark:text-white dark:hover:bg-[#0E1E31]/60"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-5 w-5 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm leading-relaxed text-[#10243B]/80 dark:text-[#F3F6FA]/85">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Honest Support Guidance */}
          <div className="space-y-6 border-t border-[#10243B]/10 pt-10 dark:border-white/10">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-2xl font-bold text-[#10243B] dark:text-white">
                {t.support.guidanceTitle}
              </h2>
              <p className="text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {t.support.guidanceDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {t.support.guidanceSteps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col justify-between rounded-2xl border border-[#10243B]/10 bg-white p-6 dark:border-white/10 dark:bg-[#152A42]"
                >
                  <div>
                    <h3 className="text-base font-bold text-[#10243B] dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                      {step.detail}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#10243B]/10 dark:border-white/10">
                    <Link
                      to={step.to}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#246B9E] hover:text-[#10243B] dark:text-[#75C8D9] dark:hover:text-white"
                    >
                      <span>{step.actionLabel}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
