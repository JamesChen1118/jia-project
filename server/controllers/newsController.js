import asyncHandler from 'express-async-handler';
import NewsItem from '../models/newsItem.js';

const newsController = {
    getAllNews: asyncHandler(async (req, res) => {
        try {
            const news = await NewsItem.find({}).sort('-date');
            res.json(news);
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching news',
                error: error.message
            });
        }
    }),

    getNewsById: asyncHandler(async (req, res) => {
        try {
            const newsItem = await NewsItem.findById(req.params.id);
            if (newsItem) {
                res.json(newsItem);
            } else {
                res.status(404).json({ message: 'News item not found' });
            }
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching news item',
                error: error.message
            });
        }
    })
};

export default newsController;