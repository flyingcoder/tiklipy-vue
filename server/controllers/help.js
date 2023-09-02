import express from 'express';
import Help from '../models/Help.js';

const router = express.Router();
const helpModel = new Help();

router.post('/', async (req, res) => {
    try {
        const pass = await helpModel.addHelp(req.body);
    } catch (error) {
        res.json({msg: 'Something went wrong', payload: req.body }, 500);
    } 
});

router.get('/initiation', async (req, res) => {
    try {
        const initiation = await helpModel.getHelpInitiation();
        res.json({ initiation: initiation });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});

router.get('/knowhow', async (req, res) => {
    try {
        const knowhow = await helpModel.getHelpKnowHow();
        res.json({ knowhow: knowhow });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});

router.get('/ethics', async (req, res) => {
    try {
        const ethic = await helpModel.getHelpEthics();
        res.json({ ethics: ethic });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});

router.get('/applications', async (req, res) => {
    try {
        const application = await helpModel.getHelpApplications();
        res.json({ applications: application });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});

router.get('/accountancy', async (req, res) => {
    try {
        const accountancy = await helpModel.getHelpAccountancy();
        res.json({ accountancy: accountancy });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});

router.get('/assistance', async (req, res) => {
    try {
        const assistance = await helpModel.getHelpAssistance();
        res.json({ assistance: assistance });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});

router.get('/visuals', async (req, res) => {
    try {
        const visuals = await helpModel.getHelpVisuals();
        res.json({ visuals: visuals });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});

router.get('/helps', async (req, res) => {
    try {
        const slug = req.query.slug;
        const data = await helpModel.getHelpData(slug);
        res.json({ data: data });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', payload: req.body });
    }
});

// router.get('/', async (req, res) => {
//     const help = await helpModel.getHelp();
//     res.json({ helps: help });
// });
export default router;