import server from "../server";
import { getToken } from "@/utils/auth";

export const orderApi = {
    addOrder: async (orderData) => {
        try {
            const { data } = await server.post("/api/orders", orderData);
            return data;
        } catch (error) {
            throw error.response?.data?.message || "建立訂單失敗";
        }
    },

    getOrders: async () => {
        try {
            const { data } = await server.get("/api/orders/user");
            return Array.isArray(data) ? data : [];
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error.response?.data?.message || "獲取訂單失敗";
        }
    }
};