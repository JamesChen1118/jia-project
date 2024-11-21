import express from "express";
import productController from "../controllers/productController.js";
import newsController from "../controllers/newsController.js";
import orderController from "../controllers/orderController.js";
import userRoutes from "./module/userRoutes.js";

const router = express.Router()

router.get('/products', productController.getProducts)
router.get('/categories', productController.getCategories)
router.post('/order', orderController.addOrder);
router.get('/news', newsController.getAllNews)
router.use('/user', userRoutes)

export default router;