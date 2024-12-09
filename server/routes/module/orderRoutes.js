import express from 'express';
import orderController from '../../controllers/orderController.js';
import protect from '../../middlewares/authMiddleware.js';

const router = express.Router();

// 保護所有訂單路由
router.use(protect);

// 獲取用戶訂單
router.get('/user', orderController.getUserOrders);

// 創建訂單
router.post('/', orderController.createOrder);

export default router;

