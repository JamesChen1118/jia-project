import NewsItem from "../models/newsItem.js";
import asyncHandler from "express-async-handler";


const newsController = {
    getAllNews: asyncHandler(async (req, res) => {
        const news = await NewsItem.find({}).sort({ date: -1 }); 
        return res.json(news);
    })
};

export default newsController; 