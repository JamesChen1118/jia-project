import express from 'express';
import orderController from '../../controllers/orderController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getUserOrders);
router.get('/:id', authMiddleware, orderController.getOrderById);

export default router;