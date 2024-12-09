import express from 'express';
import reservationController from '../../controllers/reservationController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();

// 以下路由需要驗證
router.use(authMiddleware);

// 創建訂位
router.post('/', reservationController.createReservation);

// 獲取用戶訂位記錄
router.get('/user', reservationController.getUserReservations);

export default router;