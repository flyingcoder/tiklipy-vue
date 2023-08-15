import express from 'express';
import StarCreditModel from '../../models/StarCredit.js';

const router = express.Router();
const StarCredit = new StarCreditModel();

router.put('/update', async (req, res) => {
    res.json({msg: 'this is update'});
});

router.get('/:userId', async (req, res) => {
    res.json({msg: 'this is get'});
});

export default router;