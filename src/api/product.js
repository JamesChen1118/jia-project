import server from "./server";

export const productApi = {
    getProducts: async () => {
        const { data } = await server.get("/products");
        return data;
    },
    searchProducts: async (category) => {
        try {
            const { data } = await server.get("/products");
            console.log("API response:", data);
            if (category === "all") {
                return data;
            }
            return data.filter(product => product.category === category);
        } catch (error) {
            console.error("API error:", error);
            return [];
        }
    },
    getCategories: async () => {
        const { data } = await server.get("/categories");
        return data;
    },
};