import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from 'firebase-admin/auth';

const db = getFirestore();

export default (req, res) => {
    let uid = res.locals.currentUser.uid;
    const lessons = db.collection('customers/'+ uid +'/subscriptions').get().then((res));
    res.json(lessons.data);
};