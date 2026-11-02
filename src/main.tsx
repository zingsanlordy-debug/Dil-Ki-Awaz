import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FontSizeProvider } from './context/FontSizeContext';
import { GlobalLanguageProvider } from './context/GlobalLanguageContext';

createRoot(document.getElementById('root')!).render(
  <GlobalLanguageProvider>
    <FontSizeProvider>
      <App />
    </FontSizeProvider>
  </GlobalLanguageProvider>
);
