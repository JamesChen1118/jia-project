import server from "../server";
import { getToken } from "@/utils/auth";

export const orderApi = {
    addOrder: async (order) => {
        try {
            const token = getToken();
            if (!token) {
                throw new Error('請先登入');
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await server.post("/orders", order, config);
            return data;
        } catch (err) {
            throw err;
        }
    },

    getOrders: async () => {
        try {
            const token = getToken();
            if (!token) {
                throw new Error('請先登入');
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const { data } = await server.get("/orders", config);
            return data;
        } catch (err) {
            throw err;
        }
    }
};