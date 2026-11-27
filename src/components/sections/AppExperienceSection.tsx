import { Info, Check } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { ResilientImage } from '../common/ResilientImage';

export function AppExperienceSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#10243B]/10 bg-white py-16 sm:py-20 dark:border-white/10 dark:bg-[#0B1726]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <figure className="overflow-hidden rounded-2xl border border-[#10243B]/10 bg-[#F3F6FA] dark:border-white/10 dark:bg-[#152A42]">
              <ResilientImage
                src={SITE_CONFIG.images.appDemoShowcase}
                alt={t.home.experience.imageAlt}
                containerClassName="aspect-[4/3] w-full"
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-[#10243B]/10 px-4 py-3 text-xs text-[#10243B]/75 dark:border-white/10 dark:text-[#F3F6FA]/80">
                <span className="font-semibold text-[#246B9E] dark:text-[#75C8D9]">
                  {t.common.demoLabel}
                </span>
                <span>{t.home.experience.metricsNote}</span>
              </figcaption>
            </figure>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#246B9E] dark:text-[#75C8D9]">
                {t.common.demoLabel}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#10243B] sm:text-3xl dark:text-white">
                {t.home.experience.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#10243B]/75 dark:text-[#F3F6FA]/80">
                {t.home.experience.subtitle}
              </p>
            </div>

            <div className="rounded-xl border border-[#246B9E]/25 bg-[#F3F6FA] p-4 text-xs leading-relaxed text-[#10243B]/80 dark:border-[#75C8D9]/25 dark:bg-[#152A42] dark:text-[#F3F6FA]/85">
              <div className="flex items-start gap-2.5">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
                <span>{t.home.experience.disclaimer}</span>
              </div>
            </div>

            <ul className="space-y-3">
              {t.home.experience.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#10243B]/85 dark:text-[#F3F6FA]/90"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
