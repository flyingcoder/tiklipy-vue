import express from 'express';
import Tools from '../../models/Tools.js';

const router = express.Router();
const toolsModel = new Tools();

router.get('/',  (req, res) => {
    try {
        const toolsData = toolsModel.getTools();
        if (toolsData) {
            res.json(toolsData);
        } else {
            res.json({ error: 'Something went wrong' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/features',  (req, res) => {
    const featureData = toolsModel.getFeatures();
    res.json(featureData);
});

export default router;
