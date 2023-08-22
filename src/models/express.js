import axios from "../plugins/axios";
import { auth } from "../plugins/firebase";

class ExpressModel {
    generateResource(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/generate', data)
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getTestimonials() {
        try {
            return axios.get('/routes/api/testimonials')
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

export default ExpressModel;