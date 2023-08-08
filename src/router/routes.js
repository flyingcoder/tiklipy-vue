import {
    Dashboard, Account, Consult, Lessons, Lesson, Visuals, Visual,
    Assesments, Assesment, Quizes, Homeworks, Tests, Home, Help,
    Blogs, Blog, About, Pricing, Features,
} from './components';

const routes = [
    { 
        path: "/members", name: 'register', component: Dashboard,
        meta: { requiresAuth: true },
        children: [
            { path: '/account', name: 'account', component: Account },
            { path: '/consult', name: 'consult', component: Consult },
            { path: '/lessons', name: 'lessons', component: Lessons },
            { path: '/lessons/:id', name: 'lesson', component: Lesson },
            { path: '/assesments', name: 'assesments', component: Assesments },
            { path: '/assesments/:type/:id', name: 'assesment', component: Assesment },
            { path: '/quizes', name: 'quizes', component: Quizes },
            { path: '/homeworks', name: 'homeworks', component: Homeworks },
            { path: '/tests', name: 'tests', component: Tests },
            { path: '/visuals', name: 'visuals', component: Visuals },
            { path: '/visuals/:id', name: 'visual', component: Visual },
        ],
    },
    //main pages routes
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/help', name: 'help', component: Help },
    { path: '/blogs', name: 'blogs', component: Blogs },
    { path: '/blogs/:slug', name: 'blog', component: Blog },
    { path: '/terms', name: 'terms', component: Terms },
    { path: '/privacy', name: 'privacy', component: Privacy },
    { path: '/pricing', name: 'pricing', component: Pricing },
    { path: '/features', name: 'features', component: Features },
];

export default routes;