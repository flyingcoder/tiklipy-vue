import axios from "../plugins/axios";
import { auth } from "../plugins/firebase";
import dayjs from "dayjs";

class ExpressModel {

    getSystemPrompt(id) {
        try {
            return axios.post('/api/v1/resources/system-prompt', id);
        } catch (error) {
            constole.log(error);
            return true;
        }
    }

    getStripeProduct() {
        try {
            return axios.get('/api/v1/stripes/products');
        } catch (error) {
            console.log(error);
            return true;
        }
    }

    generateResource(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/resources/generate', data);
        } catch (error) {
            console.log("Error generating resource");
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

    updatePrompt(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/tools/update', data);
        } catch (error) {   
            console.log(error);
            return false;
        }
    }

    delTool(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/tools/delete', data);
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

    getNewsletter() {
        try {
            return axios.get('/api/v1/newsletters');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getInitiation() {
        try {
            return axios.get('/api/v1/helps/initiation');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getKnowHow() {
        try {
            return axios.get('/api/v1/helps/knowhow');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getEthics() {
        try {
            return axios.get('/api/v1/helps/ethics');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getApplications() {
        try {
            return axios.get('/api/v1/helps/applications');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getAccountancy() {
        try {
            return axios.get('/api/v1/helps/accountancy');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getAssistance() {
        try {
            return axios.get('/api/v1/helps/assistance');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getVisuals() {
        try {
            return axios.get('/api/v1/helps/visuals');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getHelpData(slug) {
        try {
            return axios.get(`/api/v1/helps/helps?slug=${slug}`);
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

    addHelp(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/helps', data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    getHelp() {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.get('/api/v1/helps');
        } catch (error) {   
            console.log(error);
            return false;
        }
    }

    addBlog(formData) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/posts', formData);
            // {headers: { 'Content-Type': 'multipart/form-data' }}
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    addContact(formData) {
        try {
            return axios.post('/api/v1/contacts', formData);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getReviews() {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.get('/api/v1/reviews');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    updateTestimonial(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.put('/api/v1/testimonials/update', data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async addPrompt(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/prompts', data);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getPosts() {
        try { 
            return axios.get('/api/v1/posts');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getPostBySlug(slug) {
        try {
            return axios.get(`/api/v1/posts/post?slug=${slug}`);
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

export default ExpressModel;