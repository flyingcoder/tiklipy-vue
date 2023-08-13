import { collection, getFirestore, addDoc, getDocs } from "firebase/firestore";
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
    async fetchConsultations() {
      try {
        const docRef = collection( getFirestore(), "customers", this.uid, "consultations" );
        const docSnaps = await getDocs(docRef);
        const consults = [];
        console.log(docSnaps.exists())
        docSnaps.forEach((doc) => { consults.push(doc.data()) });
        return consults;
      } catch(error) {
        console.log(error)
        return false;
      }
      
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