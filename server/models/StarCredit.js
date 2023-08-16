import { getFirestore } from "firebase-admin/firestore";

class StarCreditModel {
    constructor() {
        const db = getFirestore();
        this.col = db.collection('customers');
    }

    checkPrompt(prompt) {
        return true;
    }

    countInputTokens(inputText) {
        const tokens = inputText.trim().split(/\s+/);
        return tokens.length;
    }

    async manager(completionData) {
        const tokenConsume = completionData.usage.total_tokens;
        
    }

    async saveTransaction(userId, data) {
        try {
            const params = {
                teacherId: userId,
                ...data
            }
            const transRef = db.collection('starTransactions');
            await transRef.doc().create(data);
            return true;
        } catch (error) {
            console.error("StarCreditModel.saveTransaction error:", error);
            return false;
        }
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