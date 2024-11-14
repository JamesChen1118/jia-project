import server from "../server";

export const productApi = {
    //   getProducts: async () => {
    //     try {
    //       const { data } = await server.get("/products");
    //       return data;
    //     } catch (error) {
    //       console.error("Failed to fetch products:", error);
    //       return [];
    //     }
    //   },
    getProductsByCategory: async (category = "") => {
        try {
            const { data } = await server.get(`/products?category=${category}`);
            return data;
        } catch (error) {
            console.error("Error searching products:", error);
            return [];
        }
    },
    getCategories: async () => {
        try {
            const { data } = await server.get("/categories");
            return data;
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            return [];
        }
    },
};
