import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class HelpsModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Help');
    }
  
    async addHelp(data) {
        await this.col.add(data);
    }

    async getHelp(slug) {
        try {
            const docRef = this.col.doc(slug);
            return await docRef.get().then((doc) => doc.data());
        } catch (error) {
            console.error("Error on get Help:", error);
            return false;
        }
    }

}

export default HelpsModel;
