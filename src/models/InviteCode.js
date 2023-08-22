import axios from "../plugins/axios";
import { auth } from "../plugins/firebase";

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

    async addCodes(codes) {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            const msg = axios.post('/api/v1/auth/codes', { codes: codes })
                        .then((pass) => pass.data);
            return msg;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    getCodes() {
        try {
            axios.defaults.headers.common['Authorization'] = auth?.currentUser?.accessToken;
            return axios.get('/api/v1/auth/codes');
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

export default InviteCodeModel;