import express from 'express';
import productController from '../../controllers/productController.js';

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/category/:category', productController.getProductsByCategory);
router.get('/:id', productController.getProductById);

export default router;