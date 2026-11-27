import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import { LanguageProvider } from './i18n/LanguageContext';
import { AppShell } from './app/AppShell';
import { AppRoutes } from './app/Router';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AppShell>
            <AppRoutes />
          </AppShell>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
