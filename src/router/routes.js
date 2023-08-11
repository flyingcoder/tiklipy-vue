import {
    Dashboard, Account, Consult, Lessons, Lesson, Visuals, Visual,
    Assesments, Assesment, Quizes, Homeworks, Tests, Home, Help,
    Blogs, Blog, About, Pricing, Features, Terms, Privacy, License, 
    MembersLayout, GuestsLayout, Projects, Activities, GenerateForm, 
    Login, SendGift, FAQ, Featured
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
            { path: '/send-gifts', name: 'gifts', component: SendGift },
            { path: '/faq', name: 'faq', component:  FAQ },
            { path: '/featured', name: 'featured', component: Featured },
        ]
    },{ 
        path: "/members", component: MembersLayout,
        meta: { requiresAuth: true },
        children: [
            { path: '', name: 'dashboard', component: Dashboard, meta: { displayName: 'Dashboard', siteDescription: 'Effortlessly Generate Diverse Content with Personalized Style and Substance.' } },
            { path: 'account', name: 'account', component: Account, meta: { displayName: 'Account', siteDescription: '' } },
            { path: 'consult', name: 'consult', component: Consult, meta: { displayName: 'Consult', siteDescription: 'Personalized consulting for tailored guidance and support.' } },
            { path: 'assessments', name: 'assesments', component: Assesments, meta: { displayName: 'Assessments', siteDescription: '' } },
            { path: 'assessments/:type/:id', name: 'assesment', component: Assesment, meta: { displayName: 'Assessments', siteDescription: '' } },
            { path: 'lessons', name: 'lessons', component: Lessons, meta: { displayName: 'Lessons', siteDescription: 'Explore lessons to enhance your learning journey.' } },
            { path: 'lessons/:id', name: 'lesson', component: Lesson, meta: { displayName: 'Lessons', siteDescription: 'Explore lessons to enhance your learning journey.' } },
            { path: 'quizzes', name: 'quizes', component: Quizes, meta: { displayName: 'Quizzes', siteDescription: 'Interactive quizzes to test your knowledge.' } },
            { path: 'homeworks', name: 'homeworks', component: Homeworks, meta: { displayName: 'Homeworks', siteDescription: 'Engaging homework assignments to reinforce learning.' } },
            { path: 'tests', name: 'tests', component: Tests, meta: { displayName: 'Tests', siteDescription: 'Comprehensive assessment tests to track your progress.' } },
            { path: 'visuals', name: 'visuals', component: Visuals, meta: { displayName: 'Visuals', siteDescription: '' } },
            { path: 'visuals/:id', name: 'visual', component: Visual, meta: { displayName: 'Visuals', siteDescription: '' } },
            { path: 'projects', name: 'projects', component: Projects, meta: { displayName: 'Projects', siteDescription: 'Engaging projects to apply and enhance your skills.' } },
            { path: 'activities', name: 'activities', component: Activities, meta: { displayName: 'Activities', siteDescription: 'Interactive activities for engaging learning experiences.' } },
            { path: 'generate', name: 'generate', component: GenerateForm, meta: { displayName: 'Generate', siteDescription: 'Effortlessly create customized learning content.' } },
        ],
    },
    { path: '/login', name: 'login', component: Login },
];

export default routes;