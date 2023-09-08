import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
    state: () => ({ 
        title: '',
        type: '',
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
        tags: [
            { name: 'featured', desc: ''},
            { name: 'lessons', desc: 'Effortlessly generate a lesson plan tailored to your teaching style.'},
            { name: 'assessments', desc: 'Explore a wide range of assessments and generate it with ease.'},
            { name: 'tools', desc: 'Empowering Efficiency: Unleashing the Potential of Essential Tools.'},
            { name: 'explore', desc: 'Unveiling the Unknown: Embarking on Journeys of Exploration'},
            { name: 'manage', desc: 'Navigating Success: Mastering the Art of Effective Management'},
            { name: 'organize', desc: 'Harmonize and Systematize: The Essence of Effective Organization'},
            { name: 'modify', desc: 'Crafting Change: The Art of Skillful Modification'},
            { name: 'write', desc: 'Effortlessly Generate Diverse Content with Personalized Style and Substance.'},
        ],
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
            this.type = details.type;
        },
        joinInputs() {
            const sentenceParts = Object.keys
                (this.inputs).map((key) => {
                    return `${key}=${this.inputs[key].value}`;
                }
            );
            const enclosed = sentenceParts.join(', ');
            return enclosed;
        },
        processInstruction() {
            const mergeText = this.joinInputs();
            return [
                { role: 'system', content: this.systemPrompt.content },
                { role: 'user', content:`${mergeText}` }
            ];
        }
    }
});