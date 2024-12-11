import express from 'express';
import reservationController from '../../controllers/reservationController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/', reservationController.createReservation);

router.get('/user', reservationController.getUserReservations);

export default router;