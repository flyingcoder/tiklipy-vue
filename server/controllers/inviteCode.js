import express from 'express';
import InviteCodeModel from "../models/InviteCode.js";

const router = express.Router();
const inviteCode = new InviteCodeModel();

router.put('/codes', async (req, res) => {
    const payload = req.body;
    const success = await inviteCode.useCode(payload);
    req.log.info('This is success' +success);
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