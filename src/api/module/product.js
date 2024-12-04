import server from "../server";

export const productApi = {
    getProducts: async () => {
        try {
            const { data } = await server.get("/products");
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    },

    getProductsByCategory: async (category) => {
        try {
            const { data } = await server.get(
                category === 'all'
                    ? '/products'
                    : `/products/category/${category}`
            );
            return data;
        } catch (error) {
            console.error('Error fetching products by category:', error);
            return [];
        }
    }
};