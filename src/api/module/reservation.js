import server from "../server";
import { getToken } from "@/utils/auth";
import { userApi } from "./user";

export const reservationApi = {
    addReservation: async (reservationData) => {
        try {
            const token = getToken();
            const config = token ? {
                headers: { Authorization: `Bearer ${token}` }
            } : {};

            const currentUser = userApi.getCurrentUser();
            if (currentUser) {
                reservationData.userId = currentUser.id;
            }

            const { data } = await server.post("/api/reservations", reservationData, config);
            return data;
        } catch (error) {
            throw error.response?.data?.message || '訂位失敗';
        }
    },

    getUserReservations: async () => {
        try {
            const token = getToken();
            if (!token) {
                throw new Error('請先登入');
            }

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const { data } = await server.get("/api/reservations/user", config);
            return data;
        } catch (error) {
            throw error.response?.data?.message || '獲取訂位記錄失敗';
        }
    }
};