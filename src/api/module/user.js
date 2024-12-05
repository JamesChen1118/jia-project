import server from "../server";
import { getToken } from "@/utils/auth";

export const userApi = {
  login: async (username, password) => {
    try {
      const { data } = await server.post("/users/login", {
        username,
        password,
      });
      if (data.token) {
        localStorage.setItem('currentUser', JSON.stringify(data));
      }
      return data;
    } catch (error) {
      console.error('Login error:', error.response || error);
      throw error.response?.data?.message || "登入失敗";
    }
  },

  register: async (userData) => {
    try {
      console.log('Sending register data:', userData);
      const { data } = await server.post("/users/register", userData);
      return data;
    } catch (error) {
      console.error('Register error:', error.response || error);
      throw error.response?.data?.message || '註冊失敗';
    }
  },

  getUser: async () => {
    try {
      const token = getToken();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await server.get("/users", config);
      return data;
    } catch (error) {
      throw error.response?.data?.message || '獲取用戶資料失敗';
    }
  },

  getCurrentUser: () => {
    const token = getToken();
    if (!token) return null;

    try {
      const userStr = localStorage.getItem('currentUser');
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }
};