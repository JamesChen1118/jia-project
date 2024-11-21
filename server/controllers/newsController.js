import news from "../data/newsItem.js";

const newsController = {
    getAllNews: async (req, res) => {
        try {
            res.json(news);
        } catch (error) {
            console.error('Error in getAllNews:', error);
            res.status(500).json({
                message: 'Error fetching news',
                error: error.message
            });
        }
    }
};

export default newsController; 