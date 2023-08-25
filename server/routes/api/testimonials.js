import express from 'express';
import TestimonialModel from '../../models/Testimonial.js';

const testimonial = new TestimonialModel();
const router = express.Router();

router.get('/', async (req, res) => {
    const testimonials = await testimonial.getTestimonials();
});

export default router;