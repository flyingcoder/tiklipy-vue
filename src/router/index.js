import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser, Auth } from "../plugins/firebase";
import routes from "./routes.js";


const router = createRouter({
    history:createWebHistory(),
    routes: routes
});

//make hook async to wait for the user to load
router.beforeEach(async (to, from, next) =>  {
    if(to.matched.some((record) => record.meta.requiresAuth )) {
        let user = await getCurrentUser();
        if(user) {
            if(user.subscription.status === 'status') {
                next();
            } else {
                next("pricing");
            }
        } else {
            next("login");
        }
    } else {
        next();
    }
});

export default router;