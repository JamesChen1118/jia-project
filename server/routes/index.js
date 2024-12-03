import express from "express";
import productController from "../controllers/productController.js";
import newsController from "../controllers/newsController.js";
import newsRoutes from './module/newsRoutes.js';

const router = express.Router();

// 產品路由
router.get('/products', productController.getProducts);
router.get('/categories', productController.getCategories);

// 新聞路由
router.use('/news', newsRoutes); // 使用 newsRoutes

export default router;
