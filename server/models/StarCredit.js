import { getFirestore } from "firebase-admin/firestore";

class StarCreditModel {
    constructor() {
        const db = getFirestore();
        this.col = db.collection('customers');
    }

    async updateStarCredits(userId, newCredits) {
        try {
            const userDocRef = this.col.doc(userId);
            await userDocRef.update({ starCredits: newCredits });
            return true;
        } catch (error) {
            console.error("StarCreditModel.updateStarCredits error:", error);
            return false;
        }
    }
}

export default StarCreditModel;