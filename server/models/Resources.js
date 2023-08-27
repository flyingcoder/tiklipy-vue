import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class ResourcesModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('generatedResources');
    }

    async getResources(uid) {
        try {
            const colRef = this.col.where('teacherId', '===', uid);
            const snaps = await colRef.get().then((snaps) => snaps );
            if(!snaps.empty) return true;
        } catch (error) {
            console.error('Error in getting all resources', error);
            return false;
        }
    }
}

export default ResourcesModel;
