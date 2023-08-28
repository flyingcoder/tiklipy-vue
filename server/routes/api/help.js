import express from 'express';
import Help from '../../models/Help.js';

const router = express.Router();
const HelpModel = new Help();

router.post('/', async (req, res) => {
    try {
        const pass = await HelpModel.addHelp(req.body);
    } catch (error) {
        res.json({msg: 'Something went wrong', payload: req.body }, 500);
    }
    
});

router.get('/', async (req, res) => {
    const help = await HelpModel.getHelp();
    res.json({ helps: help });
});
export default router;