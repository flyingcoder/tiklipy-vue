import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";
import SystemPrompt from '../models/SystemPrompt.js';

const SystemPromptModel = new SystemPrompt();

class ToolModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Tools');
    }

    async getTools() {
        try {
            const snaps = await this.col.get();
            const tools = [];
            const promises = [];
    
            for (const doc of snaps.docs) {
                const data = doc.data();
                const promptPromise = SystemPromptModel.getPrompt(data.systemPrompt);
    
                promises.push(promptPromise);
    
                const toolWithoutPrompt = {
                    id: doc.id,
                    ...data,
                };
    
                tools.push(toolWithoutPrompt);
            }
    
            const prompts = await Promise.all(promises);
    
            for (let i = 0; i < tools.length; i++) {
                tools[i].systemPrompt = prompts[i];
            }
    
            return tools;
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

    async delTool(data) {
        try {
            const docRef = this.col.doc(data);
            const del = await docRef.delete();
            return del;
        } catch (error) {
            console.error("Error Deleting a Tool", error);
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