import express from 'express';
import lessons from '../handlers/lessons.js';

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/lessons', lessons);

export default router;