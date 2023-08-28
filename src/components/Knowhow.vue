<script setup>
    import { TheCard } from 'flowbite-vue';
</script>
<template>
    <div class="flex flex-wrap text-black mt-16 justify-between px-3 ">
        <router-link class="flex w-full md:w-[48%] lg:w-[32%] xl:max-w-[30rem] justify-center " :to="{ name: 'helps', params: { slug: 'accountancy-starting-you-tiklipy' } }">
            <the-card href="#" class="!max-w-2xl bg-white rounded-lg mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="">
                <div class="p-4  dark:bg-gray-800 dark:border-gray-700">
                    <img src="/tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="line-clamp-2 mb-2 text-2xl font-bold tracking-tight  dark:text-white">Knowhow Starting Your Tiklipy JourneyStarting Your TiklipyStarting Your Tiklipy</h5>
                        <p class="line-clamp-2 font-normal text-gray-500 text-md dark:text-gray-400">Embarking on Your Tiklipy Adventure: A Comprehensive Guide Comprehensive Guide Comprehensive Guide</p>
                    </div>
                </div>
            </the-card>
        </router-link>
        <router-link class="flex w-full md:w-[48%] lg:w-[32%] xl:max-w-[30rem] justify-center  " :to="{ name: 'helps', params: { slug: 'accountancy-starting-you-tiklipy' } }">
            <the-card href="#" class="!max-w-2xl bg-white rounded-lg  mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="">
                <div class="p-4  dark:bg-gray-800 dark:border-gray-700">
                    <img src="/tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="mb-2 line-clamp-2 text-2xl font-bold tracking-tight  dark:text-white">Knowhow Tiklipy Insights and Techniques</h5>
                        <p class="font-normal line-clamp-2text-gray-500 text-md dark:text-gray-400">Boosting Tool Performance for Enhanced Outcomes with Tiklipy</p>
                    </div>
                </div>
            </the-card>
        </router-link>
        <router-link class="flex w-full md:w-[48%] lg:w-[32%] xl:max-w-[30rem] justify-center " :to="{ name: 'helps', params: { slug: 'accountancy-starting-you-tiklipy' } }">
            <the-card href="#" class="!max-w-2xl bg-white rounded-lg  mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="">
                <div class="p-4  dark:bg-gray-800 dark:border-gray-700">
                    <img src="/tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="mb-2 line-clamp-2 text-2xl font-bold tracking-tight  dark:text-white">Knowhow Ethical Considerations with Tiklipy</h5>
                        <p class="font-normal line-clamp-2text-gray-500 text-md dark:text-gray-400">Navigating the Ethical Challenges of AI in Education with Tiklipy</p>
                    </div>
                </div>
            </the-card>
        </router-link>
    </div>
</template>