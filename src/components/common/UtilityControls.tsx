import { Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTheme } from '../../theme/ThemeContext';

export function UtilityControls({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${compact ? 'text-xs' : 'text-xs'}`}
      aria-label={`${t.common.languageLabel} & ${t.common.themeLabel}`}
    >
      {/* Language Switcher */}
      <div
        className="inline-flex items-center gap-1 rounded-lg border border-[#10243B]/15 bg-white/80 p-1 dark:border-white/15 dark:bg-[#152A42]/90"
        role="group"
        aria-label={t.common.languageLabel}
      >
        <Globe className="ml-1.5 h-3.5 w-3.5 text-[#246B9E] dark:text-[#75C8D9]" aria-hidden="true" />
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`min-h-[32px] px-2.5 py-1 rounded-md font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] ${
            language === 'en'
              ? 'bg-[#10243B] text-white dark:bg-[#75C8D9] dark:text-[#10243B]'
              : 'text-[#10243B]/75 hover:text-[#10243B] dark:text-[#F3F6FA]/75 dark:hover:text-white'
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage('vi')}
          aria-pressed={language === 'vi'}
          className={`min-h-[32px] px-2.5 py-1 rounded-md font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] ${
            language === 'vi'
              ? 'bg-[#10243B] text-white dark:bg-[#75C8D9] dark:text-[#10243B]'
              : 'text-[#10243B]/75 hover:text-[#10243B] dark:text-[#F3F6FA]/75 dark:hover:text-white'
          }`}
        >
          VI
        </button>
      </div>

      {/* Theme Switcher */}
      <div
        className="inline-flex items-center gap-1 rounded-lg border border-[#10243B]/15 bg-white/80 p-1 dark:border-white/15 dark:bg-[#152A42]/90"
        role="group"
        aria-label={t.common.themeLabel}
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          aria-pressed={theme === 'light'}
          className={`inline-flex items-center gap-1.5 min-h-[32px] px-2.5 py-1 rounded-md font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] ${
            theme === 'light'
              ? 'bg-[#10243B] text-white dark:bg-[#75C8D9] dark:text-[#10243B]'
              : 'text-[#10243B]/75 hover:text-[#10243B] dark:text-[#F3F6FA]/75 dark:hover:text-white'
          }`}
        >
          <Sun className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{t.common.lightMode}</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          aria-pressed={theme === 'dark'}
          className={`inline-flex items-center gap-1.5 min-h-[32px] px-2.5 py-1 rounded-md font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246B9E] ${
            theme === 'dark'
              ? 'bg-[#10243B] text-white dark:bg-[#75C8D9] dark:text-[#10243B]'
              : 'text-[#10243B]/75 hover:text-[#10243B] dark:text-[#F3F6FA]/75 dark:hover:text-white'
          }`}
        >
          <Moon className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{t.common.darkMode}</span>
        </button>
      </div>
    </div>
  );
}
