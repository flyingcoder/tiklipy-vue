import { defineStore } from "pinia";
import axios from "axios";
import { getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";


export const useAuthStore = defineStore("auth", {
    state: () => ({ 
        authUser: null
    }),
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        async signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            const res = await signInWithPopup(getAuth(), provider)
                                then((res) => {
                                    console.log(res);
                                });
        }
    }
});