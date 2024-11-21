import news from "../data/newsItem.js";

const newsController = {
    getAllNews: async (req, res) => {
        try {
            console.log('Fetching news...');
            res.json(news);
        } catch (error) {
            console.error('Error in getAllNews:', error);
            res.status(500).json({ message: error.message });
        }
    }
};

export default newsController; 