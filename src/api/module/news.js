import server from '../server';

export const newsApi = {
    getNews: async () => {
        try {
            const response = await server.get('/api/news');
            return response.data;
        } catch (error) {
            return [];
        }
    }
};