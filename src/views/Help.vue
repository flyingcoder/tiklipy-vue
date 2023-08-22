<script setup>
    import { Input, Button } from 'flowbite-vue'
</script>

<template>
    <section class="bg-secondary-color dark:bg-gray-900">
        <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-9 text-4xl pt-7 font-semibold tracking-tight leading-none text-white md:text-3xl lg:text-5xl dark:text-white">How can Tiklipy help you effectively?</h1>
           <div>
                <Input size="lg" placeholder="Enter your search query " class="!outline-transparent !border-0 !border-transparent">
                    <template #prefix>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </template>
                    <template #suffix>
                    <Button class="max-xs:hidden bg-main-color font-semibold outline-transparent !border-0 border-transparent hover:bg-secondary-color">Search</Button>
                    </template>
                </Input>
                <Button class="w-full xs:hidden mt-2 bg-main-color hover:bg-white font-semibold focus:outline-transparent focus:border-transparent">Search</Button>
           </div>
           <p class="text-lg my-5 font-light">Commonly Addressed Subjects: Tiklipy's Functionality, Billing Queries, and FAQs.</p>
        </div>
    </section>
    <div class="flex flex-wrap text-black mt-16 justify-between px-3 ">
        <router-link class="flex w-full justify-center md:w-[48%] lg:w-[32%] md:max-w-[30rem]" :to="{name: 'generate'}">
            <the-card href="#" class=" bg-white rounded-lg mb-5 flex border-none shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="">
                <div class="p-4  dark:bg-gray-800 dark:border-gray-700">
                    <img src="tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Starting Your Tiklipy Journey</h5>
                        <p class="font-normal text-gray-500 text-md dark:text-gray-400">Embarking on Your Tiklipy Adventure: A Comprehensive Guide</p>
                    </div>
                </div>
            </the-card>
        </router-link>
        <router-link class="flex w-full justify-center md:w-[48%] lg:w-[32%] md:md:max-w-[30rem] " :to="{name: 'generate'}">
            <the-card href="#" class=" bg-white rounded-lg  mb-5 flex border-none shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="">
                <div class="p-4  dark:bg-gray-800 dark:border-gray-700">
                    <img src="tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-white">Tiklipy Insights and Techniques</h5>
                        <p class="font-normal text-gray-500 text-md dark:text-gray-400">Boosting Tool Performance for Enhanced Outcomes with Tiklipy</p>
                    </div>
                </div>
            </the-card>
        </router-link>
        <router-link class="flex w-full justify-center md:w-[48%] lg:w-[32%] md:max-w-[30rem] " :to="{name: 'generate'}">
            <the-card href="#" class="bg-white rounded-lg  mb-5 flex border-none shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="">
                <div class="p-4  dark:bg-gray-800 dark:border-gray-700">
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
