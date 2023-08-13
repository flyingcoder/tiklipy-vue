import { checkSubscriptionStatus, subscriptionCheck } from "../middleware/subscriptionCheck";
import { createRouter, createWebHistory } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";
import { auth } from "../plugins/firebase";
import routes from "./routes.js";

const router = createRouter({
    history:createWebHistory(),
    routes: routes
});

let firebaseInit = false;

router.beforeEach(async (to, from, next) => {
    console.log(firebaseInit);
    if(!firebaseInit) {
      onAuthStateChanged(auth, async (user) => {
        const authStore = useAuthStore();
        const userStore = useUserStore();
        
        if(user) {
          const hasSubscription = await checkSubscriptionStatus(user.uid);
          authStore.setUserToLocal(user);
          userStore.setUserId(user.uid);
          userStore.setUserSubscription(hasSubscription);
        }
      });
      if(!firebaseInit)
        firebaseInit = true;
      next();
      console.log(firebaseInit)
    } else {
      if(to.meta.requiresAuth) {
        await subscriptionCheck(to, from, next);
      } else {
        next();
      }
    }
});

export default router;