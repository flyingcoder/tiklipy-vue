import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";
import dayjs from "dayjs";

class InviteCodeModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('invitationCodes');
    }

    async verifyCode(code) {
        const queryRef = this.col.where('code', '==', code);
        const snaps = await queryRef.get().then((snaps) => snaps );
        if(!snaps.empty) return true;
        else return false;
    }

    async addCodeDocuments(codes) {
        try {
            const now = dayjs();
            await codes.forEach( async (code) => {
                const data = {
                    code: code,
                    expired_at: now.add(2, 'week').format(),
                    email: '',
                    status: 'available'
                }
                await this.col.add(data);
            });
            return true;
        } catch (error) {
            console.error('Error in adding code document:', error);
            return false;
        }
    }

    async getCodeCollection() {
        try {
            let codes = [];
            await this.col.get().then((snap) => {
                snap.forEach((doc) => {
                    codes.push(doc.data());
                })
            })
            return codes;
        } catch (error) {
            console.error("Error on get invite code:", error);
            return false;
        }
    }
}

export default InviteCodeModel;