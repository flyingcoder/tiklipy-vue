import express from 'express';
import StripeModel from "../models/Stripe.js";

const router = express.Router();
const stripeModel = new StripeModel();

router.get('/products', async (req, res) => {
    const products = await stripeModel.getProducts();
    res.json(products);
});

export default router;