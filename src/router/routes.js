import {
    Dashboard, Account, Consult, Lessons, Lesson, Visuals, Visual,
    Assesments, Assesment, Quizes, Homeworks, Tests, Home, Help,
    Blogs, Blog, About, Pricing, Features, Terms, Privacy, License, 
    MembersLayout, GuestsLayout, Projects, Activities, GenerateForm, 
    Login, SendGift
} from './components';

const routes = [
    //main pages routes
    { 
        path: '/', 
        component: GuestsLayout,
        children: [
            { path: '/', name: 'home', component: Home },
            { path: '/about', name: 'about', component: About },
            { path: '/help', name: 'help', component: Help },
            { path: '/blogs', name: 'blogs', component: Blogs },
            { path: '/blogs/:slug', name: 'blog', component: Blog },
            { path: '/pricing', name: 'pricing', component: Pricing },
            { path: '/features', name: 'features', component: Features },
            { path: '/legal/license', name: 'license', component: License },
            { path: '/legal/terms', name: 'terms', component: Terms },
            { path: '/legal/privacy', name: 'privacy', component: Privacy },
            { path: '/send-gifts', name: 'gifts', component: SendGift }
        ]
    },{ 
        path: "/members", component: MembersLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '/dash', name: 'dashboard', component: Dashboard },
            { path: '/account', name: 'account', component: Account },
            { path: '/consult', name: 'consult', component: Consult },
            { path: '/assesments', name: 'assesments', component: Assesments },
            { path: '/assesments/:type/:id', name: 'assesment', component: Assesment },
            { path: '/lessons', name: 'lessons', component: Lessons },
            { path: '/lessons/:id', name: 'lesson', component: Lesson },
            { path: '/quizes', name: 'quizes', component: Quizes },
            { path: '/homeworks', name: 'homeworks', component: Homeworks },
            { path: '/tests', name: 'tests', component: Tests },
            { path: '/visuals', name: 'visuals', component: Visuals },
            { path: '/visuals/:id', name: 'visual', component: Visual },
            { path: '/projects', name: 'projects', component: Projects },
            { path: '/activities', name: 'activities', component: Activities },
            { path: '/generate-form', name: 'generate', component: GenerateForm },
        ],
    },
    { path: '/login', name: 'login', component: Login },
];

export default routes;