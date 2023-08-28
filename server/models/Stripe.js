import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class StripeModel {
    constructor() {
        const db = getFirestore(admin);
        this.productCol = db.collection('products');
    }
  
    async getProducts() {
        let products = [];
        const docRef = this.productCol.where('active', '===', true);
        const snaps = docRef.get();
        const productsRef = snaps.docs.map((data) => ({
            ...data.data()
        }));
        productsRef.forEach( async (product) => {
            const colRef = this.productCol.doc(product.id).collection('prices');
            const docRef = await colRef.orderBy("interval", "asc").get();

            products.push({
                id: product.id,
                ...product.data(),
                prices: [{
                    id: priceRes.docs[0].id,
                    ...priceRes.docs[0].data(),
                }]
            });
        });
    }
}

export default StripeModel;