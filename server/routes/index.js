import express from "express";
import asyncHandler from "express-async-handler";
import productController from "../controllers/productController.js";
import orderController from "../controllers/orderController.js";
import newsController from "../controllers/newsController.js";
import { registerUser, loginUser } from "../controllers/userController.js";
import cartController from "../controllers/cartController.js";
import reservationController from "../controllers/reservationController.js";

const router = express.Router();

// 產品路由
router.get('/products', productController.getProducts);
router.get('/categories', productController.getCategories);

// 訂單路由
router.get('/orders', orderController.getOrders);
router.post('/order', orderController.addOrder);

// 新聞路由
router.get('/news', newsController.getAllNews);

// 用戶路由
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);

// 購物車路由
router.post('/cart', cartController.createCart);
router.put('/cart/:cartId', cartController.updateCart);
router.get('/cart/:userId', cartController.getUserCart);

// 預約路由
router.post('/reservation', reservationController.createReservation);
router.get('/reservations', reservationController.getReservations);
router.delete('/reservation/:id', reservationController.deleteReservation);

export default router;