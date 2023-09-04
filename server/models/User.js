import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";
import pino from "../logger.js";

class UserModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('customers');
    }

    async getUser(uid) {
        try {
            const docRef = this.col.doc(uid);
            return await docRef.get().then((snap) => snap.data());
        } catch (error) {
            pino.logger.error("Error getting user"+ error);
            return false;
        }
    }
}

export default UserModel;