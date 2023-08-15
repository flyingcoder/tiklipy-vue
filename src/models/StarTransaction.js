import { db } from "../plugins/firebase"
import { collection, getDocs, getDoc, addDoc, where, query, doc} from "firebase/firestore";

class StarModel {
    constructor() {
        this.collectionName = 'starTransactions';
        this.colRef = collection(db, this.collectionName);
    }

    async getTransaction() {
        try {
            const queryRef = query(
                this.collectionRef,
                where('teacherId', '==', teacherId)
            );
            const querySnapshot = await getDocs(queryRef);
            return querySnapshot.docs.map((doc) => doc.data());
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default StarModel;