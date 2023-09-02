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
    else res.status(500).json("Error adding resources");
})

router.get('/', async (req, res) => {
    const resource = await resourceModel.getResources(req.body.uid);
    if(resource) {
        res.json(resource);
    } else {
        res.json({error: 'Something went wrong'})
    }
});

router.get('/generate-doc', async (req, res) => {
    const resource = await resourceModel.getResource(req.body.docId);
    if(resource) {
        res.json(resource);
    } else {
        res.json({error: 'Something went wrong'})
    }
});

router.get('/system-prompt', async (req, res) => {
    const prompt = await systemPrompt.systemPrompt(req.body.id);
    if(prompt) res.json(prompt);
    else res.json({error: 'Something went wrong'});
});


router.post('/generate', async (req, res) => {
    const resource = await generate.global(req.body);
    res.json(resource);
});
// note: return the last 5 message of a messages to save token
router.post('/consult', async (req, res) => {
    const resource = await generate.consultation(req.body);
    if(resource) {
        res.json(resource);
    } else {
        res.json({error: 'Something went wrong'})
    }
});



export default router;