import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class ResourceModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Resources');
    }

    async getResources(uid) {
        try {
            const colRef = this.col.where('teacherId', '==', uid);
            const snaps = await colRef.get();
            const resources = snaps.docs.map((doc)=>{ return {id: doc.id, ...doc.data()}; });
            if(!snaps.empty) return resources;
        } catch (error) {
            console.error('Error in getting all resources', error);
            return false;
        }
    }

    async addResource(data) {
        try {
            await this.col.add(data);
            return true;
        } catch (error) {
            console.error("Adding a resource error:", error)
            return false;
        }
    }

    async getResource(docId) {
        try {
            const docRef = this.col.doc(docId);
            return await docRef.get().then((doc) => doc.data());
        } catch (error) {
            console.error('Error in getting all resource', error);
            return false;
        }
    }
}

export default ResourceModel;
