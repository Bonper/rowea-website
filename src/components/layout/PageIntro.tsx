import { UtilityControls } from '../common/UtilityControls';

interface PageIntroProps {
  kicker: string;
  heading: string;
  subtitle: string;
}

export function PageIntro({ kicker, heading, subtitle }: PageIntroProps) {
  return (
    <section className="border-b border-[#10243B]/10 bg-white/75 dark:border-white/10 dark:bg-[#10243B]/70">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-semibold tracking-wide text-[#246B9E] dark:text-[#75C8D9]">
            {kicker}
          </p>
          <UtilityControls />
        </div>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-[#10243B] sm:text-4xl lg:text-5xl dark:text-white">
          {heading}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#10243B]/75 sm:text-lg dark:text-[#F3F6FA]/85">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
