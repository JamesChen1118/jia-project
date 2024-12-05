import express from 'express';
import reservationController from '../../controllers/reservationController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();

// 公開路由
router.post('/', reservationController.createReservation);
router.get('/check', reservationController.checkTableAvailability);

// 需要驗證的路由
router.get('/user', authMiddleware, reservationController.getUserReservations);
router.get('/all', authMiddleware, reservationController.getAllReservations);
router.put('/:id', authMiddleware, reservationController.updateReservation);

export default router;