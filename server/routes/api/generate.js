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
router.post('/', async (req, res) => {
    const resource = await generate.global(req.body);
    if(resource) {
        res.json(resource);
    } else {
        res.json({error: 'Something went wrong'})
    }
});

router.post('/lesson-plan', async (req, res) => {
    const resource = await generate.lessonPlan(req.body);
    if(resource) {
        res.json({resource: resource, starBalance: balance});
    } else {
        res.json({error: 'Something went wrong'})
    }
});



export default router;