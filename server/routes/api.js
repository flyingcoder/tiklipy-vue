import admin from '../plugins/firebase-handler.js';
import express from 'express';
import { getAuth } from 'firebase-admin/auth';
import generateRoutes from './api/generate.js';
import getTools from './api/tools.js';
import starCreditRoutes from './api/starCredits.js';
import authRoutes from './api/authRoutes.js';
import testimonialRoutes from './api/testimonials.js';
import newsletterRoutes from './api/newsletter.js';
import featureRoutes from './api/tools.js';
import suggestToolRoutes from './api/suggestTools.js';
import reviewRoutes from './api/reviews.js';
import postRoutes from  './api/post.js';

const router = express.Router();

const middleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        const auth = await getAuth().verifyIdToken(token).then((res));
        res.locals.currentUser = auth;
    } else {
        res.locals.error = 'Access without user';
        console.error(res.locals.error)
    }
    next();
}

const restrict = (req, res, next) => {
    if(res.locals.currentUser) {
        next();
    } else {
        res.locals.error = 'Access denied';
        console.error(res.locals.error)
        res.json({ error: res.locals.error });
    }
}

router.use(express.json());
router.use(express.urlencoded({ extended: true}));
router.use(middleware);

router.use('/posts', postRoutes);
router.use('/reviews', reviewRoutes);
router.use('/suggest-tools', suggestToolRoutes);
router.use('/newsletters', newsletterRoutes);
router.use('/features', featureRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/update', testimonialRoutes);
router.use('/auth', authRoutes);
router.use('/stars', restrict, starCreditRoutes);
router.use('/resources', restrict, generateRoutes);
router.use('/tools', restrict, getTools);


export default router;