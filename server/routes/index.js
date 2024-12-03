import express from 'express';
import newsRoutes from './module/newsRoutes.js';

const router = express.Router();

console.log('Registering news routes at /news');
router.use('/news', newsRoutes);

export default router;