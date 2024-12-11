import express from 'express';
import orderController from '../../controllers/orderController.js';
import protect from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/user', orderController.getUserOrders);

router.post('/', orderController.createOrder);

export default router;

