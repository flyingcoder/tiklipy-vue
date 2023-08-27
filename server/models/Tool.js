import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";
import cards from '../temp/cards.js';

class ToolModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('invitationCodes');
    }

    getTools() {
        
        return cards;
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

    getFeatures() {
        const features = [];
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