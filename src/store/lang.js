import { create } from 'zustand';

export const useUserStore = create((set) => ({
    language: localStorage.getItem("language") || "zh_TW",
    setLanguage: (lang) => {
        localStorage.setItem("language", lang);
        set({ language: lang });
    },
}));