import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en_US from './lang/en_US.json';
import zh_TW from './lang/zh_TW.json';


const resources = {
    en_US: {
        translation: en_US,
    },
    zh_TW: {
        translation: zh_TW,
    },
};


const userState = localStorage.getItem('lang')

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en_US',
    lng: userState ? JSON.parse(userState).state.language : 'zh_TW',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;