import server from "../server";

export const productApi = {

    getProductsByCategory: async (category = "") => {
        try {
            console.log('Requesting products for category:', category);
            const { data } = await server.get(`/api/products${category ? `?category=${category}` : ''}`);
            console.log('Received products:', data);
            return data;
        } catch (error) {
            console.error("Error searching products:", error);
            return [];
        }
    },
    getCategories: async () => {
        try {
            const { data } = await server.get("/api/categories");
            return data;
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            return [];
        }
    },
};
