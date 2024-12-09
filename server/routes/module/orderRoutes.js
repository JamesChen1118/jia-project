import express from 'express';
import orderController from '../../controllers/orderController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();

// 所有訂單路由都需要驗證
router.use(authMiddleware);

// 創建訂單
router.post('/', orderController.createOrder);

// 獲取用戶的訂單
router.get('/user', orderController.getUserOrders);

export default router;

