import { initializeApp, cert } from "firebase-admin/app";
import 'dotenv/config';

export default initializeApp({
    credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
    projectId: process.env.VITE_FIREBASE_PROJECTID,
});


