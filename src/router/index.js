import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "@/plugins/firebase";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        { 
            path: "/",
            name: 'home', 
            component: () => import("../views/guest/Home.vue") 
        },{ 
            path: "/pricing",
            name: 'pricing', 
            component: () => import("../views/guest/Pricing.vue") 
        },{ 
            path: "/dashboards",
            name: 'dashboards', 
            component: () => import("../views/guest/Dashboard.vue") 
        },
        { 
            path: "/consult",
            name: 'consult', 
            component: () => import("../views/members/Consult.vue") 
        },{ 
            path: "/blog",
            name: 'blog', 
            component: () => import("../views/guest/Blog.vue") 
        },{ 
            path: "/sign-up", 
            name: 'sign-up',
            component: () => import("../views/sign/Up.vue") 
        },{ 
            path:"/sign-in",
            name: 'sign-in',
            component: () => import('../views/sign/In.vue') 
        },{ 
            path:"/dashboard",
            name: 'dashboard',
            component: () => import('../views/members/Dashboard.vue'),
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
        else
            next("sign-in");
    } else {
        next();
    }
});

export default router;