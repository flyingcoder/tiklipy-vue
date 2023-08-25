import axios from "../plugins/axios";
import { auth } from "../plugins/firebase";
import dayjs from "dayjs";

class ExpressModel {

    generateResource(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/generate', data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getTestimonials() {
        try {
            return axios.get('/api/v1/testimonials');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getTools() {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.get('/api/v1/tools');
        } catch (error) {   
            console.log(error);
            return false;
        }
    }

    getFeatures() {
        try {
            return axios.get('/api/v1/features');
        } catch (error) {   
            console.log(error);
            return false;
        }
    }

    addNewsletter(data) {
        try {
            const requestData = {
                email: data,
                dateCreated: dayjs().format(),
            };
            return axios.post('/api/v1/newsletters', requestData);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    suggestTools(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/suggest-tools', data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    addReviews(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/reviews', data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    addBlog(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/posts', data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

export default ExpressModel;