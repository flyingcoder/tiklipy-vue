import express from 'express';
import Newsletter from '../../models/Newsletter.js';

const router = express.Router();
const NewsletterModel = new Newsletter();

router.post('/', async (req, res) => {
    const resource = await NewsletterModel.addNewsletter(req.body);
});

export default router;