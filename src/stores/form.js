import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
    state: () => ({ 
        title: '',
        description: '',
        promptExample: '',
        systemPrompt: '',
        category: '',
        icon:'',
        inputs: {
            highlights: {
                value: '',
                placeholder: 'e.g. Upgraded software in computer lab for better functionality and implemented new security measures to protect lab equipment.',
                inputType: 'textarea',
                label: 'Main Highlights',
            }
        },
    }),
    actions: {
        setFormDetails(details) {
            this.title = details.title;
            this.description = details.description;
            this.promptExample = details.promptExample;
            this.category = details.category;
            this.icon = details.icon;
            this.inputs = details.inputs;
            this.systemPrompt = details.systemPrompt;
        },
        joinInputs() {
            const sentenceParts = Object.keys
                (this.inputs).map((key) => {
                    return `${key}: "${this.inputs[key].value}"`;
                }
            );
            const enclosed = sentenceParts.join(', ');
            return enclosed;
        },
        processInstruction() {
            const mergeText = this.joinInputs();
            return [
                { role: 'system', content: this.systemPrompt },
                { role: 'user', content:`${mergeText}` }
            ];
        }
    }
});