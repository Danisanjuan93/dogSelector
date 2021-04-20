import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import XHR from "i18next-http-backend"

import commonEn from './locales/en/translation.json'
import commonEs from './locales/es/translation.json'

const resources = {
    en: { common: commonEn },
    es: { common: commonEs }
}

const options = {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng'
}

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: options,
        resources,
        ns: ['common'],
        defaultNS: 'common',
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        interpolation: {
            escapeValue: false,
        },
        debug: false,
    })

export default i18n;