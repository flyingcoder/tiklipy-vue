import express from 'express';
import adminOnly from '../middlewares/adminMiddleware.js';
import InviteCodeModel from "../models/InviteCode.js";

const router = express.Router();
const inviteCode = new InviteCodeModel();

router.put('/', async (req, res) => {
    const payload = req.body;
    const success = await inviteCode.useCode(payload);
    req.log.info('This is success' +success);
    if(success) res.json({ done: success });
    else res.status(500).json({ msg: 'Something went wrong! Call Alvin'});
});

router.get('/', adminOnly, async (req, res) => {
    try {
        const codes = await inviteCode.getCodeCollection();
        res.json({ codes: codes });
    } catch (error) {
        req.log.error("Invite code error" + error);
        res.json({ error: "Error in fetching invite codes."}, 500);
    }
    
});

router.post('/delete', async (req, res) => {
    const success = await inviteCode.deleteCode(req.body);
    if(success) res.json({ msg: 'Code are deleted!'});
    else res.status(500).json({ msg: 'Something went wrong! Call Alvin'});
});

router.post('/', async (req, res) => {
    const codes = req.body.codes;
    const success = await inviteCode.addCodeDocuments(codes);
    if(success) res.json({ msg: 'Codes are added!'});
    else res.status(500).json({ msg: 'Something went wrong! Call Alvin'});
});

export default router;