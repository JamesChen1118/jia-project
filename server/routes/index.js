import express from 'express';
import userRoutes from './module/userRoutes.js';
import productRoutes from './module/productRoutes.js';
import newsRoutes from './module/newsRoutes.js';
import orderRoutes from './module/orderRoutes.js';

const router = express.Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/news', newsRoutes);
router.use('/orders', orderRoutes);

export default router;