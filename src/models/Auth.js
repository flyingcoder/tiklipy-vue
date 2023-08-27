import { collection, getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../plugins/firebase";
import { useAuthStore } from "../stores/auth";


class AuthModel {

    constructor() {
        this.colName = 'customers';
        this.collection = collection(db, this.colName);
    }

    async getUser(uid) {
        return await getDoc(doc(db, this.colName, uid)).then((snap) => snap.data());
    }

    async fireAuthState() {
        const authStore = useAuthStore();
        return new Promise((resolve) => {
            const stop = onAuthStateChanged(auth, async (u) => {
                 stop();
                 if (u) {
                    //const cusDoc = await this.getUser(u.uid);
                    const user = {
                        uid : u.uid ?? null, email : u.email ?? null,
                        displayName: u.displayName ?? null, accessToken: u.accessToken ?? null,
                        photoURL: u.photoURL ?? null, phoneNumber: u.phoneNumber ?? null
                    }
                    authStore.setUserToLocal(user);
                    resolve(user);
                 } else {
                     resolve(null);
                 }
            }); 
        });
    }
}

export default AuthModel;