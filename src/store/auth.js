import { create } from 'zustand';
import { setToken, removeToken } from '@/utils/auth';

export const useAuthStore = create((set) => ({
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('currentUser') || 'null'),

  login: (token, userData) => {
    setToken(token);
    localStorage.setItem('currentUser', JSON.stringify(userData));
    set({
      isLoggedIn: true,
      user: userData
    });
  },

  logout: () => {
    removeToken();
    localStorage.removeItem('currentUser');
    set({
      isLoggedIn: false,
      user: null
    });
  }
}));