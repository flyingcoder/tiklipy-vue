import { defineStore } from "pinia";

export const useGenerateStore = defineStore("generate", {
    state: () => ({ 
        selectedInputs: null,
    }),
    actions: {
        toggle(data) {
            this.selectedInputs = data;
            console.log(this.selectedInputs);
        }
    }
});