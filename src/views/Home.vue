<script setup>

</script>

<template>
    <div class="mb-5">
        <div class="flex sm:w-[35rem] h-[35rem] m-auto text-center align-items items-center justify-center">
            <div class="">
                <h1 class="text-gray-800 font-bold text mb-8 ">Every teacher's best friend</h1>
                <p class="text-black mb-10">Fetchy brings AI to educators. You'll still attend meetings and create lesson plans. But how you do all this will never be the same.</p>
                <router-link :to="{name:'pricing'}">
                    <button type="button" class="w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                        Buy now Get one month FREE !
                    </button>
                </router-link>
            </div>
        </div>
        <div class="bg-white w-full rounded-xl p-6">
            <!-- title -->
            <div class="my-10 sm:w-[40rem] m-auto ">
                <h2 class="text-main-color text-center text-3xl font-semibold mb-5">Discover effective strategies for handling challenging student behavior.</h2>
                <div class="text-black text-center">Dive into 50+ powerful teaching tools. Write stuff, organize things, and find unlimited inspiration. Plus, get expert advice anytime.</div>
            </div>
            <!-- Contents -->
            <div class="flex flex-wrap my-10 justify-center sm:justify-between">
                <div class="sm:w-[49%] midlg:w-[30%] mb-10">
                    <div class="rounded-[100px] overflow-hidden bg-red-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="/public/Lifebuoy.svg" alt="">
                    </div>
                    <h2 class="text-black text-center text-2xl font-semibold">Receive Guidance</h2>
                    <div class="text-black text-center">Receive expert assistance for challenges in your career and classroom.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10">
                    <div class="rounded-[100px] overflow-hidden bg-yellow-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="/public/Strategy.svg" alt="">
                    </div>
                    <h2 class="text-black text-center text-2xl font-semibold">Handle Challenging Behavior</h2>
                    <div class="text-black text-center">Uncover impactful techniques to manage challenging student behavior.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10">
                    <div class="rounded-[100px] overflow-hidden bg-blue-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7" src="/public/Essay.svg" alt="">
                    </div>
                    <h2 class="text-black text-center text-2xl font-semibold">Generate Authorization Slip</h2>
                    <div class="text-black text-center">Create permission slips for a wide range of purposes.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10">
                    <div class="rounded-[100px] overflow-hidden bg-green-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="/public/Promotion.svg" alt="">
                    </div>
                    <h2 class="text-black text-center text-2xl font-semibold">Make Feedback</h2>
                    <div class="text-black text-center">Offer valuable support and guidance to both students and colleagues.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10">
                    <div class="rounded-[100px] overflow-hidden bg-indigo-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7"  src="/public/Medal.svg" alt="">
                    </div>
                    <h2 class="text-black text-center text-2xl font-semibold">Cultivate Student Enthusiasm</h2>
                    <div class="text-black text-center">Explore approaches to boost student motivation and achieve success.</div>
                </div>
                <div class="sm:w-[49%] midlg:w-[30%] mb-10">
                    <div class="rounded-[100px] overflow-hidden bg-orange-100 w-fit m-auto mb-5">
                        <img class="w-40 p-7" src="/public/Learn.svg" alt="">
                    </div>
                    <h2 class="text-black text-center text-2xl font-semibold">Generate Lesson Plans</h2>
                    <div class="text-black text-center">Craft lessons with well-defined objectives, organization, and structure.</div>
                </div>
            </div>


             <!-- Title -->
            <div class="mt-[5rem] mb-10 sm:w-[40rem] m-auto ">
                <h2 class="text-main-color text-center text-3xl font-semibold mb-5">And Much More!</h2>
            </div>
            <!-- Contents -->
            <div class="  flex flex-wrap mt-10 justify-center sm:justify-between">
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-[#eeeff46b] hover:bg-red-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-red-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/195.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Simplifying Concepts</h2>
                    <div class="text-black">Breaking down complex topics for easier understanding.</div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-[#eeeff46b] hover:bg-green-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-green-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/73.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Crafting Comprehension Questions</h2>
                    <div class="text-black">Generating engaging queries based on written material.</div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-[#eeeff46b] hover:bg-yellow-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-yellow-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/134.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Creating a Positive Classroom Atmospher</h2>
                    <div class="text-black">Enhancing performance and behavior through a constructive classroom environment.</div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-[#eeeff46b] hover:bg-blue-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-blue-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/73.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Crafting Newsletters</h2>
                    <div class="text-black">Generating customized letters, blog posts, and updates instantly.</div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-[#eeeff46b] hover:bg-teal-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-teal-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/123.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Writing Articles and Short Stories</h2>
                    <div class="text-black">Producing tailored content to meet individual needs.</div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] mb-5 bg-[#eeeff46b] hover:bg-red-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-red-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/185.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Exploring History from Various Perspectives</h2>
                    <div class="text-black">Examining history through different viewpoints and angles.</div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] max-md:mb-5 bg-[#eeeff46b] hover:bg-green-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-green-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/95.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Writing Effective Emails</h2>
                    <div class="text-black">Generating impactful emails with a personal touch.</div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] max-md:mb-5 bg-[#eeeff46b] hover:bg-yellow-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-yellow-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/195.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Discovering Science and Math Experiments</h2>
                    <div class="text-black">Finding captivating ways to test hypotheses through hands-on trials.</div>
                </div>
                <div class="border-[1px] border-color-main-color sm:w-[49%] midlg:w-[32%] max-md:mb-5 bg-[#eeeff46b] hover:bg-blue-100 p-5 flex flex-wrap content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-md hover:shadow-blue-200">
                    <div class="overflow-hidden  w-full mb-[4rem]">
                        <img class="rounded-[100px]  bg-main-color w-10 p-2"  src="/public/123.png" alt="">
                    </div>
                    <h2 class="text-black text-[1.2rem] font-semibold mb-2">Generating Volunteer Sign-Up Forms</h2>
                    <div class="text-black">Creating forms to attract and manage volunteers efficiently.</div>
                </div>
            </div>
        </div>
    </div>
</template>