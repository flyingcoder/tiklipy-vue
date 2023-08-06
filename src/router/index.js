import { createRouter, createWebHistory } from "vue-router";
import { getAuth } from "firebase/auth";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        { path: "/", component: () => import("../views/Home.vue") },
        { path: "/register", component: () => import("../views/Register.vue") },
        { path:"/login", component: () => import('../views/Login.vue') },
        { 
            path:"/dashboard", 
            component: () => import('../views/Dashboard.vue'),
            meta: {
                requiresAuth: true
            } 
        },
    ],
});

router.beforeEach((to, from, next) =>  {
    if(to.matched.some((record) => record.meta.requiresAuth )) {
        if(getAuth().currentUser)
            next();
        
        next("/login");
    } else {
        next();
    }
});

export default router;