import server from "../server";
import { getToken } from "@/utils/auth";

export const userApi = {
  login: async (username, password) => {
    const { data } = await server.post("/users/login", {
      username,
      password,
    });
    return data;
  },

  register: async (userData) => {
    try {
      const { data } = await server.post("/users/register", userData);
      return data;
    } catch (error) {
      throw error.response?.data?.message || '註冊失敗';
    }
  },

  getUser: async () => {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await server.get("/users", config);
    return data;
  },

  createOrder: async (orderData) => {
    const token = getToken();
    if (!token) {
      throw new Error('Please login first');
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const { data } = await server.post('/api/orders', orderData, config);
    return data;
  },

  getOrders: async () => {
    const token = getToken();
    if (!token) {
      throw new Error('Please login first');
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const { data } = await server.get('/api/orders', config);
    return data;
  }
};