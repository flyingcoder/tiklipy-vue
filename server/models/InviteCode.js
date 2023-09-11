import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";
import dayjs from "dayjs";
import pino from '../logger.js';

class InviteCodeModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('invitationCodes');
    }

    async useCode(load) {
        try {
            const queryRef = this.col.where('code', '==', load.code);
            await queryRef.get()
                .then((snaps) => {
                    if(!snaps.empty) {
                        snaps.forEach(async (doc) => {
                            const done = await doc.ref.update({ ['email']: load.email, ['status']: 'used' })
                                            .then(() => { return true; }).catch(() => { return false });
                        })
                    } else { return false; }
                }).catch((error) => { console.error("Error on updating code document:", error); return false; })
            return true;
        } catch (error) {
            console.error('Error on invite code mode:', error);
            return false;
        }
    }

    async verifyCode(data) {
        try {
            const queryRef = this.col.where('code', '==', data);
            const snaps = await queryRef.get();
            const code = snaps.docs.map((snap) => ({ ...snap.data() }));
            return code;
        } catch (error) {
            console.error("Error in verifying code:", error);
            return false;
        }
    }

    async saveCode(codeData) {
        try {
            const docRef = this.col.doc(codeData.id);
            const updateData = {
                code: codeData.code,
            };
            await docRef.update(updateData);
            return true;
        } catch (error) {
            console.error('Error in updating code document:', error);
            return false;
        }
    }    

    async deleteCode(code) {
        try {
            const docRef = await this.col.doc(code.code);
            await docRef.delete();
    
            console.log('Document deleted successfully');
            return true;
        } catch (error) {
            console.error('Error in deleting code document:', error);
            return false;
        }
    }

    async addCodeDocuments(codes) {
        try {
            const now = dayjs();
            await codes.forEach( async (code) => {
                const data = { code: code,expired_at: now.add(2, 'week').format(),email: '',status: 'available'}
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
            const snaps = await this.col.orderBy('status', 'asc').get();
            const codes = snaps.docs.map((snap) => ({
                id: snap.id,
                ...snap.data() 
            }));
            return codes;
        } catch (error) {
            pino.logger.error("Error fetching invite codes " + error);
            return [];
        }
    }
}

export default InviteCodeModel;