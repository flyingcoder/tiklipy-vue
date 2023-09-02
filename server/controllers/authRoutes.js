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

router.put('/codes', async (req, res) => {
    const payload = req.body;
    const success = await inviteCode.useCode(payload);
    console.log('this is success' +success);
    if(success) res.json({ done: success });
    else res.status(500).json({ msg: 'Something went wrong! Call Alvin'});
});

router.get('/codes', async (req, res) => {
    const codes = await inviteCode.getCodeCollection();
    res.json({ codes: codes });
});

router.post('/codes', async (req, res) => {
    const codes = req.body.codes;
    const success = await inviteCode.addCodeDocuments(codes);
    if(success) res.json({ msg: 'Codes are added!'});
    else res.status(500).json({ msg: 'Something went wrong! Call Alvin'});
});

export default router;