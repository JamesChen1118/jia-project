import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isLoggedIn: false,
  user: null,
  token: null,
  login: (token, user) => set({ isLoggedIn: true, token, user }),
  logout: () => set({ isLoggedIn: false, token: null, user: null })
}));