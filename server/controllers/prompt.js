import express from 'express';
import Prompt from '../models/Prompt.js';
import Tool from '../models/Tool.js';
import dayjs from "dayjs";

const router = express.Router();
const PromptModel = new Prompt();
const ToolModel = new Tool();

router.post('/', async (req, res) => {
    const promptData = {
        content: req.body.systemPrompt,
        dateCreated: dayjs().format(),
        type: req.body.type
    }

    const prompt = await PromptModel.addPrompt(promptData);
    const tool = await ToolModel.addTool(req.body);
});

export default router;