import express from 'express';
import GenerateModel from '../models/Generate.js';
import ResourceModel from '../models/Resource.js';
import SystemPromptModel from '../models/SystemPrompt.js';

const router = express.Router();
const generate = new GenerateModel();
const resourceModel = new ResourceModel();
const systemPrompt = new SystemPromptModel();

router.post('/', async (req, res) => {
    const success = await resourceModel.addResource(req.body);
    if (success) res.json({ msg: "Resource successfully added!" });
    else res.json({error: 'Something went wrong'},500);
})

router.get('/', async (req, res) => {
    const resources = await resourceModel.getResources(res.locals.currentUser.uid);
    if(resources) res.json(resources);
    else res.json({error: 'Something went wrong'},500);
});

router.get('/doc/:docId', async (req, res) => {
    const resource = await resourceModel.getResource(req.params.docId);
    if(resource) res.json(resource);
    else res.json({error: 'Something went wrong'},500);
});

router.get('/system-prompt', async (req, res) => {
    const prompt = await systemPrompt.systemPrompt(req.body.id);
    if(prompt) res.json(prompt);
    else res.json({error: 'Something went wrong'},500);
});


router.post('/generate', async (req, res) => {
    const resource = await generate.global(req.body);
    if(resource) res.json(resource);
    else res.json({error: 'Something went wrong'},500);
});

// note: return the last 5 message of a messages to save token
router.post('/consult', async (req, res) => {
    const resource = await generate.consultation(req.body);
    if(resource) res.json(resource);
    else res.json({error: 'Something went wrong'},500);
});

export default router;