import express from 'express';
import newsController from '../../controllers/newsController.js';

const router = express.Router();

router.get('/', newsController.getAllNews);

console.log('News routes registered');

export default router;