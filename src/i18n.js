import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en_translation.json';
import esTranslation from './locales/es_translation.json';

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    fallbackLng: 'es', // Default language if detection fails or a translation is missing
    debug: true, // Enable debug mode for development (shows warnings, etc.)

    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    react: {
        useSuspense: false // Set to true if you are using React.Suspense for loading translations
    }
  });

export default i18n;