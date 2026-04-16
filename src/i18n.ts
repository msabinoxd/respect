import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptCommon from './locales/pt/common.json';
import enCommon from './locales/en/common.json';
import esCommon from './locales/es/common.json';
import ptV2 from './locales/pt/v2.json';
import enV2 from './locales/en/v2.json';
import esV2 from './locales/es/v2.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { common: ptCommon, v2: ptV2 },
      en: { common: enCommon, v2: enV2 },
      es: { common: esCommon, v2: esV2 },
    },
    defaultNS: 'common',
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'es'],
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'respect_lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
