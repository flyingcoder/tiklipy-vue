import UserModel from '../models/User.js';

const userModel = new UserModel();

const adminOnly = async (req, res, next) => {
    if(res.locals.currentUser) {
        const cus = await userModel.getUser(res.locals.currentUser.uid);
        if(cus?.isAdmin) next();
        else res.json({ error: 'Admin diay ka?' }, 401);
    } else {
        req.log.error('Access denied');
        res.json({ error: 'This api is for tiklipy subscribers only.' }, 401);
    }
}

export default adminOnly;