import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES, SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { BrandMark } from '../common/BrandMark';
import { ResilientImage } from '../common/ResilientImage';
import { UtilityControls } from '../common/UtilityControls';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-[#10243B]/10 bg-white dark:border-white/10 dark:bg-[#0B1726]">
      {/* Subtle controlled radial atmospheric wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#75C8D9]/15 via-[#246B9E]/5 to-transparent dark:from-[#246B9E]/20 dark:via-[#10243B]/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-8">
        {/* Compact page utility strip */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#10243B]/10 pb-4 dark:border-white/10">
          <p className="text-xs font-semibold tracking-wider text-[#246B9E] dark:text-[#75C8D9]">
            {t.home.hero.kicker}
          </p>
          <UtilityControls compact />
        </div>

        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Narrative */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="mb-5">
              <BrandMark />
            </div>

            <h1 className="text-[clamp(2.25rem,4.2vw,3.75rem)] font-extrabold leading-[1.06] tracking-tight text-[#10243B] dark:text-white">
              {t.home.hero.headline}
            </h1>

            <p className="mt-3 font-[var(--font-display)] text-xl font-semibold text-[#246B9E] sm:text-2xl dark:text-[#75C8D9]">
              {t.home.hero.subheadline}
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#10243B]/80 dark:text-[#F3F6FA]/85">
              {t.home.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={ROUTES.download}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#10243B] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#246B9E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] dark:bg-[#75C8D9] dark:text-[#10243B] dark:hover:bg-[#75C8D9]/90"
              >
                <span>{t.home.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <a
                href="#intro"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#10243B]/20 bg-transparent px-5 py-3 text-sm font-semibold text-[#10243B] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#F3F6FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] dark:border-white/20 dark:text-white dark:hover:bg-[#152A42]"
              >
                {t.home.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right Atmospheric Visual */}
          <div className="flex flex-col lg:col-span-6">
            <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#10243B]/10 bg-[#F3F6FA] dark:border-white/10 dark:bg-[#152A42]">
              <ResilientImage
                src={SITE_CONFIG.images.heroAtmosphere}
                alt={t.home.hero.imageAlt}
                eager
                containerClassName="aspect-[16/10] w-full lg:flex-1"
                className="h-full w-full object-cover"
              />
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-[#10243B]/10 px-4 py-3 text-xs text-[#10243B]/70 dark:border-white/10 dark:text-[#F3F6FA]/75">
                <span className="font-medium text-[#10243B] dark:text-white">ROWEA Weather</span>
                <span aria-hidden="true">·</span>
                <span>{t.home.hero.kicker}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{t.common.planned}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
