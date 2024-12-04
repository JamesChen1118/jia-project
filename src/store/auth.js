import { create } from 'zustand';
import { getToken, setToken, removeToken } from '@/utils/auth';

export const useAuthStore = create((set) => ({
    isLoggedIn: !!getToken(),
    user: null,

    setLoggedIn: (status) => set({ isLoggedIn: status }),
    setUser: (userData) => set({ user: userData }),

    login: (token, userData) => {
        setToken(token);
        set({
            isLoggedIn: true,
            user: userData
        });
    },

    logout: () => {
        removeToken();
        set({
            isLoggedIn: false,
            user: null
        });
    }
}));