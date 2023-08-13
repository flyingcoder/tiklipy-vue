import { getApps, initializeApp } from "firebase/app";
import { 
    getAuth, 
    onAuthStateChanged
} from "firebase/auth";
import { 
    getFirestore,
    collection,
    query,
    where,
    getDocs
  } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const apps = getApps();
const firebaseApp = !apps.length ? initializeApp(firebaseConfig) : apps[0];
const Auth = getAuth(firebaseApp);

//request user from firebase local state
const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            Auth,
            async (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
};

const fetchSubscription = (uid) => {

    const subsRef = collection(
        getFirestore(),
        "customers", 
        uid,
        "subscriptions"
    );

    const subsQuery = query(
        subsRef,
        where("status", "in", ["trialing", "active", "past_due", "unpaid"])
    );

    return getDocs(subsQuery);
};

export { 
    firebaseApp, 
    Auth, 
    getCurrentUser, 
    fetchSubscription
};