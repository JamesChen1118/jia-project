import express from "express";
import productController from "../controllers/productController.js";
import orderController from "../controllers/orderController.js";
import newsController from "../controllers/newsController.js";
import cartController from "../controllers/cartController.js";
import reservationController from "../controllers/reservationController.js";

const router = express.Router();

router.get('/products', productController.getProducts);
router.get('/categories', productController.getCategories);

router.get('/orders', orderController.getOrders);
router.post('/order', orderController.addOrder);

router.get('/news', newsController.getAllNews);

router.post('/cart', cartController.createCart);
router.put('/cart/:cartId', cartController.updateCart);
router.get('/cart/:userId', cartController.getUserCart);

router.post('/reservation', reservationController.createReservation);
router.get('/reservations', reservationController.getReservations);
router.delete('/reservation/:id', reservationController.deleteReservation);

export default router;