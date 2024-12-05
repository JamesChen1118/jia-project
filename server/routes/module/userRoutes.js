import express from "express";
import userController from "../../controllers/userController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes
router.post("/login", userController.login);
router.post("/register", userController.register);

// Protected routes
router.get("/", authMiddleware, userController.getUser);
router.put("/", authMiddleware, userController.updateUser);

export default router;
