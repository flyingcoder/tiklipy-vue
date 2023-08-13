import { getFirestore } from "firebase-admin/firestore";
import openai from './../plugins/openai-handler.js';

const db = getFirestore();
const param = {
    model: "gpt-3.5-turbo",
    messages: [{
        role: 'system',
        content: 'You are a helpful virtual assistant.',
    }]
};

export default async (req, res) => {
    let uid = res.locals.currentUser.uid;

    const chatCompletion = await openai.createChatCompletion(param);

    //const lessons = db.collection('customers/'+ uid +'/subscriptions').get().then((res));


    res.json(chatCompletion);
};