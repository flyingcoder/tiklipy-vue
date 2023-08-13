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
  },
});