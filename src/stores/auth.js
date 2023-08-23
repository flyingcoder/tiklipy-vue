import { defineStore } from "pinia";
import { auth } from "../plugins/firebase";
import { useUserStore } from "./user";
import { signOut, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("tiklipy-user")) || null,
    }),
    getters: {
        displayName: (state) => state.user.name ? state.user.name : state.user.email.split("@")[0],
    },
    actions: {
        setUserToLocal(user) {
            const userStore = useUserStore();
            userStore.setUser(user);
            delete user['accessToken'];
            this.user = user;
            localStorage.setItem("tiklipy-user", JSON.stringify(user));
        },
        async register(email, password) {
            try {
                const userCred = await createUserWithEmailAndPassword(auth, email, password);
                this.user = userCred.user;
                return true;
            } catch (error) {
                if(error.message.includes('email-already-in-use')) {
                    return 'email-already-in-use';
                }
                console.error("Normal registration error:", error);
                return false;
            }
        },
        async login(email, password) {
            try {
                const userCred = await signInWithEmailAndPassword(auth, email, password);
                this.user = userCred.user;
                return true;
            } catch (error) {
                //console.error("Normal login error:", error);
                return false;
            }
        },
        async loginVia(provider) {
            try {
                const userCred = await signInWithPopup(auth, provider);
                this.user = userCred.user;
                return true;
            } catch(error) {
                console.error("Login via provider:", error);
                return false;
            }
        },
        async logout() {
            try {
                await signOut(auth);
                this.user = null;
                localStorage.removeItem("tiklipy-user");
                return true;
            } catch (error) {
                console.error("Logout error:", error);
                return false;
            }
        },
    }
});