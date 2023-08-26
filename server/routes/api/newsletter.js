import express from 'express';
import Newsletter from '../../models/Newsletter.js';

const router = express.Router();
const NewsletterModel = new Newsletter();

router.post('/', async (req, res) => {
    const pass = await NewsletterModel.emailExists(req.body.email);
    if(pass) await NewsletterModel.addNewsletter(req.body);
});

router.get('/', async (req, res) => {
    const email = await NewsletterModel.getNewsletters();
    res.json({ emails: email });
});
export default router;