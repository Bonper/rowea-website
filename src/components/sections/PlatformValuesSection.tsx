import { useLanguage } from '../../i18n/LanguageContext';

export function PlatformValuesSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#10243B]/10 bg-white py-16 sm:py-20 dark:border-white/10 dark:bg-[#0B1726]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-[#10243B] sm:text-3xl dark:text-white">
            {t.home.values.heading}
          </h2>
          <p className="mt-3 text-base text-[#10243B]/75 dark:text-[#F3F6FA]/80">
            {t.home.values.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.home.values.items.map((item) => (
            <article
              key={item.index}
              className="rounded-xl border border-[#10243B]/10 bg-[#F3F6FA]/70 p-6 dark:border-white/10 dark:bg-[#152A42]/65"
            >
              <p className="font-mono text-sm font-medium text-[#246B9E] dark:text-[#75C8D9]">
                {item.index}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#10243B] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
