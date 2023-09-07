import express from 'express';
import { getAuth } from 'firebase-admin/auth';
import generateRoutes from '../controllers/generate.js';
import getTools from '../controllers/tools.js';
import starCreditRoutes from '../controllers/starCredits.js';
import authRoutes from '../controllers/authRoutes.js';
import testimonialRoutes from '../controllers/testimonials.js';
import newsletterRoutes from '../controllers/newsletter.js';
import featureRoutes from '../controllers/tools.js';
import suggestToolRoutes from '../controllers/suggestTools.js';
import reviewRoutes from '../controllers/reviews.js';
import postRoutes from  '../controllers/blog.js';
import contactRoutes from  '../controllers/contact.js';
import helpRoutes from '../controllers/help.js';
import stripeRoutes from '../controllers/stripeRoutes.js';
import promptRoutes from '../controllers/prompt.js';
import userRoutes from '../controllers/userRoutes.js';
import inviteCodeRoutes from '../controllers/inviteCodeRoutes.js';

const router = express.Router();

const middleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if(token) {
        const auth = await getAuth().verifyIdToken(token).then((res));
        res.locals.currentUser = auth;
    } else {
        req.log.info('Access without user');
    }
    next();
}

const restrict = (req, res, next) => {
    if(res.locals.currentUser) {
        next();
    } else {
        req.log.error('Access denied');
        res.json({ error: 'This api is for tiklipy subscribers only.' }, 401);
    }
}

router.use(express.json());
router.use(express.urlencoded({ extended: true}));
router.use(middleware);

router.use('/contacts', contactRoutes);
router.use('/posts', postRoutes);
router.use('/prompts', promptRoutes);
router.use('/reviews', reviewRoutes);
router.use('/suggest-tools', suggestToolRoutes);
router.use('/newsletters', newsletterRoutes);
router.use('/features', featureRoutes);
router.use('/helps', helpRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/update', testimonialRoutes);
router.use('/auth', authRoutes);
router.use('/stripes', stripeRoutes);
router.use('/codes', restrict, inviteCodeRoutes);
router.use('/users', restrict, userRoutes);
router.use('/stars', restrict, starCreditRoutes);
router.use('/resources', restrict, generateRoutes);
router.use('/tools', restrict, getTools);

export default router;