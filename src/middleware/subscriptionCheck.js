import { auth } from "../plugins/firebase"
import { useAuthStore } from "../stores/auth";
import { getFirestore, collection, query, getDocs, where  } from "firebase/firestore";

const subscriptionCheck = async ( to, from, next) => {
    const user = auth.currentUser;
    if(user) {
        const authStore = useAuthStore();
        if(!authStore.user) authStore.setUserToLocal(user);
        const hasSubscription = await checkSubscriptionStatus(user.uid);
        if(!hasSubscription) {
            next('/pricing');
        }
        next();  
    } else {
        next("/login");
    }
}

const checkSubscriptionStatus = async (userId) => {
    try {
        const db = getFirestore();
        const colRef = collection(db, "customers", userId, "subscriptions");
        const snap = await getDocs( query(colRef, where('status', '==', 'active')) );
        let subs = snap.docs.length > 0 ? snap.docs[0].data() : null;
        if(!subs) return false;  
        return false;
    } catch (error) {
        console.error("Error check stripe subscription:", error);
        return false;
    }
}

export { checkSubscriptionStatus, subscriptionCheck };