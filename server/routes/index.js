import express from 'express';
import newsRoutes from './module/newsRoutes.js';

const router = express.Router();

// 添加 /api 前綴
router.use('/api/news', newsRoutes);  // 修改這行

export default router;