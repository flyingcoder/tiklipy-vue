import '../plugins/firebase-handler.js';
import express from 'express';
import generateModel from '../handlers/openai.js'; //dili makita kung walay js
import consult from '../handlers/consult.js';
import { getAuth } from 'firebase-admin/auth';

const router = express.Router();
const generate = new generateModel();
const middleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const auth = await getAuth().verifyIdToken(token).then((res));
    res.locals.currentUser = auth;
    next();
}

router.use(express.json());
router.use(express.urlencoded({ extended: true}));
router.use(middleware);

function restrict(req, res, next) {
    if(res.locals.currentUser) {
        next();
    } else {
        res.locals.error = 'Access denied';
        res.json({ error: res.locals.error });
    }
}

router.post('/lesson', restrict, async (req, res) => {
    const msg = await generate.lessonPlan(req, res);
    res.json(msg);
});
router.post('/consult', restrict, consult);

export default router;