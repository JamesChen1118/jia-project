import server from "../server";

export const productApi = {
    getProducts: async () => {
        try {
            const { data } = await server.get("/api/products");
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    },

    getProductsByCategory: async (category) => {
        try {
            let url = '/api/products';
            if (category !== 'all') {
                url = `/api/products/category/${category}`;
            }
            const { data } = await server.get(url);
            return data;
        } catch (error) {
            console.error('Error fetching products by category:', error);
            return [];
        }
    }
};

