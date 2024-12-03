import server from '../server';

export const newsApi = {
    getNews: async () => {
        try {
            console.log('Fetching news...');
            const response = await server.get('/news');  // 使用正確的路徑
            console.log('News response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Axios error in getNews:', error);
            return [];
        }
    }
};