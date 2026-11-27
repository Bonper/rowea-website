import type { AppRoute } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';

export function PageHead({ route }: { route: AppRoute | 'notFound' }) {
  const { t } = useLanguage();
  const meta =
    route === 'notFound' ? t.meta.routes.notFound : t.meta.routes[route];

  useDocumentMeta({
    title: meta.title,
    description: meta.description,
    pathname: route === 'notFound' ? '/404' : route,
  });

  return null;
}
