import server from "./server";

export const newsApi = {
    getNews: async () => {
        const { data } = await server.get("/news");
        return data;
    }
}; 