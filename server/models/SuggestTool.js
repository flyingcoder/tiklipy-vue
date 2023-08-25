import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class SuggestToolsModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('suggestedTools');
    }
  
    addSuggestTool(data) {
        this.col.add(data);
    }
}

export default SuggestToolsModel;