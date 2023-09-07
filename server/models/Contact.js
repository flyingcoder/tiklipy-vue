import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class AddContactModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Contacts');
    }
  
    async addContact(data) {
        try {
            await this.col.add(data);
        } catch (error) {
            pino.logger.error("error adding contact to firebase"+ error);
        }

    }
}
export default AddContactModel;