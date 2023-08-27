import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";
import { useAuthStore } from "../../src/stores/auth";

class ResourcesModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('generatedResources');
        this.authStore = new useAuthStore();
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

    async getResource(docId) {
        try {
            const docRef = this.col.doc(docId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) return docSnap.data();
            return false;
            // const docRef = doc(db, this.collectionName, docId);
            // const snap = await getDoc(docRef);
            // if(snap.exists()) return snap.data();
            // else return false;
        } catch (error) {
            console.error('Error in getting all resource', error);
            return false;
        }
    }
}

export default ResourcesModel;
