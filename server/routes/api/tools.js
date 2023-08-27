import express from 'express';
import Tools from '../../models/Tool.js';

const router = express.Router();
const toolsModel = new Tools();

router.post('/', (req, res) => {
    const success = toolsModel.addTool(req.body);
    if(success) res.json({ msg: "Successfully add a tool!"});
    else res.json({ msg: "Something went wrong!"});
});

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

export default router;
