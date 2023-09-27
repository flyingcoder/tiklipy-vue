import { db } from "../plugins/firebase";
import { collection, getFirestore, addDoc, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    starCredits: 0,
    uid: null,
    accessToken: null,
    hasSubscription: false,
    lessons: null,
  }),
  actions: {
    async initStar() {
      try {
        const userDocRef = collection(db, 'customers',  this.uid);
        await userDocRef.set({ starCredits: 0 }, { merge: true });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    setUser(user) {
      this.starCredits = user.starCredits;
      this.uid = user.uid;
      this.accessToken = user.accessToken;
    },
    setUserSubscription(hasSubscription) {
      this.hasSubscription = hasSubscription;
    },
    async stripePay(selectedPrice, id) {
      const params = {
        price: selectedPrice,
        success_url: window.location.origin + '/thank-you',
        cancel_url: window.location.origin + '/payment-cancel'
      };
      console.log(id);
      const checkoutSessionsCollection = collection(getFirestore(), "customers", id, "checkout_sessions");
      const docRef = await addDoc(checkoutSessionsCollection, params);
      
      return docRef;
    },
    setLessons(lessons) {
      this.lessons = lessons;
    },
    setConsultations(consults) {
      this.consultations = consults;
    }
  },
});