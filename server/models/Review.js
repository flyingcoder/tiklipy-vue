import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class ReviewModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Reviews');
    }
  
    async addReview(data) {
        try {
            await this.col.add(data);
            return true;
        } catch (error) {
            console.error("Error adding a review:", data);
            return false;
        }
        
    }

    async getReviews() {
        try {
            const snap = await this.col.get();
            const reviews = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return reviews;
        } catch (error) {
            console.error("Error on get reviews:", error);
            return false;
        }
    }

    async updateReview(data) {
        try {
            const reviewRef = this.col.doc(data.id);
            await reviewRef.update(data);
            return true;
        } catch (error) {
            console.error("Error updating review:", error);
            return false;
        }
    }
}

export default ReviewModel;