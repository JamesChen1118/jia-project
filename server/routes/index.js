import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

// 產品路由
router.get('/products', productController.getProducts);
router.get('/categories', productController.getCategories);

export default router;