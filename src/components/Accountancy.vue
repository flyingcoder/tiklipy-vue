<script setup></script>
<template>
   <div class="grid grid-cols-3 text-black gap-7 mt-16">
        <router-link class="flex max-sm:w-full justify-center" :to="{name: 'generate'}">
            <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                    <img src="tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Starting Your Tiklipy Journey</h5>
                        <p class="font-normal text-gray-500 text-md dark:text-gray-400">Embarking on Your Tiklipy Adventure: A Comprehensive Guide</p>
                    </div>
                </div>
            </the-card>
        </router-link>
        <router-link class="flex max-sm:w-full justify-center" :to="{name: 'generate'}">
            <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                    <img src="tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Tiklipy Insights and Techniques</h5>
                        <p class="font-normal text-gray-500 text-md dark:text-gray-400">Boosting Tool Performance for Enhanced Outcomes with Tiklipy</p>
                    </div>
                </div>
            </the-card>
        </router-link>
        <router-link class="flex max-sm:w-full justify-center" :to="{name: 'generate'}">
            <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                    <img src="tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Ethical Considerations with Tiklipy</h5>
                        <p class="font-normal text-gray-500 text-md dark:text-gray-400">Navigating the Ethical Challenges of AI in Education with Tiklipy</p>
                    </div>
                </div>
            </the-card>
        </router-link>
    </div>
</template>