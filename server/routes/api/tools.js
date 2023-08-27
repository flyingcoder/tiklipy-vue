import express from 'express';
import Tool from '../../models/Tool.js';

const router = express.Router();
const toolModel = new Tool();

router.post('/', (req, res) => {
    const success = toolModel.addTool(req.body);
    if(success) res.json({ msg: "Successfully add a tool!"});
    else res.json({ msg: "Something went wrong!"});
});

router.get('/',  (req, res) => {
    try {
        const toolsData = toolModel.getTools();
        if (toolsData) res.json(toolsData);
        else res.json({ error: 'Something went wrong' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
