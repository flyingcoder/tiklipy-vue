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

    async deletePost(data) {
        try {
            const docRef = await this.col.doc(data.id);
            await docRef.delete();
    
            console.log('Document deleted successfully');
            return true;
        } catch (error) {
            console.error('Error in deleting code document:', error);
            return false;
        }
    }
    async updatePost(data) {
        try {
            const docRef = await this.col.doc(data.id);
            await docRef.update(data.data);
    
            console.log('Document deleted successfully');
            return true;
        } catch (error) {
            console.error('Error in deleting code document:', error);
            return false;
        }
    }

    async getPostBySlug(slug) {
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
            console.error('Error in getting Blog', error);
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