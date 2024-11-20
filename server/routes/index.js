import express from "express";
import productController from "../controllers/productController.js";
import newsController from "../controllers/newsController.js";

const router = express.Router()

router.get('/products', productController.getProducts)
router.get('/categories', productController.getCategories)
router.get('/news', newsController.getAllNews)

export default router;