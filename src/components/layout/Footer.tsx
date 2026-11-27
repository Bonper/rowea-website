import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { BrandMark } from '../common/BrandMark';
import { UtilityControls } from '../common/UtilityControls';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#10243B]/10 bg-white text-[#10243B] dark:border-white/10 dark:bg-[#08111D] dark:text-[#F3F6FA]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-4 space-y-4">
            <Link to={ROUTES.home} className="inline-flex items-center">
              <BrandMark />
            </Link>
            <p className="text-sm font-medium text-[#10243B]/85 dark:text-[#F3F6FA]/90">
              {t.footer.tagline}
            </p>
            <p className="max-w-sm text-xs leading-relaxed text-[#10243B]/65 dark:text-[#F3F6FA]/70">
              {t.footer.phaseNotice}
            </p>
          </div>

          {/* Platform Links */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-xs font-semibold tracking-wider text-[#246B9E] dark:text-[#75C8D9]">
              {t.footer.platformHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to={ROUTES.home} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.features} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                  {t.nav.features}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.download} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                  {t.nav.download}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.installation} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                  {t.nav.installation}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-semibold tracking-wider text-[#246B9E] dark:text-[#75C8D9]">
              {t.footer.companyHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to={ROUTES.pricing} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.about} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to={ROUTES.support} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                  {t.nav.support}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Preferences */}
          <div className="md:col-span-3 space-y-4">
            <div className="space-y-3">
              <h2 className="text-xs font-semibold tracking-wider text-[#246B9E] dark:text-[#75C8D9]">
                {t.footer.legalHeading}
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to={ROUTES.privacy} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                    {t.nav.privacy}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTES.terms} className="hover:text-[#246B9E] dark:hover:text-[#75C8D9]">
                    {t.nav.terms}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-2 space-y-2">
              <p className="text-xs font-semibold text-[#246B9E] dark:text-[#75C8D9]">
                {t.footer.preferencesHeading}
              </p>
              <UtilityControls compact />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#10243B]/10 pt-6 text-xs text-[#10243B]/65 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-[#F3F6FA]/65">
          <p>© {new Date().getFullYear()} {t.common.allRightsReserved}</p>
          <p>Weather. Everywhere. · A smarter view of our world.</p>
        </div>
      </div>
    </footer>
  );
}
