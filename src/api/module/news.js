import server from "../server";

export const newsApi = {
    getNews: async () => {
        try {
            const { data } = await server.get("/news");
            console.log("Fetched news data:", data);
            return data;
        } catch (error) {
            console.error("Error in getNews:", error);
            return [];
        }
    }
}; 