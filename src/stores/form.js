import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
    state: () => ({ 
        title: '',
        descriptions: '',
        promtExample: '',
        category: '',
        inputs: {
            topic: {
                value: '',
                placeholder: 'State a general topic or paste an official Department of Education curriculum standard.'
            },
            subject: {
                label: 'Subject',
                value: '',
                placeholder: 'testing'
            }
        },
    }),
    actions: {
        setFormDetails(details) {
            this.title = details.title;
            this.descriptions = details.descriptions;
            this.promtExample = details.promtExample;
            this.category = details.category;
            this.inputs = details.inputs;
        }
    }
});