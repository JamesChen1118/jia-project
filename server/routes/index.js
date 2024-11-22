import express from "express";
import newsController from "../controllers/newsController.js";

const router = express.Router();

// 新聞路由
router.get('/news', newsController.getAllNews);

export default router;