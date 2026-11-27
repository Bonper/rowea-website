import { useLanguage } from '../../i18n/LanguageContext';

export function HomeIntroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="intro"
      className="border-b border-[#10243B]/10 bg-[#F3F6FA] py-16 sm:py-20 dark:border-white/10 dark:bg-[#0E1E31]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold tracking-tight text-[#10243B] sm:text-3xl dark:text-white">
              {t.home.intro.heading}
            </h2>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <p className="text-lg font-medium leading-relaxed text-[#10243B] dark:text-[#F3F6FA]">
              {t.home.intro.lead}
            </p>
            <p className="text-base leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
              {t.home.intro.body}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-[#10243B]/10 pt-10 md:grid-cols-3 dark:border-white/10">
          {t.home.intro.principles.map((item) => (
            <div key={item.title} className="space-y-2">
              <h3 className="text-base font-semibold text-[#10243B] dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
