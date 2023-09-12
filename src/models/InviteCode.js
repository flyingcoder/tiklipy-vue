import axios from "../plugins/axios";
import { auth } from "../plugins/firebase";
import { useAuthStore } from "../stores/auth";

class InviteCodeModel {
    async checkInviteCode(code) {
        try {
            const check = await axios.post('/api/v1/auth/verify-code', { code: code })
                                     .then((pass) => pass.data );
            return check.pass;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async useCode(code) {
        const authStore = useAuthStore();
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return await axios.put('/api/v1/codes', { code: code, email: authStore.user.email })
                              .then((res) => res.data.done );
        } catch (error) {
            console.log(error);
            return false;
        }

    }

    async deleteCode(code) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.post('/api/v1/codes/delete', code)
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async addCodes(codes) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            const msg = await axios.post('/api/v1/codes', { codes: codes })
                                   .then((pass) => pass.data);
            return msg;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async saveCode(data) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            const msg = await axios.post('/api/v1/codes/save', data)
            return msg;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getCodes() {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.get('/api/v1/codes');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

export default InviteCodeModel;