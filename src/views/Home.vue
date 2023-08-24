<script setup>
    import { onMounted, ref } from "vue";
    import expressModel from "../models/express";
    import Swal from 'sweetalert2';
    import AddNewsletterModel from "../models/newsLetters";
    import 'sweetalert2/dist/sweetalert2.min.css';
    import PriceSelection from '../components/PriceSelection.vue';

    const hovered = ref(false);
    const animationPaused = ref(false);
    const backEndModel = new expressModel();
    const addNewsLetter = new AddNewsletterModel();
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

    const emailLogin = () => {
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
                return new Promise((resolve) => {
                    setTimeout(() => {
                    if (email === 'example@email.com') {
                        Swal.fire.showValidationError(
                        'This email is already taken.'
                        )
                    }
                    resolve()
                    }, 2000)
                })
            },
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
			    Swal.fire({
			      type: 'success',
			      title: 'Thank You',
			      html: 'Email: ' + result.value
			    })
                email.value = result.value
			}

            addNewsLetter.addNewsletter(email.value);
        });
    }
    // const translate = () => {
    //    const englishElement = document.getElementsByClassName('is-english');
    //    englishElement.remove("hidden");
    // }
</script>

<template>
    <section class="flex bg-no-repeat transition ease-in-out bg-cover bg-fixed bg-black delay-150 h-min-[100vh] sm:w-[100vw] bg-[center_-5rem] items-center justify-center absolute left-0 right-0 top-0 bg-[url(background.gif)]">
        <div class="sm:w-[40rem] w-[35rem] text-center sm:pb-[36rem] pb-[34rem] pt-[7rem]">
            <h1 class="font-bold text-5xl sm:text-6xl m-10 text-white drop-shadow-[10px_10px_2px#000] ">
                Your Loyal Superhero Sidekick!
            </h1>
            <p class="leading-7 text-white drop-shadow-[0px_2px_10px_#24242a] text-xl bg-[#24242a80]">
                Because Every Teacher Is a Superhero, and Every Superhero Deserves Tiklipy! Unleash Your Teaching Superpowers with AI: Elevate Education Effortlessly and Evolve Your Teaching Tactics!
            </p>
            <!-- <router-link :to="{ name: 'pricing' }">
                <button type="button" @ class="transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                    Request Access
                </button>
            </router-link> -->
            <button type="button" @click="emailLogin()" class="mt-10 transition uppercase duration-240 hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-semibold rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                Request Early Access
            </button>
        </div>
        <div :style="'width: '+ 26 * testimonials?.length +'rem'" class="sm:mt-[90vh] mt-[85vh] absolute left-0 top-0 bg-center bg-gradient-to-t from-[#f3f4f6] from-30% py-10 flex overflow-x-hidden justify-center" @mouseenter="toggleAnimation" @mouseleave="toggleAnimation">
            <div :style="'animation-duration:'+5 * testimonials?.length +'s'" :class="[hovered ? '' : 'animate-r_marquee2', { 'animation-paused': animationPaused }]" class="flex justify-around w-full max-w-none">
                <div v-for="(testimonial, index) in testimonials" :key="index + '-testi-cards'" class="w-[26rem] mr-10 text-4xl  bg-white p-5 rounded-2xl flex flex-wrap content-between">
                    <div class="">
                        <div class="flex flex-wrap mb-5 text-lg stars">
                            {{ testimonial.star }}
                        </div>
                        <p class="text-xl text-black "> {{ testimonial.review }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-5 mt-5">
                        <img :src="testimonial.profile" alt="hero" class="w-16 rounded-full">
                        <div class="">
                            <h5 class="mb-1 text-lg font-bold leading-3 text-black ">{{ testimonial.name }}</h5>
                            <p class="text-sm font-light leading-3 text-black">{{ testimonial.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div :style="'animation-duration:'+5 * testimonials?.length +'s'" :class="[hovered ? '' : 'animate-r_marquee', { 'animation-paused': animationPaused }]" class="absolute flex justify-around w-full max-w-none">
                <div v-for="(testimonial, index) in testimonials" :key="index + '-testi-cards'" class="w-[26rem] mr-10 text-4xl  bg-white p-5 rounded-2xl flex flex-wrap content-between ">
                    <div class="">
                        <div class="flex flex-wrap mb-5 text-lg stars">
                            {{ testimonial.star }}
                        </div>
                        <p class="text-xl text-black "> {{ testimonial.review }}</p>
                    </div>
                    <div class="flex flex-wrap items-center gap-5 mt-5">
                        <img :src="testimonial.profile" alt="hero" class="w-16 rounded-full">
                        <div class="">
                            <h5 class="mb-1 text-lg font-bold leading-3 text-black ">{{ testimonial.name }}</h5>
                            <p class="text-sm font-light leading-3 text-black">{{ testimonial.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section  id="features" class="w-full rounded-xl px-3 xs:p-6 mt-[120vh] sm:mt-[130vh] overflow-hidden">
        <div class="">
            <div class="m-auto my-10">
                <p class="mb-10 text-5xl font-semibold text-center uppercase text-main-color">
                    Features
                </p>
                <h2 class="mb-5 text-3xl font-semibold text-center text-main-color sm:text-4xl">
                    Discover effective strategies for handling challenging student behavior.
                </h2>
                <div class="text-center text-black">Immerse yourself in over 30 potent teaching tools. Write, organize, and discover boundless inspiration. Also, access expert advice whenever you need.</div>
            </div>
            <!-- Contents -->
            <div class="flex flex-wrap justify-center my-10 sm:justify-between">
                <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-red-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="Lifebuoy.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Receive Guidance</h2>
                    <div class="text-center text-black">Receive expert assistance for challenges in your career and classroom.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-yellow-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="Strategy.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Handle Challenging Behavior</h2>
                    <div class="text-center text-black">Uncover impactful techniques to manage challenging student behavior.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-blue-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7" src="Essay.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Create New Evaluation Method</h2>
                    <div class="text-center text-black">Craft an unconventional assessments strategy to gauge student understanding</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-green-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="Promotion.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Make Feedback</h2>
                    <div class="text-center text-black">Offer valuable support and guidance to both students and colleagues.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-indigo-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="Medal.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Cultivate Student Enthusiasm</h2>
                    <div class="text-center text-black">Explore approaches to boost student motivation and achieve success.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                    <div class="rounded-[100px] overflow-hidden bg-orange-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7" src="Learn.svg" alt="">
                    </div>
                    <h2 class="pb-3 text-2xl font-semibold text-center text-black">Generate Lesson Plans</h2>
                    <div class="text-center text-black">Craft lessons with well-defined objectives, organization, and structure.</div>
                </div>
            </div>
        </div>
            <!-- Title -->
        <div class="mt-[5rem] mb-10 sm:w-[40rem] m-auto">
            <h2 class="mb-5 text-3xl font-semibold text-center text-main-color">Plus, there's more!</h2>
        </div>
        <!-- Contents -->
        <div class="flex flex-wrap justify-center mt-10 sm:justify-between">
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-5 bg-white hover:bg-red-100 p-5 2xl:p-10  content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-red-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="195.png" alt="">
                </div>
                <div class="">
                    <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Simplifying Concepts</h2>
                    <div class="text-black">Breaking down complex topics for easier understanding.</div>
                </div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-5 bg-white  hover:bg-green-100 p-5  2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-green-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="73.png" alt="">
                </div>
                <div class="">
                    <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Crafting Comprehension Questions</h2>
                    <div class="text-black">Generating engaging queries based on written material.</div>
                </div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-5 bg-white hover:bg-yellow-100 p-5 2xl:p-10  content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-yellow-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="134.png" alt="">
                </div>
                <div class="">
                    <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Creating a Positive Classroom Atmospher</h2>
                    <div class="text-black">Enhancing performance and behavior through a constructive classroom environment.</div>
                </div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-5 bg-white hover:bg-blue-100 p-5 2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-blue-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="73.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Crafting Newsletters</h2>
                <div class="text-black">Generating customized letters, blog posts, and updates instantly.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-5 bg-white hover:bg-teal-100 p-5  2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-teal-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="123.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Writing Articles and Short Stories</h2>
                <div class="text-black">Producing tailored content to meet individual needs.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-5 bg-white hover:bg-red-100 p-5  2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-red-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="185.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Exploring History from Various Perspectives</h2>
                <div class="text-black">Examining history through different viewpoints and angles.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] max-midlg:mb-5 bg-white hover:bg-green-100 p-5 2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-green-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="95.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Writing Effective Emails</h2>
                <div class="text-black">Generating impactful emails with a personal touch.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] max-midlg:mb-5 bg-white hover:bg-yellow-100 p-5 2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-yellow-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12 p-2"  src="195.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Discovering Science and Math Experiments</h2>
                <div class="text-black">Finding captivating ways to test hypotheses through hands-on trials.</div>
            </div>
            <div class="border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] max-midlg:mb-5 bg-white hover:bg-blue-100 p-5 2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-blue-200">
                <div class="overflow-hidden  w-full mb-[4rem]">
                    <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="123.png" alt="">
                </div>
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Generating Volunteer Sign-Up Forms</h2>
                <div class="text-black">Creating forms to attract and manage volunteers efficiently.</div>
            </div>
        </div>
        <div id="pricing" class="pt-8">
            <price-selection />
        </div>
    </section>
</template>