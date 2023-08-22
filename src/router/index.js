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

router.beforeEach((to, from, next) => {
    if(!firebaseInit) {
      onAuthStateChanged(auth, (user) => {
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
          //await userStore.initStar();
        }
      });
      if(!firebaseInit) {
        firebaseInit = true;
        next();
      } else {
        next('/')
      }
    } else {
      if(to.meta.requiresAuth) {
        const authStore = useAuthStore();
        if(authStore?.user || auth?.currentUser) {
          if(to.meta.requiresAdmin) {
            if(auth?.currentUser?.isAdmin) {
              next()
            } else {
              next('/')
            }
          } else {
            next();
          }
        } else {
          next('/login');
        }
      } else {
        next();
      }
    }
});

export default router;