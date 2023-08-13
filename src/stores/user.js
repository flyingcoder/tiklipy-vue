import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useUserStore = defineStore("user", {
  state: () => ({
    uid: null,
    hasSubscription: false,
    lessons: null,
    consultations: null,
  }),
  actions: {
    setUserId(uid) {
      this.uid = uid;
    },
    setUserSubscription(hasSubscription) {
      this.hasSubscription = hasSubscription;
    },
    async stripePay(selectedPrice) {
      const params = {
        price: selectedPrice,
        success_url: window.location.origin,
        cancel_url: window.location.origin 
      };

      const doc = await addDoc(
        collection( getFirestore(), "customers", this.uid, "checkout_sessions" ), 
        params );
      
      onSnapshot(doc, (snap) => {
          const { error, url } = snap.data();
          if(error) {
            console.error("Stripe pay snapshot error:", error);
            useAuthStore.logout();
          }
          if(url) window.location.assign(url);
      });
    },
    setLessons(lessons) {
      this.lessons = lessons;
    },
    setConsultations(consults) {
      this.consultations = consults;
    }
  },
});