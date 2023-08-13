import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    hasSubscription: false,
    lessons: null,
    consultations: null,
  }),
  actions: {
    setUserSubscription(hasSubscription) {
      this.hasSubscription = hasSubscription;
    },
    setLessons(lessons) {
        this.lessons = lessons;
    },
    setConsultations(consults) {
        this.consultations = consults;
    }
  },
});