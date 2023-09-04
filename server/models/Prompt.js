import admin from '../plugins/firebase-handler.js';
import { getFirestore } from 'firebase-admin/firestore';
class PromptModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('SystemPrompts');
    }

    async addPrompt(data) {
        const docRef = await this.col.add(data);
        return docRef.id;
    }
}
export default PromptModel;