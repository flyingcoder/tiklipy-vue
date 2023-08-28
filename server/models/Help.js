import admin from "../plugins/firebase-handler.js";
import { getFirestore , } from "firebase-admin/firestore";

class NewsletterModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Help');
    }
  
    async addHelp(data) {
        await this.col.add(data);
    }

    async getHelpInitiation() {
        try {
            const colRef = this.col.where('category', '==', 'initiation');
            const snaps = await colRef.get();
            const data = snaps.docs.map((doc) => doc.data());
            return data;
        } catch (error) {
            console.error('Error in getting initiation category', error);
            return false;
        }
    }

    async getHelpKnowHow() {
        try {
            const colRef = this.col.where('category', '==', 'knowhow');
            const snaps = await colRef.get();
            const data = snaps.docs.map((doc) => doc.data());
            return data;
        } catch (error) {
            console.error('Error in getting knowhow category', error);
            return false;
        }
    }

    async getHelpEthics() {
        try {
            const colRef = this.col.where('category', '==', 'ethics');
            const snaps = await colRef.get();
            const data = snaps.docs.map((doc) => doc.data());
            return data;
        } catch (error) {
            console.error('Error in getting knowhow category', error);
            return false;
        }
    }

    async getHelpApplications() {
        try {
            const colRef = this.col.where('category', '==', 'applications');
            const snaps = await colRef.get();
            const data = snaps.docs.map((doc) => doc.data());
            return data;
        } catch (error) {
            console.error('Error in getting knowhow category', error);
            return false;
        }
    }

    async getHelpAccountancy() {
        try {
            const colRef = this.col.where('category', '==', 'accountancy');
            const snaps = await colRef.get();
            const data = snaps.docs.map((doc) => doc.data());
            return data;
        } catch (error) {
            console.error('Error in getting knowhow category', error);
            return false;
        }
    }

    async getHelpAssistance() {
        try {
            const colRef = this.col.where('category', '==', 'assistance');
            const snaps = await colRef.get();
            const data = snaps.docs.map((doc) => doc.data());
            return data;
        } catch (error) {
            console.error('Error in getting knowhow category', error);
            return false;
        }
    }

    async getHelpVisuals() {
        try {
            const colRef = this.col.where('category', '==', 'visuals');
            const snaps = await colRef.get();
            const data = snaps.docs.map((doc) => doc.data());
            return data;
        } catch (error) {
            console.error('Error in getting knowhow category', error);
            return false;
        }
    }

    async getHelpData(slug) {
        try {
            const colRef = this.col.where('slug', '==', slug);
            const snaps = await colRef.get();
            
            if (!snaps.empty) {
                const data = snaps.docs.map((doc) => doc.data());
                return data;
            } else {
                return [];
            }
        } catch (error) {
            console.error('Error in getting knowhow category', error);
            return false;
        }
    }
    

}

export default NewsletterModel;
