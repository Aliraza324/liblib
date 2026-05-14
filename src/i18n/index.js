import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'ar']
export const languageDirections = {
  en: 'ltr',
  ar: 'rtl',
}

const normalizeLanguage = (language) => {
  const baseLanguage = language?.split('-')[0]

  return supportedLanguages.includes(baseLanguage) ? baseLanguage : defaultLanguage
}

export const getLanguageDirection = (language) => {
  return languageDirections[normalizeLanguage(language)] ?? languageDirections[defaultLanguage]
}

const applyDocumentLanguage = (language) => {
  const currentLanguage = normalizeLanguage(language)
  const direction = getLanguageDirection(currentLanguage)

  document.documentElement.lang = currentLanguage
  document.documentElement.dir = direction
  document.body.dataset.lang = currentLanguage
  document.body.dataset.dir = direction
}

const translationBackend = {
  type: 'backend',
  read(language, namespace, callback) {
    const currentLanguage = normalizeLanguage(language)

    import(`./locales/${currentLanguage}/${namespace}.json`)
      .then((module) => callback(null, module.default))
      .catch((error) => callback(error, null))
  },
}

i18n
  .use(translationBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    defaultNS: 'common',
    ns: ['common'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    react: {
      useSuspense: true,
    },
  })

i18n.on('initialized', () => {
  applyDocumentLanguage(i18n.resolvedLanguage || i18n.language)
})

i18n.on('languageChanged', (language) => {
  const currentLanguage = normalizeLanguage(language)

  applyDocumentLanguage(currentLanguage)
  window.localStorage.setItem('i18nextLng', currentLanguage)
})

export default i18n
