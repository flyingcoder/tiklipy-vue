<script setup>
    import { onMounted, ref } from "vue";
    import expressModel from "../models/express";
    import Swal from 'sweetalert2';
    import PriceSelection from '../components/PriceSelection.vue';
    import FAQ from '../components/FAQ.vue';
    import { useAuthStore } from "../stores/auth";
    import { useRouter } from "vue-router"; // Import useRouter
    // import LiveChat from '../../components/LiveChat.vue';
    import { useIdentityStore } from "../stores/siteIdentity";

    const sitename = useIdentityStore();
    const router = useRouter();
    const authStore = useAuthStore();
    const hovered = ref(false);
    const animationPaused = ref(false);
    const backEndModel = new expressModel();
    const testimonials = ref();
    const email = ref('');

    onMounted(() => {
        getTestimonials();
    });

    const getTestimonials = async () => {
        testimonials.value = await backEndModel.getTestimonials().then((data) => data.data );
    } 

    const toggleAnimation = () => {
        animationPaused.value = !animationPaused.value;
    };

    const mouseenter = () => {
        hovered.value = ref(true)
    }

    const tutorial = (gifTutorial) => {
        Swal.fire({
            html: `
                    <div style="display: flex; justify-content: center;">
                        <div class="max-md:hidden">
                            <img src="${gifTutorial}" width="" height="" alt="tutorial" style="margin-top:30px;">
                        </div>
                        <div class="md:hidden">
                            <img src="/Mobile/${gifTutorial}" width="" height="" alt="tutorial" style="margin-top:30px;">
                        </div>
                    </div>
                    <h2 class="swal2-title !p-0 text-black text-xl" id="swal2-title" style="display: block;"></h2>
                `,
                width: 1200,
                padding: '',
                color: '#716add',
                showCloseButton: true,
                showConfirmButton: false,

                backdrop: `
                    rgba(0, 0, 123, 0.4)
                    left top
                    no-repeat
                `
        })
    }

    const emailLogin = () => {
        if (!authStore.user) {
            Swal.fire({
                title: 'Email Address',
                input: 'email',
                inputPlaceholder: 'Example@email.xxx',
                customClass: {
                    title: 'text-main-color',
                    input: 'text-gray-900 font-semibold border border-gray-300 rounded-full bg-white focus:ring-transparent focus:border-main-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-transparent'
                }, 
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: (email) => {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                        if (email === '') {
                            Swal.fire.showValidationError(
                                'Please enter a valid email.'
                            )
                            reject()
                        } else {
                            resolve(email)
                        }
                        }, 2000)
                    })
                },
                allowOutsideClick: false
            }).then((result) => {
                if (result.value) {
                    Swal.fire({
                    icon: 'success',
                    title: 'Thank You',
                    html: 'Email: ' + result.value
                    })
                    email.value = result.value
                    backEndModel.addNewsletter(email.value);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Handle cancel action here, for example, you can log a message
                    console.log('User canceled the action');
                }
            });
        } else {
            router.push({ name: 'dashboard' });
        }
    }
    // const translate = () => {
    //    const englishElement = document.getElementsByClassName('is-english');
    //    englishElement.remove("hidden");
    // }
</script>

<template>
<section class="flex transition ease-in-out bg-cover bg-fixed bg-black delay-150 h-[1000px] min-h-[1000px] sm:w-[100vw] bg-[center_-5rem] items-start justify-center absolute left-0 right-0 top-0 bg-[url(/background.gif)]">
        <div class="sm:w-[40rem] w-[35rem] text-center  pt-[180px]">
            <h1 class="font-bold text-5xl sm:text-6xl m-10 text-white drop-shadow-[10px_10px_2px#000] ">
                Your Loyal Superhero Sidekick!
            </h1>
            <p class="leading-7 text-white drop-shadow-[0px_2px_10px_#24242a] text-xl bg-[#24242a80]">
                Because Every Teacher is a Superhero, and Every Superhero Deserves {{sitename.siteName}}! Unleash Your Teaching Superpowers with AI: Elevate Education Effortlessly and Evolve Your Teaching Tactics!
            </p>
            <!-- <router-link :to="{ name: 'pricing' }">
                <button type="button" @ class="transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                    Request Access
                </button>
            </router-link> -->
            <button type="button" @click="emailLogin()" class="mt-10 transition uppercase duration-240 hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-semibold rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                {{ authStore.user ? 'GO TO PORTAL' : 'REQUEST EARLY ACCESS' }}
            </button>
        </div>
        <div :style="'width: '+ 26 * testimonials?.length +'rem'" class="sm:mt-[700px] mt-[800px] absolute left-0 top-0 bg-center bg-gradient-to-t from-[#f3f4f6] from-60% py-10 flex overflow-x-hidden justify-center" @mouseenter="toggleAnimation" @mouseleave="toggleAnimation">
            <div :style="'animation-duration:'+15 * testimonials?.length +'s'" :class="[hovered ? '' : 'animate-r_marquee2', { 'animation-paused': animationPaused }]" class="flex justify-around w-full max-w-none">
                <div v-for="(testimonial, index) in testimonials" :key="index + '-testi-cards'" class="w-[26rem] mr-10 text-4xl  bg-white p-5 rounded-2xl flex flex-wrap content-between">
                    <div class="">
                        <div class="flex flex-wrap mb-5 text-lg stars">
                            <label v-for="star in testimonial.star" :key="star" :title="star + ' stars'" class="mr-1">
                                <i class="text-2xl text-yellow-300 ti ti-star-filled "
                                aria-hidden="true"
                                ></i>
                            </label>
                        </div>
                        <p class="text-xl text-black "> {{ testimonial.message }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-5 mt-5">
                        <img :src="testimonial.profile" alt="hero" class="w-16 rounded-full">
                        <div class="">
                            <h5 class="mb-1 text-lg font-bold leading-3 text-black ">{{ testimonial.name }}</h5>
                            <p class="text-sm font-light leading-3 text-black">{{ testimonial.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div :style="'animation-duration:'+15  * testimonials?.length +'s'" :class="[hovered ? '' : 'animate-r_marquee', { 'animation-paused': animationPaused }]" class="absolute flex justify-around w-full max-w-none">
                <div v-for="(testimonial, index) in testimonials" :key="index + '-testi-cards'" class="w-[26rem] mr-10 text-4xl  bg-white p-5 rounded-2xl flex flex-wrap content-between">
                    <div class="">
                        <div class="flex flex-wrap mb-5 text-lg stars">
                            <label v-for="star in testimonial.star" :key="star" :title="star + ' stars'" class="mr-1">
                                <i class="text-2xl text-yellow-300 ti ti-star-filled "
                                aria-hidden="true"
                                ></i>
                            </label>
                        </div>
                        <p class="text-xl text-black "> {{ testimonial.message }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-5 mt-5">
                        <img :src="testimonial.profile" alt="hero" class="w-16 rounded-full">
                        <div class="">
                            <h5 class="mb-1 text-lg font-bold leading-3 text-black ">{{ testimonial.name }}</h5>
                            <p class="text-sm font-light leading-3 text-black">{{ testimonial.role }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section  id="features" class="w-full rounded-xl px-3 xs:p-6 mt-[1100px] sm:mt-[1000px] overflow-hidden">
        <div class="">
            <div class="m-auto my-10">
                <p class="mb-3 text-3xl font-semibold text-center uppercase md:mb-10 md:text-5xl text-main-color">
                    Features
                </p>
                <h2 class="mb-5 text-xl font-semibold text-center text-main-color sm:text-4xl leading-[1.4rem]">
                    Discover effective strategies for handling challenging student behavior.
                </h2>
                <div class="text-center text-black">Immerse yourself in over 40 potent teaching tools. Write, organize, and discover boundless inspiration. Also, access expert advice whenever you need.</div>
            </div>
            <!-- Contents -->
            <div class="flex flex-wrap justify-center my-10 sm:justify-between">
                <div  @click="tutorial('Lesson-plan.gif')" class="cursor-pointer w-full sm:w-[49%] midlg:w-[30%] mb-4 md:mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-red-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7" src="/Lifebuoy.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Generate Lesson plan</h2>
                    <div class="text-center text-black">Craft a student-led, critical-thinking-focused lesson plan prioritizing exploration and discovery through clear organization.</div>
                </div>
                <div   @click="tutorial('/Report.gif')" class="cursor-pointer w-full sm:w-[49%] midlg:w-[30%] mb-4 md:mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-yellow-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="/Strategy.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Auxiliary Report Generator</h2>
                    <div class="text-center text-black">Simplify your auxiliary assignment. Just share a few details, and {{sitename.siteName}} will solve your problem.</div>
                </div>
                <div @click="tutorial('/Project.gif')" class="cursor-pointer w-full sm:w-[49%] midlg:w-[30%] mb-4 md:mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-blue-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7" src="/Essay.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Find a Project Idea</h2>
                    <div class="text-center text-black">Generate a project or activity that is aligned with your individual classroom needs.</div>
                </div>
                <div @click="tutorial('/Feedback.gif')" class="cursor-pointer w-full sm:w-[49%] midlg:w-[30%] mb-4 md:mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-green-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="/Promotion.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Receive Feedback</h2>
                    <div class="text-center text-black">Generate valuable insights and suggestions.</div>
                </div>
                <div @click="tutorial('/Experiment.gif')" class="cursor-pointer w-full sm:w-[49%] midlg:w-[30%] mb-4 md:mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-indigo-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="/Medal.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Find a Science or Math Experiment</h2>
                    <div class="text-center text-black">Finding captivating ways to test hypotheses through hands-on trials.</div>
                </div>
                <div @click="tutorial('/Advice.gif')" class="cursor-pointer w-full sm:w-[49%] midlg:w-[30%] mb-4 md:mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-orange-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7" src="/Learn.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Get Advice</h2>
                    <div class="text-center text-black">Get help with career and classroom-related challenges.</div>
                </div>
            </div>
        </div>
            <!-- Title -->
        <div class="mt-[5rem] mb-4 md:mb-10 sm:w-[40rem] m-auto">
            <h2 class="mb-5 text-3xl font-semibold text-center text-main-color">Plus, there's more!</h2>
        </div>
        <!-- Contents -->
        <div class="flex flex-wrap justify-center mb-4 md:mb-10 sm:justify-between">
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-3 md:mb-10 bg-white hover:bg-red-100 p-5 2xl:p-10  content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-red-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="/195.png" alt="">
                </div>
                <div class="">
                    <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Simplifying Concepts</h2>
                    <div class="text-black">Breaking down complex topics for easier understanding.</div>
                </div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-3 md:mb-10 bg-white  hover:bg-green-100 p-5  2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-green-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="/73.png" alt="">
                </div>
                <div class="">
                    <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Crafting Comprehension Questions</h2>
                    <div class="text-black">Generating engaging queries based on written material.</div>
                </div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-3 md:mb-10 bg-white hover:bg-yellow-100 p-5 2xl:p-10  content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-yellow-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="/134.png" alt="">
                </div>
                <div class="">
                    <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Creating a Positive Classroom Atmospher</h2>
                    <div class="text-black">Enhancing performance and behavior through a constructive classroom environment.</div>
                </div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-3 md:mb-10 bg-white hover:bg-blue-100 p-5 2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-blue-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="/73.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Crafting Newsletters</h2>
                <div class="text-black">Generating customized letters, blog posts, and updates instantly.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-3 md:mb-10 bg-white hover:bg-teal-100 p-5  2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-teal-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="/123.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Writing Articles and Short Stories</h2>
                <div class="text-black">Producing tailored content to meet individual needs.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-3 md:mb-10 bg-white hover:bg-red-100 p-5  2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-red-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="/185.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Exploring History from Various Perspectives</h2>
                <div class="text-black">Examining history through different viewpoints and angles.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] max-midlg:mb-3 md:mb-10 bg-white hover:bg-green-100 p-5 2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-green-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="/95.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Writing Effective Emails</h2>
                <div class="text-black">Generating impactful emails with a personal touch.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] max-midlg:mb-3 md:mb-10 bg-white hover:bg-yellow-100 p-5 2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-yellow-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12 p-2"  src="/195.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Discovering Science and Math Experiments</h2>
                <div class="text-black">Finding captivating ways to test hypotheses through hands-on trials.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] max-midlg:mb-3 md:mb-10 bg-white hover:bg-blue-100 p-5 2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-blue-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="/123.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Generating Volunteer Sign-Up Forms</h2>
                <div class="text-black">Creating forms to attract and manage volunteers efficiently.</div>
            </div>
        </div>
        <div class="w-full mb-3 mb-10 text-center md:mb-10">
            <router-link :to="{ name: 'features' }" class="duration-300 hover:scale-105 text-center w-full text-2xl py-3 px-5 hover:bg-main-color bg-white hover:text-white text-main-color font-semibold rounded-xl border-[1px] border-main-color">
                See all features
            </router-link>
        </div>
        <div id="pricing" class="pt-8">
            <price-selection />
        </div>
        <div id="FAQ" class="pt-8">
            <FAQ></FAQ>
        </div>
    </section>
</template>