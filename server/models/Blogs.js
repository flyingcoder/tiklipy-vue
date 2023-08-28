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

    async getPostBySlug(slug) {
        try {
            const querySnapshot = await this.col.where("slug", "==", slug).get();
            if (querySnapshot.empty) {
                return null; // Blog not found
            }
            const doc = querySnapshot.docs[0];
            return { id: doc.id, ...doc.data() };
        } catch (error) {
            console.error("Error on get blogs:", error);
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
            console.error("Error on get blogs:", error);
            return false;
        }
    }
}

export default AddPostModel;