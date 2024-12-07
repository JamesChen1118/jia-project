import express from 'express';
import orderController from '../../controllers/orderController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getUserOrders);
router.get('/history', authMiddleware, orderController.getUserHistory);

export default router;

