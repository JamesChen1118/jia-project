import server from '../server';

export const newsApi = {
    getNews: async () => {
        try {
            console.log('Fetching news...');
            const response = await server.get('/news');
            console.log('News response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching news:', error);
            return [];
        }
    }
};