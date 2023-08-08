import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "../plugins/firebase";
import routes from "./routes.js";

const router = createRouter({
    history:createWebHistory(),
    routes: routes
});

//make hook async to wait for the user to load
router.beforeEach(async (to, from, next) =>  {
    if(to.matched.some((record) => record.meta.requiresAuth )) {
        if(await getCurrentUser())
            next();
        else
            next("login");
    } else {
        next();
    }
});

export default router;