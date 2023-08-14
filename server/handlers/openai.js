import openai from './../plugins/openai-handler.js';

class generateModel {
    constructor() {
        this.options = {
            model: "gpt-3.5-turbo",
            temperature: 0,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        };
    }

    async lessonPlan(req, res) {
        try {
            const param = { 
                messages: req.body,
                ...this.options
            };
    
            const chatCompletion = await openai.createChatCompletion(param)
                                        .then(res => res.data);
    
            return chatCompletion.choices.pop();
        } catch (error) {
            console.log(error);
            return {'error': error};
        }
    }
}

export default generateModel;