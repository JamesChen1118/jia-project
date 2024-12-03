// server/routes/module/newsRoutes.js
import express from 'express';
import newsController from '../../controllers/newsController.js';

const router = express.Router();

// GET /api/news - 獲取所有新聞
router.get('/', newsController.getAllNews);

// 如果需要其他新聞相關的路由，可以在這裡添加
// router.post('/', newsController.createNews);
// router.put('/:id', newsController.updateNews);
// router.delete('/:id', newsController.deleteNews);

export default router;