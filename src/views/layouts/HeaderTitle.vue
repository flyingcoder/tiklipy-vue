<script setup>
import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
</script>
<template>
    <div class="mt-7 px-4 lg:container md:mx-auto">
        <div class="block justify-center font-semibold">
            <span class="text-main-color tracking-wider text-sm uppercase mt-0 mb-1 font-poppins font-bold leading-6">WELCOME BACK</span>
            <div class="flex flex-wrap md:justify-between items-center ">
                <div>
                    <h2 class="text-gray-800 text-2xl  lg:text-3xl mt-2 mb-3">Prepare yourself for the upcoming academic year.</h2>
                </div>
                <div class="w-full md:w-max flex justify-end	">
                    <router-link :to="{name: 'generate'}" class="text-white bg-main-color hover:text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                        <svg class="w-3 h-3 text-white mr-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        Generate
                    </router-link>
                </div>
            </div>
            <div class="mb-4">
                <Breadcrumb class="text-gray-800">
                    <BreadcrumbItem href="#" class="no-icon text-gray-600 hover:text-gray-800 transition duration-300">
                        Tiklipy
                    </BreadcrumbItem>
                    <BreadcrumbItem href="#" class="text-gray-600 hover:text-gray-800 transition duration-300">
                        Members
                    </BreadcrumbItem>
                    <BreadcrumbItem class="text-gray-800 font-semibold">
                        Dashboard
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
    </div>
</template>