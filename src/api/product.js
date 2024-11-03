import server from "./server";

export const productApi = {
    getProducts: async () => {
        const { data } = await server.get("/products");
        return data;
    },
    searchProducts: async (category) => {
        const { data } = await server.get("/products");
        if (category === "all") {
            return data;
        }
        return data.filter(product => product.category === category);
    },
    getCategories: async () => {
        const { data } = await server.get("/categories");
        return data;
    },
};