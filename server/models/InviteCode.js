import admin from "../plugins/firebase-handler.js";
import { getFirestore } from "firebase-admin/firestore";

class InviteCodeModel {
    constructor() {
        const db = getFirestore(admin);
        this.col = db.collection('invitationCodes');
    }

    async verifyCode(code) {
        return true;
    }

    async addCodeDocuments(codes) {
        try {
            await codes.forEach( async (code) => {
                            await this.col.add(code);
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
                    
                })
            })

        } catch (error) {
            
        }
    }
}

export default InviteCodeModel;