import { useLanguage } from '../i18n/LanguageContext';
import { PageHead } from '../components/common/PageHead';
import { PageIntro } from '../components/layout/PageIntro';
import { DownloadPanel } from '../download/DownloadPanel';

export function DownloadPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHead route="/download" />
      <PageIntro
        kicker={t.download.kicker}
        heading={t.download.heading}
        subtitle={t.download.subtitle}
      />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <DownloadPanel />
        </div>
      </section>
    </>
  );
}
