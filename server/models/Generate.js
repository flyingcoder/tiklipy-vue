import openai from '../plugins/openai-handler.js';
import StarCreditModel from './StarCredit.js';

class generateModel {
    constructor() {
        this.options = {
            model: "gpt-3.5-turbo",
            temperature: 0,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        };

        this.starCredit = new StarCreditModel();
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