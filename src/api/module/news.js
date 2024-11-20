import server from "../server";

export const newsApi = {
    getNews: async () => {
        try {
            const { data } = await server.get("/news");
            console.log("API Response:", data);
            return data;
        } catch (error) {
            console.error('Error in getNews:', error);
            return [];
        }
    }
}; 