import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class ToolModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Tools');
    }

    async getTools() {
        try {
            const snaps = await this.col.get();
            return snaps.docs.map((data) => ({
                ...data.data()
            }));
        } catch (error) {
            console.error("Error getting tools", error);
            return [];
        }
    }

    async addTool(data) {
        try {
            await this.col.add(data);
            return true;
        } catch (error) {
            console.error("Error Adding a Tool", error);
            return false;
        }
    }

    async getFeatures() {
        const features = [];
        const cards = await this.getTools();
        for ( const card of cards) {
            features.push({
                title: card.title,
                description: card.description,
                icon:card.icon
            })
        }
        return features;
    }
}

export default ToolModel;