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
    if(!firebaseInit) {
      onAuthStateChanged(auth, async (user) => {
        const authStore = useAuthStore();
        const userStore = useUserStore();
        
        if(user) {
          const appUser = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
          }
          authStore.setUserToLocal(appUser);
          userStore.setUser(user);
          const hasSubscription = await checkSubscriptionStatus(user.uid);
          userStore.setUserSubscription(hasSubscription);
        }
      });
      if(!firebaseInit)
        firebaseInit = true;
      next();
    } else {
      if(to.meta.requiresAuth) {
        await subscriptionCheck(to, from, next);
      } else {
        next();
      }
    }
});

export default router;