import express from 'express';
import orderController from '../../controllers/orderController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();

// 訂單路由
router.post('/', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getOrders);
router.get('/my', authMiddleware, orderController.getUserOrders);

export default router;