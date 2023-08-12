import express from 'express';
import lessons from '../handlers/lessons.js';
import firebase from '../plugins/firebase-handler.js';

const router = express.Router();

router.use(express.urlencoded({ extended: false}));
router.use((req, res, next) => {
    let user = firebase.auth().currentUser;
    res.locals.currentUser = user;
    console.log(user);
    next();
});

function restrict(req, res, next) {
    if(req.locals.currentUser) {
        next();
    } else {
        req.locals.error = 'Access denied';
        res.json({ error: req.locals.error });
    }
}

router.get('/lessons', restrict, lessons);

export default router;