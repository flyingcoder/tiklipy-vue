import express from "express";
import User from "../models/User.js";

const router = express.Router();
const userModel = new User();

router.get('/:uid', async (req, res) => {
    const resource = await userModel.getUser(req.params.uid);
    if(resource) res.json(resource);
    else res.json({error: 'Something went wrong'},500);
});

export default router;