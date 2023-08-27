import express from 'express';
import GenerateModel from '../../models/Generate.js';

const router = express.Router();
const generate = new GenerateModel();
//note only give the last 5 message of a consultation document.

router.post('/consult', async (req, res) => {
    const resource = await generate.consultation(req.body);
    if(resource) {
        res.json(resource);
    } else {
        res.json({error: 'Something went wrong'})
    }
});

//router.use(async (req, res, next) => {
//    if(res.locals.currentUser.starCredits > 0) {
//        next();
//    } else {
//        res.locals.error = 'Insufficient star credit';
//        res.json({ error: res.locals.error });
//    } 
//});
//routes from here down below needs to have some star credit.
router.post('/generate', async (req, res) => {
    const resource = await generate.global(req.body);
    if(resource) {
        res.json(resource);
    } else {
        res.json({error: 'Something went wrong'})
    }
});

router.get('/', async (req, res) => {
    const resource = await generate.getResources(req.body.uid);
    if(resource) {
        res.json(resource);
    } else {
        res.json({error: 'Something went wrong'})
    }
});


export default router;