import asyncHandler from 'express-async-handler';
import NewsItem from '../models/newsItem.js';

const newsController = {
    getAllNews: asyncHandler(async (req, res) => {
        const news = await NewsItem.find({}).sort('-date');
        res.json(news);
    }),

    getNewsById: asyncHandler(async (req, res) => {
        const newsItem = await NewsItem.findById(req.params.id);
        if (newsItem) {
            res.json(newsItem);
        } else {
            res.status(404);
            throw new Error('News item not found');
        }
    })
};

export default newsController;