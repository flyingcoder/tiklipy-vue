import admin from "../plugins/firebase-handler.js";
import { getFirestore , } from "firebase-admin/firestore";

class NewsletterModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Newsletter');
    }
  
    async addNewsletter(data) {
        await this.col.add(data);
    }
    
    async emailExists(email) {
        const q = query(this.col, where("email", "==", email));
        const querySnapshot = await getDocs(q);

        return !querySnapshot.empty;
    }

    async getNewsletters() {
        try {
            const snap = await this.col.get();
            const emails = snap.docs.map((doc) => doc.data());
            return emails;
        } catch (error) {
            console.error("Error on get reviews:", error);
            return false;
        }
    }
}

export default NewsletterModel;
