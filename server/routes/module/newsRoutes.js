import express from 'express';
import newsController from '../../controllers/newsController.js';

const router = express.Router();

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);

export default router;