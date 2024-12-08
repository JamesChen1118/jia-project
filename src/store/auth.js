import { create } from 'zustand';
import { setToken, removeToken } from '@/utils/auth';

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  token: null,
  login: (token, user) => {
    setToken(token);
    set({ isLoggedIn: true, token, user });
  },
  logout: () => {
    removeToken();
    localStorage.removeItem('currentUser');
    set({ isLoggedIn: false, token: null, user: null });
  }
}));