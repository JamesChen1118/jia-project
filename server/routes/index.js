import express from 'express';
import userRoutes from './module/userRoutes.js';
import productRoutes from './module/productRoutes.js';
import newsRoutes from './module/newsRoutes.js';
import reservationRoutes from './module/reservationRoutes.js';
import orderRoutes from './module/orderRoutes.js';

const router = express.Router();

// API Routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/news', newsRoutes);
router.use('/reservations', reservationRoutes);
router.use('/orders', orderRoutes);

export default router;