import express from "express";
import productController from "../controllers/productController";

const router = express.Router()

router.get('/products', productController.getProducts)
router.get('/categories', productController.getCategories)

export default router;