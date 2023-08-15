import '../plugins/firebase-handler.js';
import express from 'express';
import { getAuth } from 'firebase-admin/auth';
import generateRoutes from './api/generate.js';
import starCreditRoutes from './api/starCredits.js';

const router = express.Router();

const middleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const auth = await getAuth().verifyIdToken(token).then((res));
    res.locals.currentUser = auth;
    next();
}

const restrict = (req, res, next) => {
    if(res.locals.currentUser) {
        next();
    } else {
        res.locals.error = 'Access denied';
        res.json({ error: res.locals.error });
    }
}

router.use(express.json());
router.use(express.urlencoded({ extended: true}));
router.use(middleware);

router.use('/stars', restrict, starCreditRoutes);
router.use('/generate', restrict, generateRoutes);

//router.post('/lesson', restrict, async (req, res) => {
//    const msg = await generate.lessonPlan(req, res);
//    res.json(msg);
//});

export default router;