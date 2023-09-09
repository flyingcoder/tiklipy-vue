import openai from '../plugins/openai-handler.js';
import StarCreditModel from './StarCredit.js';
import admin from '../plugins/firebase-handler.js';
import { getFirestore } from 'firebase-admin/firestore';

class generateModel {
    constructor() {
        this.options = {
            model: "gpt-3.5-turbo",
            temperature: 0,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        };
        const db = getFirestore(admin);
        this.SystemColRef = db.collection('SystemPrompts');
        this.starCredit = new StarCreditModel();
    }

    async injectInstruction(obj) {
        if(obj.role === 'system') {
            const docRef = this.SystemColRef.doc(obj.content);
            const systemPrompt = await docRef.get().then((doc) => doc.data());
            return { role: obj.role, content: systemPrompt.content};
        }
        return obj;
    }

    async global(data) {
        try {
            // const prompt = await Promise.all(data.map(obj => this.injectInstruction(obj)));
            const param = { 
                messages: data,
                max_tokens: 800,
                ...this.options
            };
            const chatCompletion = await openai.createChatCompletion(param)
                                        .then(res => res.data);
            //this.starCredit.manager(chatCompletion);
            return chatCompletion;
        } catch (error) {
            console.error("Error generating resource", error);
            return false;
        }
    }

    
    async consultation(data) {
        try {
            const param = { 
                    messages: [ { 
                        role:'system',
                        content: data.systemPropmt, 
                    },
                    {
                        rolte: 'user',
                        content: data.userPrompt
                    }
                ],
                ...this.options
            };

            const pass = this.starCredit.checkPrompt(prompt);
            if(pass) {
                const chatCompletion = await openai.createChatCompletion(param)
                                        .then(res => res.data);
            
                this.starCredit.manager(chatCompletion);

                return chatCompletion.choices.pop();
            } else {
                return {'error': 'Prompt message limit exceed'};
            }
        } catch (error) {
            console.log(error);
            return {'error': error};
        }
    }


    async lessonPlan(prompt) {
        try {
            const param = { 
                messages: [
                    { 
                        role:'system',
                        content:"You will be provided with a lesson plan topic, grade level, subject and additional notes. You will write the lesson plan and come up with examples that show common student errors. Add fun and engaging activities and some tips on delivering the lesson. Don't for get to use ** for important details like heading or titles."
                    },
                    prompt
                ],
                max_tokens: 800,
                ...this.options
            };
            const chatCompletion = await openai.createChatCompletion(param)
                                        .then(res => res.data);
            this.starCredit.manager(chatCompletion);
            return chatCompletion.choices.pop();
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default generateModel;