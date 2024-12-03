import NewsItem from '../models/newsItem.js';
import asyncHandler from 'express-async-handler';

const newsController = {
    getAllNews: asyncHandler(async (req, res) => {
        try {
            console.log('Getting all news...');
            const newsItems = await NewsItem.find({}).sort({ date: -1 });
            console.log(`Found ${newsItems.length} news items`);
            res.json(newsItems);
        } catch (error) {
            console.error('Error in getAllNews:', error);
            res.status(500).json({ message: error.message });
        }
    })
};

export default newsController;