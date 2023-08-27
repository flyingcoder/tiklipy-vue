import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class SystemPromptModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('SystemPrompts');
    }

    async getPrompt(docId) {
        try {
            const docRef = this.col.doc(docId);
            return await docRef.get().then((doc) => doc.data());
        } catch (error) {
            console.error("Error getting system prompt:", error);
            return false;
        }
    }
}

export default SystemPromptModel;