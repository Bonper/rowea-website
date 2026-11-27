import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const hasPrerenderedContent = rootElement.innerHTML.trim().length > 0;
  const tree = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  if (hasPrerenderedContent) {
    hydrateRoot(rootElement, tree);
  } else {
    createRoot(rootElement).render(tree);
  }
}
