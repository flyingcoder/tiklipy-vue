<script setup>
    import { ref } from 'vue';
    import Accountancy from '../components/Accountancy.vue';
    import Applications from '../components/Applications.vue';
    import Assistance from '../components/Assistance.vue';
    import Ethics from '../components/Ethics.vue';
    import Initiation from '../components/Initiation.vue';
    import Knowhow from '../components/Knowhow.vue';
    import Visual from '../components/Visuals.vue';

    const activeView = ref('initiation');

    const setActiveView = (view) => {
        activeView.value = view;
    };

    const isViewActive = (view) => {
        return activeView.value === view;
    };
</script>
<template>
    <section class="bg-secondary-color dark:bg-gray-900">
        <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-9 text-4xl pt-7 font-semibold tracking-tight leading-none text-white md:text-3xl lg:text-5xl dark:text-white">How can Tiklipy help you effectively?</h1>
           <p class="text-lg mt-5 font-light">Commonly Addressed Subjects: Tiklipy's Functionality, Billing Queries, and FAQs.</p>
        </div>
        
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select your country</label>
            <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Profile</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
            </select>
        </div>
        <ul class="hidden text-sm font-medium text-center text-gray-500 divide-gray-200 rounded-lg sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li class="w-full" @click="setActiveView('initiation')">
                <a class="inline-block w-full p-4 text-white font-semibold cursor-pointer rounded-t-3xl bg-secondary-color hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" :class="{ 'custom-text-black bg-white': isViewActive('initiation') }">Tiklipy Initiation</a>
            </li>
            <li class="w-full" @click="setActiveView('knowhow')">
                <a class="inline-block w-full p-4 text-white font-semibold cursor-pointer rounded-t-3xl bg-secondary-color hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" :class="{ 'custom-text-black bg-white': isViewActive('knowhow') }">Tiklipy Knowhow</a>
            </li>
            <li class="w-full" @click="setActiveView('ethics')">
                <a class="inline-block w-full p-4 text-white font-semibold cursor-pointer rounded-t-3xl bg-secondary-color hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" :class="{ 'custom-text-black bg-white': isViewActive('ethics') }">Tiklipy Ethics</a>
            </li>
            <li class="w-full" @click="setActiveView('applications')">
                <a class="inline-block w-full p-4 text-white font-semibold cursor-pointer rounded-t-3xl bg-secondary-color hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" :class="{ 'custom-text-black bg-white': isViewActive('applications') }">Tiklipy Applications</a>
            </li>
            <li class="w-full" @click="setActiveView('accountancy')">
                <a class="inline-block w-full p-4 text-white font-semibold cursor-pointer rounded-t-3xl bg-secondary-color hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" :class="{ 'custom-text-black bg-white': isViewActive('accountancy') }">Tiklipy Accountancy</a>
            </li>
            <li class="w-full" @click="setActiveView('assistance')">
                <a class="inline-block w-full p-4 text-white font-semibold cursor-pointer rounded-t-3xl bg-secondary-color hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" :class="{ 'custom-text-black bg-white': isViewActive('assistance') }">Tiklipy Assistance</a>
            </li>
            <li class="w-full" @click="setActiveView('visual')">
                <a class="inline-block w-full p-4 text-white font-semibold cursor-pointer rounded-t-3xl bg-secondary-color hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" :class="{ 'custom-text-black bg-white': isViewActive('visual') }">Tiklipy Visuals</a>
            </li>
        </ul>
    </section>
    <div class="w-full">
        <Accountancy v-if="isViewActive('accountancy')"/>
        <Applications v-if="isViewActive('applications')"/>
        <Assistance v-if="isViewActive('assistance')"/>
        <Ethics v-if="isViewActive('ethics')"/>
        <Initiation v-if="isViewActive('initiation')"/>
        <Knowhow v-if="isViewActive('knowhow')"/>
        <Visual v-if="isViewActive('visual')"/>
    </div>
</template>