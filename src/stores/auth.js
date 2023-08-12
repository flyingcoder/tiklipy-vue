import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";
import Swal from "sweetalert2";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
import { getAuth, 
    signInWithPopup, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword } from "firebase/auth";

const router = useRouter();

export const useAuthStore = defineStore("auth", {
    state: () => ({ 
        authUser: null,
        authSubscription: null,
        authError: null,
        authSuccess: null,
        price: null,
    }),
    getters: {
        user: (state) => state.authUser
    },
    actions: {
        selectedPlan(price) {
            this.price = price
        },
        async subscribe() {
            const params = {
                price: this.price,
                success_url: window.location.origin,
                cancel_url: window.location.origin };

            const doc = await addDoc(
                collection( getFirestore(), "customers", this.authUser.uid, "checkout_sessions" ), 
                params );

            onSnapshot(doc, (snap) => {
                const { error, url } = snap.data();
                if(error) {
                    this.authError = "An error occored: ${error.message}";
                    Swal.fire('Oops!', this.authError, 'error');
                }
                if(url) window.location.assign(url);
            });
        },
        async register(email, password) {
            await createUserWithEmailAndPassword(getAuth(), email, password)
                    .then((res) => {
                        this.authUser = res.user
                        this.authSuccess = "It's a start of something new!"
                        Swal.fire('Good job!', this.authSuccess, 'success');
                    })
                    .catch(() => {
                        this.authError = "Invalid username or password!"
                        Swal.fire('Oops!', this.authError, 'error');
                    })

        },
        async login(email, password) {
            await signInWithEmailAndPassword(getAuth(), email, password)
                    .then((res) => {
                        this.authUser = res.user
                        this.authSuccess = "Log-in successfully!"
                        Swal.fire('Yepey!', this.authSuccess, 'success');
                    })
                    .catch(() => {
                        this.authError = "Invalid username or password!"
                        Swal.fire('Oops!', this.authError, 'error');
                    })
        },
        async loginVia(provider) {
            await signInWithPopup(getAuth(), provider)
                        .then((res) => {
                            this.authUser = res.user
                            this.authSuccess = "You did great!"
                            Swal.fire('Yepey!', this.authSuccess, 'success');
                        })
                        .catch(() => {
                            this.authError = "Something went wrong! Try again later."
                            Swal.fire('Oops!', this.authError, 'error');
                        })
        }
    }
});