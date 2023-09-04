import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "../stores/auth";
import { auth } from "../plugins/firebase";
import axios from "../plugins/axios";


class AuthModel {
    constructor() {
        axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
    }

    async getUser(uid) {
        try {
            return await axios.get('/api/v1/users/'+uid).then((res) => res.data);
        } catch (error) {
            return false;
        }
    }

    async checkIfAdmin(uid) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            const cus = await this.getUser(uid);
            return cus?.isAdmin ?? false;
        } catch (error) {
            return false;
        }
        
    }

    async fireAuthState() {
        const authStore = useAuthStore();
        return new Promise((resolve) => {
            const stop = onAuthStateChanged(auth, async (u) => {
                 stop();
                 if (u) {
                    const user = {
                        uid : u.uid ?? null, email : u.email ?? null,
                        displayName: u.displayName ?? null, accessToken: u.accessToken ?? null,
                        photoURL: u.photoURL ?? null, phoneNumber: u.phoneNumber ?? null
                    }
                    authStore.setUserToLocal(user);
                    resolve(u);
                 } else {
                     resolve(null);
                 }
            }); 
        });
    }
}

export default AuthModel;