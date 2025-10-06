import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import ar from './locales/ar.json'

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
}

// Function to get language from URL parameter
const getLanguageFromURL = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get('lang')
    if (langParam && ['en', 'ar'].includes(langParam)) {
      return langParam
    }
  }
  return null
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    lng: getLanguageFromURL() || 'en', // Set language from URL parameter or default to 'en'

    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupQuerystring: 'lang',
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false, // Disable suspense to prevent hydration issues
    },
  })

export default i18n
