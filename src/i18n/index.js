import { initReactI18next } from 'react-i18next';

import en_US from './locales/en_US.json';
import zh_TW from './locales/zh_TW.json';

import i18n from 'i18next';

const resources = {
    en_US: {
        translation: en_US,
    },
    zh_TW: {
        translation: zh_TW,
    },
};
i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en_US',
    lng: 'zh_TW',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;