import { defineStore } from "pinia";

export const useLoaderStore = defineStore("loader", {
    state: () => ({ 
        isLoading: false,
    }),
    getters: {
        loading: (state) => state.isLoading
    },
    actions: {
        toggle() {
            this.isLoading = !this.isLoading;
        }
    }
});