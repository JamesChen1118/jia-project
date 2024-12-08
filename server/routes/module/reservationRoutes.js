import express from 'express';
import reservationController from '../../controllers/reservationController.js';
import authMiddleware from '../../middlewares/authMiddleware.js';

const router = express.Router();

router.get("/check", reservationController.checkTableAvailability);
router.post("/", reservationController.createReservation);

router.get("/user", authMiddleware, reservationController.getUserReservations);

export default router;