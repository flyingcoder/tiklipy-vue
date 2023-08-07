<script setup>
    import PriceSelection from '../../components/PriceSelection.vue';
</script>

<template>
<<<<<<< HEAD
    <price-selection />
=======
    
    <div class="flex w-2/4 mx-auto mt-10">

        <div class="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 border-none rounded-lg shadow-none sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Montly Plan</h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold">₱</span>
                <span class="text-5xl font-extrabold tracking-tight">150</span>
                <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/monthly</span>
            </div>
            <ul role="list" class="space-y-5 my-7">
                <li class="items-center text-gray-500 text-lg">
                    After 7-Day Free Trial
                </li>
                <li class="flex py-2 space-x-3 items-center">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">50+ teaching tools</span>
                </li>
                <li class="flex py-2 space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Unlimited content generation</span>
                </li>
                <li class="flex py-2 space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Save and manage your work</span>
                </li>
                <li class="flex py-2 space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">No credit card required</span>
                </li>
                <li class="flex py-2 space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Cancel anytime</span>
                </li>
            </ul>
            <button type="button" class="text-white bg-main-color hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center w-full text-center">Try Free for 7 Days!</button>
        </div>

        <div class="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 border-none rounded-lg shadow-none sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Yearly Plan</h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold">₱</span>
                <span class="text-5xl font-extrabold tracking-tight">1600</span>
                <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/yearly</span>
            </div>
            <ul role="list" class="space-y-5 my-7">
                <li class="items-center text-gray-500 text-lg">
                    After 7-Day Free Trial
                </li>
                <li class="flex py-2 space-x-3 items-center">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">50+ teaching tools</span>
                </li>
                <li class="flex py-2 space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Unlimited content generation</span>
                </li>
                <li class="flex py-2 space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Save and manage your work</span>
                </li>
                <li class="flex py-2 space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">No credit card required</span>
                </li>
                <li class="flex py-2 space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">Cancel anytime</span>
                </li>
            </ul>
            <button type="button" class="text-white bg-main-color hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center w-full text-center">Try Free for 7 Days!</button>
        </div>

    </div>

>>>>>>> adb7174ff52a01da7ebbf67dcb17d6707ae50a5c
</template>