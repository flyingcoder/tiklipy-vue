import { defineStore } from "pinia";
import { auth } from "../plugins/firebase";
import { signOut, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("tiklipy-user")) || null,
    }),
    actions: {
        setUserToLocal(user) {
            this.user = user;
            localStorage.setItem("tiklipy-user", JSON.stringify(user));
        },
        async register(email, password) {
            try {
                const userCred = await createUserWithEmailAndPassword(auth, email, password);
                this.user = userCred.user;
            } catch (error) {
                return false;
            }
        },
        async login(email, password) {
            try {
                const userCred = await signInWithEmailAndPassword(auth, email, password);
                this.user = userCred.user;
                return true;
            } catch (error) {
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
            } catch (error) {
                console.error("Logout error:", error);
            }
            
        },
    }
});