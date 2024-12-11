import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh_TW from "./lang/zh_TW.json";
import en_US from "./lang/en_US.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            zh_TW: {
                translation: zh_TW,
            },
            en_US: {
                translation: en_US,
            },
        },
        lng: "zh_TW",
        fallbackLng: "zh_TW",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;