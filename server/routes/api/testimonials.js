import express from 'express';
import TestimonialModel from '../../models/Testimonial.js';
import ReviewModel from '../../models/Review.js';

const testimonial = new TestimonialModel();
const review = new ReviewModel();
const router = express.Router();

router.get('/', async (req, res) => {
    const testimonials = await testimonial.getTestimonials();
    res.json(testimonials);

});

router.put('/update', async (req, res) => {
    const data = req.body;
    try {
        const success = await review.updateReview(data);
        const testimonials = await testimonial.addTestimonials(data);
        if (success) {
            res.json({ message: "Review updated successfully." });
        } else {
            res.status(500).json({ error: "An error occurred while updating the review." });
        }
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ error: "An error occurred while updating the review." });
    }
});

export default router;