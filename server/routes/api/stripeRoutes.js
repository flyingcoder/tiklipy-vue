import express from 'express';
import stripeModel from "../../models/Stripe.js";

const router = express.Router();
const inviteCode = new InviteCodeModel();

router.get('/products', async (req, res) => {
    const products = await stripeModel.getProducts();
    res.json(products);
});