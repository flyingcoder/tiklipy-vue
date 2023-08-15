import { getFirestore } from "firebase-admin/firestore";
import openai from './../plugins/openai-handler.js';

const db = getFirestore();

export default async (req, res) => {
    try {
        const param = { model: "gpt-3.5-turbo",  messages: req.body };

        const chatCompletion = await openai.createChatCompletion(param)
                                    .then(res => res.data);

        res.json(chatCompletion.choices.pop());
    } catch (error) {
        res.json({'error': error});
    }
};