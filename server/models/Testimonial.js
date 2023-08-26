import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class Testimonial {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('Testimonials');
    }

    addTestimonials(data) {
        this.col.add(data);
    }

    async getTestimonials() {
        try {
            const snap = await this.col.get();
            const testimonial = snap.docs.map((data) => ({
                ...data.data()
            }));
            return testimonial;
        } catch (error) {
            console.error("Error on get reviews:", error);
            return false;
        }
    }
}

export default Testimonial;