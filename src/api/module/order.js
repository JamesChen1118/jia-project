import server from "../server";

export const orderApi = {
    addOrder: async (order) => {
        try {
            await server.post("/order", order);
        } catch (err) {
            console.error(err);
        }
    },
    getOrders: async () => {
        try {
            const { data } = await server.get("/orders");
            return data;
        } catch (err) {
            console.error(err);
        }
    },
};
