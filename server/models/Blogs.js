import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class AddPostModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('blog');
    }
  
    async addPost(data) {
        await this.col.add(data);
    }

    async getPost(slug) {
        try {
            const docRef = this.col.doc(slug);
            return await docRef.get().then((doc) => doc.data());
        } catch (error) {
            console.error("Error on get reviews:", error);
            return false;
        }
    }

    async getPosts() {
        try {
            const snap = await this.col.get();
            const blogs = snap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            return blogs;
        } catch (error) {
            console.error("Error on get reviews:", error);
            return false;
        }
    }
}

export default AddPostModel;