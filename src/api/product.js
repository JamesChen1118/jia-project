import server from "@/api/server";

export const productApi = {
    getProducts: async () => {
        const { data } = await server.get("/api/products");
        return data;
    },
    searchProducts: async (category) => {
        const { data } = await server.get(`/api/products/${category}`);
        return data;
    },
    getCategories: async () => {
        const { data } = await server.get("/api/categories");
        return data;
    },
};
