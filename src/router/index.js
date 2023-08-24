import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
import AuthModel from "../models/Auth";

const auth = new AuthModel();
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  // scrollBehavior(to, from, savedPosition) {
  //     if (to.hash) {
  //         return { el: to.hash, behavior: 'smooth' };
  //     } else if (savedPosition) {
  //         return savedPosition;
  //     } else {
  //         return { top: 0 };
  //     }
  // }
});

router.beforeEach(async (to, from, next) => {
  const user = await auth.fireAuthState();
  if (to.meta.requiresAuth && to.meta.requiresAdmin) {
      if (user?.isAdmin) next();
      else next(false);
  } else if (to.meta.requiresAuth) {
      if (user) next();
      else next('/login');
  } else {
      next();
  }
});

export default router;
