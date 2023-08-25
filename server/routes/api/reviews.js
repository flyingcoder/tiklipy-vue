import express from 'express';
import Review from '../../models/Review.js';

const router = express.Router();
const ReviewModel = new Review();

router.post('/', async (req, res) => {
    const resource = await ReviewModel.addReview(req.body);
});

export default router;