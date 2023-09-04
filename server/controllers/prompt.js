import express from 'express';
import Prompt from '../models/Prompt.js';
import Tool from '../models/Tool.js';
import dayjs from "dayjs";

const router = express.Router();
const PromptModel = new Prompt();
const ToolModel = new Tool();

router.post('/', async (req, res) => {
    try {
        const promptData = {
            content: req.body.systemPrompt,
            dateCreated: dayjs().format(),
            type: req.body.type
        }

        const prompt = await PromptModel.addPrompt(promptData);

        req.body.systemPrompt = prompt;

        const tool = await ToolModel.addTool(req.body);

        res.status(200).json({ msg: 'Prompt and tool added successfully', payload: tool });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong', error });
    }
});

export default router;