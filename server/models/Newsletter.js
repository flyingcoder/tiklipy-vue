import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class AddNewsletterModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('addNewsletter');
    }
  
    async addNewsletter(data) {
        await this.col.add(data);
    }
}

export default AddNewsletterModel;
