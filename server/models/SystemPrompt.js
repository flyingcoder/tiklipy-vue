import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";
import pino from "../logger.js";
import dayjs from "dayjs";

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
            pino.logger.error("Error getting system prompt:" + error);
            return false;
        }
    }

    async searchPrompt(query) {
        try {
            const docRef = this.col.where('content', '==', query);
            const snaps = await docRef.get();
            return snaps.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            pino.logger.error("Error searching system prompt:" + error);
            return false;
        }
    }

    async updatePrompt(id, content, type) {
        try {
            const docRef = this.col.doc(id);
            const data = {
                content: content,
                dateCreated: dayjs().format(),
                type: type
            }
            await docRef.update(data);
            return true;
        } catch (error) {
            pino.logger.error("Error adding system prompt:" + error);
            return false;
        }
    }

    async addPrompt(data) {
        try {
            const docRef = await this.col.add(data);
            return docRef.id;
        } catch (error) {
            pino.logger.error("Error adding system prompt:" + error);
            return false;
        }
    }
}

export default SystemPromptModel;