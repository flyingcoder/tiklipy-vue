import { auth } from "../plugins/firebase"
import { useUserStore } from "../stores/user";
import { getFirestore,  } from "firebase/firestore";

export default async function subscriptionCheck( to, from, next) {
    const user = auth.currentUser;
    if(user) {
        const userStore = useUserStore();
        authStore.setUserToLocal(user);
        const hasSubscription = await checkSubscriptionStatus(user.uid);
        if(!hasSubscription) {
            await auth.logout();
            next('/pricing');
        }
        next();  
    } else {
        next("/login");
    }
}

async function checkSubscriptionStatus(userId) {

}