import axios from "../plugins/axios";
import { auth } from "../plugins/firebase";

class expressModel {
    constructor() {
        axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
    }

    async generateLesson(instruction) {
        try {
            const params = [{role: 'user',content: instruction}];
            let lesson = null;
            await axios.post('/api/v1/lesson', params)
                .then((completion) => { lesson = completion.data.message })
            return lesson;
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }
}

export default expressModel;