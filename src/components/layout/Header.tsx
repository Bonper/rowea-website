import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ROUTES } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { BrandMark } from '../common/BrandMark';
import { UtilityControls } from '../common/UtilityControls';

export function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const primaryNavLinks = [
    { to: ROUTES.features, label: t.nav.features },
    { to: ROUTES.download, label: t.nav.download },
    { to: ROUTES.installation, label: t.nav.installation },
    { to: ROUTES.pricing, label: t.nav.pricing },
    { to: ROUTES.about, label: t.nav.about },
  ];

  const mobileSecondaryLinks = [
    { to: ROUTES.support, label: t.nav.support },
    { to: ROUTES.privacy, label: t.nav.privacy },
    { to: ROUTES.terms, label: t.nav.terms },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#10243B]/10 bg-white/95 backdrop-blur-md dark:border-white/10 dark:bg-[#0B1726]/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <Link
          to={ROUTES.home}
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246B9E]"
          aria-label="ROWEA Home"
        >
          <BrandMark />
        </Link>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          {primaryNavLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#246B9E] ${
                  isActive
                    ? 'border-[#246B9E] text-[#10243B] dark:border-[#75C8D9] dark:text-white'
                    : 'border-transparent text-[#10243B]/75 hover:border-[#246B9E]/40 hover:text-[#10243B] dark:text-[#F3F6FA]/80 dark:hover:border-[#75C8D9]/50 dark:hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (Desktop) + Hamburger (Mobile) */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to={ROUTES.download}
            className="hidden md:inline-flex min-h-[40px] items-center justify-center rounded-lg bg-[#10243B] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#246B9E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] dark:bg-[#75C8D9] dark:text-[#10243B] dark:hover:bg-[#75C8D9]/90"
          >
            {t.common.getTheApp}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? t.common.menuClose : t.common.menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#10243B]/15 text-[#10243B] transition-colors hover:bg-[#F3F6FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] md:hidden dark:border-white/15 dark:text-white dark:hover:bg-[#152A42]"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-[#10243B]/10 bg-white px-4 pb-6 pt-4 md:hidden dark:border-white/10 dark:bg-[#0B1726]"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            <NavLink
              to={ROUTES.home}
              end
              className={({ isActive }) =>
                `flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium ${
                  isActive
                    ? 'bg-[#F3F6FA] text-[#10243B] dark:bg-[#152A42] dark:text-white'
                    : 'text-[#10243B]/80 hover:bg-[#F3F6FA] dark:text-[#F3F6FA]/85 dark:hover:bg-[#152A42]'
                }`
              }
            >
              {t.nav.home}
            </NavLink>
            {primaryNavLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium ${
                    isActive
                      ? 'bg-[#F3F6FA] text-[#10243B] dark:bg-[#152A42] dark:text-white'
                      : 'text-[#10243B]/80 hover:bg-[#F3F6FA] dark:text-[#F3F6FA]/85 dark:hover:bg-[#152A42]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {mobileSecondaryLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium ${
                    isActive
                      ? 'bg-[#F3F6FA] text-[#10243B] dark:bg-[#152A42] dark:text-white'
                      : 'text-[#10243B]/70 hover:bg-[#F3F6FA] dark:text-[#F3F6FA]/75 dark:hover:bg-[#152A42]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-4 border-t border-[#10243B]/10 pt-4 dark:border-white/10">
            <Link
              to={ROUTES.download}
              className="mb-4 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#10243B] px-4 py-2.5 text-sm font-semibold text-white dark:bg-[#75C8D9] dark:text-[#10243B]"
            >
              {t.common.getTheApp}
            </Link>
            <UtilityControls compact />
          </div>
        </div>
      )}
    </header>
  );
}
