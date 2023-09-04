import {
    Dashboard, Account, Consult, Lessons, Lesson, Visuals, Visual,
    Assesments, Assesment, Quizes, Homeworks, Tests, Home, Help,
    Blogs, Blog, About, Pricing, Features, Terms, Privacy, License, 
    MembersLayout, GuestsLayout, Projects, Activities, GenerateForm, 
    Login, SendGift, FAQ, Featured, ThankYou, PaymentCancel, PageNotFound,
    Helps, Register, Tools, Resources, Resource, MyReviews, SuggestTools,
    Slide
} from './components';
import Admin from '../views/admin/index.vue';
import InvitationCodes from '../views/admin/InvitationCodes.vue'
import Reviews from '../views/admin/Reviews.vue'
import AdminBlogs from '../views/admin/Blogs.vue'
import Newsletters from '../views/admin/Newsletters.vue'
import Posts from '../views/admin/Post.vue';
import AdminHelp from '../views/admin/Help.vue';
import Prompt from '../views/admin/Prompt.vue';
const routes = [
    //main pages routes
    { 
        path: '/', 
        component: GuestsLayout,
        children: [
            { path: '/', name: 'home', component: Home },
            { path: '/about', name: 'about', component: About },
            { path: '/helps', name: 'help', component: Helps },
            { path: '/helps/:slug', name: 'helps', component: Help },
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
            { path: '', name: 'dashboard', component: Dashboard, meta: { displayName: 'Dashboard', siteDescription: 'Explore the available tools by clicking on or searching through the cards.' } },
            { path: 'account', name: 'account', component: Account, meta: { displayName: 'Account', pageTitle: 'Account Setting', siteDescription: 'Welcome to Your Tiklipy Account Page' } },
            { path: 'consult', name: 'consult', component: Consult, meta: { displayName: 'Consult', siteDescription: 'Personalized consulting for tailored guidance and support.' } },
            { path: 'assessments', name: 'assessments', component: Resources, meta: {type: 'assessments', displayName: 'Assessments', siteDescription: 'Measuring Proficiency: Gauging Learning Outcomes and Knowledge Mastery' } },
            { path: 'assessments/:type/:id', name: 'assessment', component: Assesment, meta: { displayName: 'Assessments', siteDescription: 'Measuring Proficiency: Gauging Learning Outcomes and Knowledge Mastery' } },
            { path: 'lessons', name: 'lessons', component: Resources, meta: { type: 'lesson plan', displayName: 'Lessons', pageTitle: 'Your Generated Lessons', siteDescription: 'Effective and Engaging Lesson Plans' } },
            { path: 'lessons/:id', name: 'lesson', component: Lesson, meta: { displayName: 'Lessons',  siteDescription: 'Explore lessons to enhance your learning journey.' } },
            { path: 'quizzes', name: 'quizes', component: Resources, meta: {type: 'quizzes', displayName: 'Quizzes', siteDescription: 'Interactive quizzes to test your knowledge.' } },
            { path: 'homeworks', name: 'homeworks', component: Resources, meta: {type: 'homeworks', displayName: 'Homeworks', siteDescription: 'Engaging homework assignments to reinforce learning.' } },
            { path: 'tests', name: 'tests', component: Resources, meta: {type: 'tests', displayName: 'Tests', siteDescription: 'Comprehensive assessment tests to track your progress.' } },
            { path: 'visuals', name: 'visuals', component: Visuals },
            { path: 'visuals/:id', name: 'visual', component: Visual, meta: { displayName: 'Visuals', siteDescription: '' } },
            { path: 'projects', name: 'projects', component: Resources, meta: {type: 'projects', displayName: 'Projects', siteDescription: 'Engaging projects to apply and enhance your skills.' } },
            { path: 'activities', name: 'activities', component: Resources, meta: {type: 'activities', displayName: 'Activities', siteDescription: 'Interactive activities for engaging learning experiences.' } },
            { path: 'resources/:type', name: 'resources', component: Resources, meta: { displayName: 'Resources', siteDescription: 'Discover curated articles and tools to fuel your growth and learning.' } },
            { path: 'resource/:id', name: 'resource', component: Resource, },
            { path: 'resources/slides/:docId:', component: Slide },
            { path: 'my-reviews', name: 'my-reviews', component: MyReviews, meta: { displayName: 'Reviews', siteDescription: 'Your Reviews: Your Voice, Your Opinions' } },
            { path: 'suggest-tools', name: 'suggest-tools', component: SuggestTools, meta: { displayName: 'Suggest Tools', siteDescription: 'SuggestTools: Your Source for Smart Solutions' } },
            { path: 'generate', name: 'generate', component: GenerateForm },
            { path: 'admin', name: 'admin', component: Admin, children: [
                { path:'', name: 'invite-code', component: InvitationCodes },
                { path:'reviews', name: 'reviews', component: Reviews },
                { path:'newsletters', name: 'newsletters', component: Newsletters },
                { path: 'blogs', name: 'admin-blogs', component: AdminBlogs },
                { path: 'posts', name: 'posts', component: Posts },
                { path: 'help', name: 'admin-help', component: AdminHelp },
                { path: 'prompt', name: 'prompt', component: Prompt }
            ]},
        ],
    },
    { path: '/login', name: 'login', component: Register },
    { path: '/register', name: 'register', component: Register },
    { path: '/thank-you', name: 'thanks', component: ThankYou },
    { path: '/payment-cancel', name: 'cancel', component: PaymentCancel },
    { path: "/:catchAll(.*)", component: PageNotFound },
];

export default routes;