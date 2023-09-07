import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();
const ContactModel = new Contact();

router.post('/', async (req, res) => {
    const contactInfo = await ContactModel.addContact(req.body);
});

export default router;