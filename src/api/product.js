import server from "./server";

export const productApi = {
    getProducts: async () => {
        const { data } = await server.get("/products");
        return data;
    },
    searchProducts: async (category) => {
        const { data } = await server.get(`/products`, {
            params: { category }
        });
        return data;
    },
    getCategories: async () => {
        const { data } = await server.get("/categories");
        return data;
    },
};