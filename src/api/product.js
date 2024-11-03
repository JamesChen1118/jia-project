import server from "./server";

export const productApi = {
    getProducts: async () => {
        try {
            const { data } = await server.get("/products");
            return data;
        } catch (error) {
            console.error("Failed to fetch products:", error);
            return [];
        }
    },
    searchProducts: async (category) => {
        try {
            const { data } = await server.get("/products");
            if (category === "all") {
                return data;
            }
            return data.filter(product => product.category === category);
        } catch (error) {
            return [];
        }
    },
    getProductById: async (id) => {
        try {
            const { data } = await server.get(`/products/${id}`);
            return data;
        } catch (error) {
            return null;
        }
    },
    getCategories: async () => {
        try {
            const { data } = await server.get("/categories");
            return data.map(category => ({
                name: category.name
            }));
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            return [
                { name: "all" },
                { name: "sashimi" },
                { name: "sushi" },
                { name: "seafood" },
                { name: "tempura" },
                { name: "yakitori" },
                { name: "teishoku" },
                { name: "dessert" },
                { name: "drink" }
            ];
        }
    }
};