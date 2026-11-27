import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export function AppShell({ children }: { children: ReactNode }) {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-[#F3F6FA] text-[#10243B] dark:bg-[#0B1726] dark:text-[#F3F6FA]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#10243B] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:bg-[#75C8D9] dark:focus:text-[#10243B]"
      >
        {t.common.skipToContent}
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
