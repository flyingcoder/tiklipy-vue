import axios from "../plugins/axios";
import { auth } from "../plugins/firebase";

class ExpressModel {
    generateLesson(instruction) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            const params = {role: 'user', content: instruction};
            return axios.post('/api/v1/generate/lesson-plan', params)
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default ExpressModel;