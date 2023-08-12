import '../plugins/firebase-handler.js';
import express from 'express';
import lessons from '../handlers/lessons';
import consult from '../handlers/consult';
import { getAuth } from 'firebase-admin/auth';

const router = express.Router();
const middleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const auth = await getAuth().verifyIdToken(token).then((res));
    res.locals.currentUser = auth;
    next();
}

router.use(express.urlencoded({ extended: false}));
router.use(middleware);

function restrict(req, res, next) {
    if(res.locals.currentUser) {
        next();
    } else {
        res.locals.error = 'Access denied';
        res.json({ error: res.locals.error });
    }
}

router.get('/lessons', restrict, lessons);
router.post('/consult', restrict, consult);

export default router;