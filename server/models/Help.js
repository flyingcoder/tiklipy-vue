import admin from "../plugins/firebase-handler.js";
import { getFirestore , } from "firebase-admin/firestore";

class NewsletterModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Help');
    }
  
    async addHelp(data) {
        await this.col.add(data);
    }
}

export default NewsletterModel;
