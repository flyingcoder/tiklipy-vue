import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth.js";
import routes from "./routes.js";
import { Swal, swal } from "sweetalert2/dist/sweetalert2.js";

const router = createRouter({
    history:createWebHistory(),
    routes: routes
});

//make hook async to wait for the user to load
router.beforeEach((to, from, next) =>  {
    if(to.matched.some((record) => record.meta.requiresAuth )) {
        const authStore = useAuthStore();
        let subscribe = authStore.authSubscription;
        let user = authStore.authUser;
        if(subscribe) {
            next();
        } else {
            if(user) {
                authStore.logout();
                console.log('pricing')
                next('/pricing');
            } else {
                console.log('this')
                next('login')  
            }
        }
    } else {
        next();
    }
});

export default router;