import express from 'express';
import Review from '../../models/Review.js';

const router = express.Router();
const ReviewModel = new Review();

router.post('/', async (req, res) => {
    const resource = await ReviewModel.addReview(req.body);
});

router.get('/', async (req, res) => {
    const reviews = await ReviewModel.getReviews();
    res.json({ reviews: reviews });
});

export default router;