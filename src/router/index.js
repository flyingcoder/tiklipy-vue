import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

//make hook async to wait for the user to load
router.beforeEach(async (to, from, next) =>  {
    if(to.matched.some((record) => record.meta.requiresAuth )) {
        if(await getCurrentUser())
            next();
        
        next("/login");
    } else {
        next();
    }
});
//request user from firebase local state
const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}

export default router;