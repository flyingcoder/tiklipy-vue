<script setup>
    import { ref } from "vue";
    const hovered = ref(false);
    const animationPaused = ref(false);

    const toggleAnimation = () => {
        animationPaused.value = !animationPaused.value;
    };

    const mouseenter = () => {
        hovered.value = ref(true)
    }
</script>

<template>
    <div class="mb-5 overflow-x-hidden">
        <div class="flex h-[100vh] w-[calc(100vw-17px)] items-center justify-center absolute left-0 right-0 top-0 bg-center" style="background-image: url(background.gif)">
            <div class="sm:w-[35rem] text-center">
                <h1 class="font-bold text-2xl sm:text-6xl mb-8 text-white drop-shadow-[10px_10px_2px#000] ">The ultimate companion for every teacher.</h1>
                <p class=" text-white mb-10 drop-shadow-[0px_2px_10px_#24242a] text-lg bg-[#24242a]">Empowering educators, Fetchy integrates AI. While meetings and lesson planning continue, your methods evolve radically.</p>
                <router-link :to="{ name: 'pricing' }">
                    <button type="button" class="transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                        Register for FREE!
                    </button>
                </router-link>
            </div>
        </div>
        <div class="mt-[100vh] w-[100vw]  absolute left-0 top-0 bg-center bg-black py-10">
            <div class=" flex overflow-hidden py-10 ">
                <div class=" animate-marquee whitespace-nowrap ">
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>

                </div>
                <div class="absolute animate-marquee2 whitespace-nowrap">
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                    <span class="text-4xl mx-10 mx-4">Featured By</span>
                    <span class="text-4xl mx-10  "><i class="ti ti-brand-meta"></i></span>
                </div>
            </div>
            <div class=" flex overflow-hidden py-10 justify-center" @mouseenter="toggleAnimation" @mouseleave="toggleAnimation">
                <div :class="[hovered ? '' : 'animate-r_marquee2', { 'animation-paused': animationPaused }]" class=" flex flex-wrap  justify-between ">
                    <div class=" max-w-[26rem] text-4xl  bg-white mx-5 p-5 rounded-2xl flex flex-wrap content-between">
                        <div class="">
                            <div class="stars flex flex-wrap mb-5">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                            </div>
                            <p class="text-lg text-black "> I recently stumbled upon @tiklipy, and wow! My mind is already amazed.</p>
                        </div>
                        <div class="mt-5 flex flex-wrap items-center gap-5">
                            <img src="hero.webp" alt="hero" class="w-16">
                            <div class="">
                                <h5 class="text-black text-lg font-bold leading-3 mb-1 ">Brent</h5>
                                <p class="text-sm text-black leading-3	font-light">High School teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class=" max-w-[26rem] text-4xl  bg-white mx-5 p-5 rounded-2xl flex flex-wrap content-between">
                        <div class="">
                            <div class="stars flex flex-wrap mb-5">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                            </div>
                            <p class="text-lg text-black "> @tiklipy assists me with all my planning requirements. It offers a plethora of resources conveniently located in a single place.</p>
                        </div>
                        <div class="mt-5 flex flex-wrap items-center gap-5">
                            <img src="hero.webp" alt="hero" class="w-16">
                            <div class="">
                                <h5 class="text-black text-lg font-bold leading-3 mb-1 ">alex</h5>
                                <p class="text-sm text-black leading-3	font-light">High School teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class=" max-w-[26rem] text-4xl  bg-white mx-5 p-5 rounded-2xl flex flex-wrap content-between">
                        <div class="">
                            <div class="stars flex flex-wrap mb-5">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                            </div>
                            <p class="text-lg text-black "> Why do not all educators make use of @tiklipy? I'm completely engrossed.</p>
                        </div>
                        <div class="mt-5 flex flex-wrap items-center gap-5">
                            <img src="hero.webp" alt="hero" class="w-16">
                            <div class="">
                                <h5 class="text-black text-lg font-bold leading-3 mb-1 ">brenda</h5>
                                <p class="text-sm text-black leading-3	font-light">High School teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class=" max-w-[26rem] text-4xl  bg-white mx-5 p-5 rounded-2xl flex flex-wrap content-between">
                        <div class="">
                            <div class="stars flex flex-wrap mb-5">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                            </div>
                            <p class="text-lg text-black "> This is incredibly impressive! Such a fantastic resource to have right at your fingertips.</p>
                        </div>
                        <div class="mt-5 flex flex-wrap items-center gap-5">
                            <img src="hero.webp" alt="hero" class="w-16">
                            <div class="">
                                <h5 class="text-black text-lg font-bold leading-3 mb-1 ">Brent</h5>
                                <p class="text-sm text-black leading-3	font-light">High School teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="[hovered ? '' : 'animate-r_marquee', { 'animation-paused': animationPaused }]" class="flex flex-wrap wrap absolute ">
                    <div class=" max-w-[26rem] text-4xl  bg-white mx-5 p-5 rounded-2xl flex flex-wrap content-between">
                        <div class="">
                            <div class="stars flex flex-wrap mb-5">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                            </div>
                            <p class="text-lg text-black "> I recently stumbled upon @tiklipy, and wow! My mind is already amazed.</p>
                        </div>
                        <div class="mt-5 flex flex-wrap items-center gap-5">
                            <img src="hero.webp" alt="hero" class="w-16">
                            <div class="">
                                <h5 class="text-black text-lg font-bold leading-3 mb-1 ">Brent</h5>
                                <p class="text-sm text-black leading-3	font-light">High School teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class=" max-w-[26rem] text-4xl  bg-white mx-5 p-5 rounded-2xl flex flex-wrap content-between">
                        <div class="">
                            <div class="stars flex flex-wrap mb-5">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                            </div>
                            <p class="text-lg text-black "> @tiklipy assists me with all my planning requirements. It offers a plethora of resources conveniently located in a single place.</p>
                        </div>
                        <div class="mt-5 flex flex-wrap items-center gap-5">
                            <img src="hero.webp" alt="hero" class="w-16">
                            <div class="">
                                <h5 class="text-black text-lg font-bold leading-3 mb-1 ">alex</h5>
                                <p class="text-sm text-black leading-3	font-light">High School teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class=" max-w-[26rem] text-4xl  bg-white mx-5 p-5 rounded-2xl flex flex-wrap content-between">
                        <div class="">
                            <div class="stars flex flex-wrap mb-5">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                            </div>
                            <p class="text-lg text-black "> Why do not all educators make use of @tiklipy? I'm completely engrossed.</p>
                        </div>
                        <div class="mt-5 flex flex-wrap items-center gap-5">
                            <img src="hero.webp" alt="hero" class="w-16">
                            <div class="">
                                <h5 class="text-black text-lg font-bold leading-3 mb-1 ">brenda</h5>
                                <p class="text-sm text-black leading-3	font-light">High School teacher</p>
                            </div>
                        </div>
                    </div>
                    <div class=" max-w-[26rem] text-4xl  bg-white mx-5 p-5 rounded-2xl flex flex-wrap content-between">
                        <div class="">
                            <div class="stars flex flex-wrap mb-5">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                                <img src="star-svgrepo-com.png" alt="" class="w-6 mr-1">
                            </div>
                            <p class="text-lg text-black "> This is incredibly impressive! Such a fantastic resource to have right at your fingertips.</p>
                        </div>
                        <div class="mt-5 flex flex-wrap items-center gap-5">
                            <img src="hero.webp" alt="hero" class="w-16">
                            <div class="">
                                <h5 class="text-black text-lg font-bold leading-3 mb-1 ">Brent</h5>
                                <p class="text-sm text-black leading-3	font-light">High School teacher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full rounded-xl p-6  mt-[calc(160vh-200px)]">
            <!-- title -->
            <div class="">
                <div class="my-10 sm:w-[40rem] m-auto ">
                    <h2 class="text-main-color text-center text-xl sm:text-3xl font-semibold mb-5">Discover effective strategies for handling challenging student behavior.</h2>
                    <div class="text-black text-center">Immerse yourself in over 50 potent teaching tools. Write, organize, and discover boundless inspiration. Also, access expert advice whenever you need.</div>
                </div>
                <!-- Contents -->
                <div class="flex flex-wrap my-10 justify-center sm:justify-between">
                    <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                        <div class="rounded-[100px] overflow-hidden bg-red-100 w-fit m-auto mb-5">
                            <img class="w-40 p-7"  src="Lifebuoy.svg" alt="">
                        </div>
                        <h2 class="text-black text-center text-2xl pb-3 font-semibold">Receive Guidance</h2>
                        <div class="text-black text-center">Receive expert assistance for challenges in your career and classroom.</div>
                    </div>
                    <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                        <div class="rounded-[100px] overflow-hidden bg-yellow-100 w-fit m-auto mb-5">
                            <img class="w-40 p-7"  src="Strategy.svg" alt="">
                        </div>
                        <h2 class="text-black text-center text-2xl font-semibold pb-3">Handle Challenging Behavior</h2>
                        <div class="text-black text-center">Uncover impactful techniques to manage challenging student behavior.</div>
                    </div>
                    <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                        <div class="rounded-[100px] overflow-hidden bg-blue-100 w-fit m-auto mb-5">
                            <img class="w-40 p-7" src="Essay.svg" alt="">
                        </div>
                        <h2 class="text-black text-center text-2xl font-semibold pb-3">Create New Evaluation Method</h2>
                        <div class="text-black text-center">Craft an unconventional assessments strategy to gauge student understanding</div>
                    </div>
                    <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                        <div class="rounded-[100px] overflow-hidden bg-green-100 w-fit m-auto mb-5">
                            <img class="w-40 p-7"  src="Promotion.svg" alt="">
                        </div>
                        <h2 class="text-black text-center text-2xl font-semibold pb-3">Make Feedback</h2>
                        <div class="text-black text-center">Offer valuable support and guidance to both students and colleagues.</div>
                    </div>
                    <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                        <div class="rounded-[100px] overflow-hidden bg-indigo-100 w-fit m-auto mb-5">
                            <img class="w-40 p-7"  src="Medal.svg" alt="">
                        </div>
                        <h2 class="text-black text-center text-2xl font-semibold pb-3">Cultivate Student Enthusiasm</h2>
                        <div class="text-black text-center">Explore approaches to boost student motivation and achieve success.</div>
                    </div>
                    <div class="sm:w-[49%] midlg:w-[30%] mb-10 bg-white px-5 py-8 rounded-md">
                        <div class="rounded-[100px] overflow-hidden bg-orange-100 w-fit m-auto mb-5">
                            <img class="w-40 p-7" src="Learn.svg" alt="">
                        </div>
                        <h2 class="text-black text-center text-2xl font-semibold pb-3">Generate Lesson Plans</h2>
                        <div class="text-black text-center">Craft lessons with well-defined objectives, organization, and structure.</div>
                    </div>
                </div>
            </div>
            


             <!-- Title -->
            <div class="mt-[5rem] mb-10 sm:w-[40rem] m-auto ">
                <h2 class="text-main-color text-center text-3xl font-semibold mb-5">Plus, there's more!</h2>
            </div>
            <!-- Contents -->
            <div class="  flex flex-wrap mt-10 justify-center sm:justify-between">
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-white hover:bg-red-100 p-5 2xl:p-10  content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-red-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="195.png" alt="">
                    </div>
                    <div class="">
                        <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Simplifying Concepts</h2>
                        <div class="text-black">Breaking down complex topics for easier understanding.</div>
                    </div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-white  hover:bg-green-100 p-5  2xl:p-10 content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-green-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[10px]  bg-main-color w-12  p-2"  src="73.png" alt="">
                    </div>
                    <div class="">
                        <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">Crafting Comprehension Questions</h2>
                        <div class="text-black">Generating engaging queries based on written material.</div>
                    </div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-white hover:bg-yellow-100 p-5 2xl:p-10  content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm hover:shadow-yellow-200">
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
        </div>
    </div>
</template>