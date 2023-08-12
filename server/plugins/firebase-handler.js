import { initializeApp, applicationDefault } from "firebase-admin/app";


const firebase = initializeApp({
                    credential: applicationDefault(),
                    projectId: process.env.VITE_FIREBASE_PROJECTID,
                });

export default firebase;

