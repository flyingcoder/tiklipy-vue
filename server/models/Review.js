import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class ReviewModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Reviews');
    }
  
    addReview(data) {
        this.col.add(data);
    }
}

export default ReviewModel;