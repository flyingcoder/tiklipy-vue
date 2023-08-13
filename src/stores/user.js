import { collection, getFirestore } from "firebase/firestore";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    uid: null,
    accessToken: null,
    hasSubscription: false,
    lessons: null,
    consultations: null,
  }),
  actions: {
    setUser(user) {
      this.uid = user.uid;
      this.accessToken = this.accessToken;
    },
    setUserSubscription(hasSubscription) {
      this.hasSubscription = hasSubscription;
    },
    async stripePay(selectedPrice) {
      const params = {
        price: selectedPrice,
        success_url: window.location.origin + '/thank-you',
        cancel_url: window.location.origin + '/payment-cancel'
      };

      const doc = await addDoc(
        collection( getFirestore(), "customers", this.uid, "checkout_sessions" ), 
        params );
      
      return doc;
    },
    setLessons(lessons) {
      this.lessons = lessons;
    },
    setConsultations(consults) {
      this.consultations = consults;
    }
  },
});