import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../config/site';
import { HomePage } from '../pages/HomePage';
import { FeaturesPage } from '../pages/FeaturesPage';
import { DownloadPage } from '../pages/DownloadPage';
import { InstallationPage } from '../pages/InstallationPage';
import { PricingPage } from '../pages/PricingPage';
import { AboutPage } from '../pages/AboutPage';
import { SupportPage } from '../pages/SupportPage';
import { PrivacyPage } from '../pages/PrivacyPage';
import { TermsPage } from '../pages/TermsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.features} element={<FeaturesPage />} />
      <Route path={ROUTES.download} element={<DownloadPage />} />
      <Route path={ROUTES.installation} element={<InstallationPage />} />
      <Route path={ROUTES.pricing} element={<PricingPage />} />
      <Route path={ROUTES.about} element={<AboutPage />} />
      <Route path={ROUTES.support} element={<SupportPage />} />
      <Route path={ROUTES.privacy} element={<PrivacyPage />} />
      <Route path={ROUTES.terms} element={<TermsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
