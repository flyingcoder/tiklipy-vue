import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
import AuthModel from "../models/Auth";

const auth = new AuthModel();
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { top: 0 };
    }
  }
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = await auth.fireAuthState();
    if(user) {
      if(to.meta.adminOnly) {
        const isAdmin = await auth.checkIfAdmin(user.uid);
        if(isAdmin) next();
        else next(false);
      } else {
        next();
      }
    } else {
      next('/login');
    }
  } else {
      next();
  }
});

export default router;
