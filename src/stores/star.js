import { defineStore } from "pinia";
import { auth } from "../plugins/firebase";
import { signOut, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("star", {
    state: () => ({
        count: 0,
    }),
    actions: {
        setCredit(count) {
            this.count = count;
        }
    }
});