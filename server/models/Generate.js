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

    async consultation(prompt) {
        try {
            const param = { messages: [ { role:'system',
                      content:"You are a helpfull assistant. Use the following principles in responding to user:\n\n- You can write and execute Python code by enclosing it in triple backticks. Use this to perfom calculations.\n- Give grammar correction if user grammar is wrong.\n- Always give consize, factual answer.\n- Suggest multimedia resource, teaching materials and fun activities.\n- Suggest adaptive teaching strategies about the topic asked.\n- Actively listen to user responses, paying careful attention to their underlying thought processes and making a genuine effort to understand their perspectives.\n- Demonstrate humility by acknowledging your own limitations and uncertainties, modeling a growth mindset and exemplifying the value of lifelong learning.", 
                    },
                    prompt
                ],
                ...this.options
            };

            const pass = await this.starCredit.checkPrompt(prompt);
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