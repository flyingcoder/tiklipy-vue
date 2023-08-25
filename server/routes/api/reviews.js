import express from 'express';
import SuggestTool from '../../models/SuggestTool.js';

const router = express.Router();
const SuggestToolModel = new SuggestTool();

router.post('/', async (req, res) => {
    const resource = await SuggestToolModel.addSuggestTool(req.body);
});

export default router;