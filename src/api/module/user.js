import server from "../server";
import { getToken } from "@/utils/auth";

export const userApi = {
  login: async (username, password) => {
    try {
      const { data } = await server.post("/api/users/login", {
        username,
        password,
      });
      return data;
    } catch (error) {
      throw error.response?.data?.message || "登入失敗";
    }
  },

  register: async (userData) => {
    try {
      const { data } = await server.post("/api/users/register", userData);
      return data;
    } catch (error) {
      throw error.response?.data?.message || "註冊失敗";
    }
  },

  getUser: async () => {
    try {
      const token = getToken();
      if (!token) throw new Error('未登入');

      const { data } = await server.get("/api/users", {
        headers: { Authorization: `Bearer ${token}` }
      });
      return data;
    } catch (error) {
      throw error.response?.data?.message || "獲取用戶資料失敗";
    }
  },

  getCurrentUser: () => {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  }
};