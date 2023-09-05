import express from 'express';
import InviteCodeModel from "../models/InviteCode.js";

const router = express.Router();
const inviteCode = new InviteCodeModel();

router.post('/verify-code', async (req, res) => {
    const code = req.body.code;
    let verified = false;
    if(code != '') verified = await inviteCode.verifyCode(code);
    res.json({ pass: verified });
});

export default router;