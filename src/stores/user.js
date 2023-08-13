import { collection, getFirestore } from "firebase/firestore";
import { defineStore } from "pinia";

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
    stripePay(price) {
      const db = getFirestore();
      const setCol = collection(db, )
    },
    setLessons(lessons) {
      this.lessons = lessons;
    },
    setConsultations(consults) {
      this.consultations = consults;
    }
  },
});