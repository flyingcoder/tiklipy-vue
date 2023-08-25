import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class AddPostModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Posts');
    }
  
    async addPost(data) {
        await this.col.add(data);
    }
}

export default AddPostModel;
