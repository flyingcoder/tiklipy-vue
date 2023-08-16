<script setup>
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute();
</script>
<template>
    <div class="px-4 mt-7 lg:container md:mx-auto">
        <div class="justify-center block font-semibold">
            <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                {{ route.meta.pageTitle ? route.meta.pageTitle : 'WELCOME BACK' }}
            </span>
            <div class="flex flex-wrap items-start md:justify-between ">
                <div class="md:w-[80%] ">
                    <h2 class="mt-2 mb-3 text-2xl text-gray-800 lg:text-3xl">
                        {{ route.meta.siteDescription }}
                    </h2>
                </div>
                <!-- div v-if="$route.name !== 'account'" class="flex justify-end w-full md:w-max md:mt-2">
                    <router-link :to="{name: 'generate'}" class="max-sm:w-full max-sm:justify-center text-white bg-main-color hover:text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                        <svg class="w-3 h-3 mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        Generate
                    </router-link>
                </!-->
            </div>
            <div class="mb-4">
                <Breadcrumb class="text-gray-800">
                    <BreadcrumbItem href="/members" class="text-gray-600 transition duration-300 no-icon hover:text-gray-800">
                        <router-link :to="{name: 'dashboard'}">
                            Tiklipy
                        </router-link> 
                    </BreadcrumbItem>
                    <BreadcrumbItem class="font-semibold text-gray-800">
                        {{ route.meta.displayName }}
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
    </div>
</template>