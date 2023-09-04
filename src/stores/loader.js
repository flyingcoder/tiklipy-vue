import { defineStore } from "pinia";
import party from "party-js";

export const useLoaderStore = defineStore("loader", {
    state: () => ({ 
        isLoading: false,
        close: false,
    }),
    getters: {
        loading: (state) => state.isLoading
    },
    actions: {
        toggle() {
            this.isLoading = !this.isLoading;
        },
        forceClose() {
            this.close = true;
        },
        startConfetti() {
            const targetElement = document.getElementById('navigation')
            if (targetElement) {
                party.confetti(targetElement, {
                    count: party.variation.range(60, 80)
                });
            }
        }
    }
});