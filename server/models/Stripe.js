import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class StripeModel {
    constructor() {
        const db = getFirestore(admin);
        this.productCol = db.collection('products');
    }

    async getPrices(snaps) {
        snaps.forEach( async (product) => {
            console.log(product.id);

            const colRef = this.productCol.doc(product.id).collection('prices');
            const priceRes = await colRef.orderBy("interval", "asc").get();
            priceRes.forEach((price) => {
                products.push({
                    id: product.id,
                    ...product.data(),
                    prices: [{
                        id: price.id,
                        ...price.data(),
                    }]
                });
            });
            
        });
    }
  
    async getProducts() {
        const products = [];
        const docRef = this.productCol.where('active', '==', true);
        try {
            const snaps = await docRef.get();
            
            const promises = snaps.docs.map(async (product) => {
                console.log(product.id);

                const colRef = this.productCol.doc(product.id).collection('prices');
                const priceRes = await colRef.orderBy("interval", "asc").get();
                
                const prices = priceRes.docs.map(price => ({
                    id: price.id,
                    ...price.data(),
                }));
                
                products.push({
                    id: product.id,
                    ...product.data(),
                    prices: [prices[0]],
                });
            });

            await Promise.all(promises);
            
            return products;
        } catch (error) {
            console.error("Error fetching products:", error);
            return [];
        }
    }
}

export default StripeModel;