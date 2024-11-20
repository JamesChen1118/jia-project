import axios from "axios";
import server from "../server";

const API_URL = "http://localhost:1999/api";

export const newsApi = {
    getNews: async () => {
        try {
            const { data } = await server.get("/news");
            return data;
        } catch (error) {
            console.error('Error in getNews:', error);
            return [];
        }
    }
}; 