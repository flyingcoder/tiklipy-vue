import express from 'express';
import StarCreditModel from '../models/StarCredit.js';

const router = express.Router();
const starCredit = new StarCreditModel();

router.put('/update', async (req, res) => {
    res.json({msg: 'this is update'});
});

router.post('/transactions', async (req, res) => {
    const success = await starCredit.saveTransaction(uid, req.data);
    if(success)
        res.json({msg: 'Transaction is successfully saved', payload: req.body });
    else
        res.json({msg: 'Something went wrong', payload: req.body }, 500);
});

export default router;