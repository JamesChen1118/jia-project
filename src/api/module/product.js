import server from "../server";

export const productApi = {
    getProductsByCategory: async (category) => {
        try {
            console.log("Requesting products for category:", category);
            const url = category && category !== 'all' 
                ? `/products?category=${category}`
                : '/products';
            
            const { data } = await server.get(url);
            console.log("Received products:", data);
            return data;
        } catch (error) {
            console.error("Error searching products:", error);
            return [];
        }
    }
};
