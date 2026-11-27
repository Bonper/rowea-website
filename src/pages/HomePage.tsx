import { PageHead } from '../components/common/PageHead';
import { HeroSection } from '../components/sections/HeroSection';
import { HomeIntroSection } from '../components/sections/HomeIntroSection';
import { PlatformValuesSection } from '../components/sections/PlatformValuesSection';
import { EcosystemPreviewSection } from '../components/sections/EcosystemPreviewSection';
import { AppExperienceSection } from '../components/sections/AppExperienceSection';
import { FreemiumSummarySection } from '../components/sections/FreemiumSummarySection';
import { DownloadCtaSection } from '../components/sections/DownloadCtaSection';

export function HomePage() {
  return (
    <>
      <PageHead route="/" />
      <HeroSection />
      <HomeIntroSection />
      <PlatformValuesSection />
      <EcosystemPreviewSection />
      <AppExperienceSection />
      <FreemiumSummarySection />
      <DownloadCtaSection />
    </>
  );
}
