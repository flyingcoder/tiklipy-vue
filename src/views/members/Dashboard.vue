<script setup>
    import { TheCard } from 'flowbite-vue'
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
</script>

<template>
    <div class="mt-16">
        <div class="mb-16">
            <div class="block justify-center font-semibold">
                <span class="text-purple-600 tracking-wider text-sm uppercase mt-0 mb-1 font-poppins font-bold leading-6">WELCOME BACK</span>
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-gray-800 text-3xl mt-2 mb-3">Get Ready for the New School Year</h2>
                    </div>
                    <div>
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
                            Ticklipy
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
            <div class="grid pt-10 grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Newsletter</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Create a Newsletter, Blog Post, or Class Update</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Instantly generate custom letters and updates. </p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 1h10M6 5h10M6 9h10M1.49 1h.01m-.01 4h.01m-.01 4h.01"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Lesson Planning</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Generate a Five-E  Lesson Plan </h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Design a lesson that promotes active learning through five distinct stages. </p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Email</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Write an Email</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Generate effective emails with personalized tone and content. </p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Curriculum</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Generate an Article, Passage, or Short Story</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Instantly create content that is tailored to your individual needs and requirements.</p>
                    </div>
                </the-card>
            </div>
        </div>
        <div class="mb-16">
            <div class="block justify-center font-semibold">
                <span class="text-purple-600 tracking-wider text-sm uppercase mt-0 mb-1 font-poppins font-bold leading-6">ESSENTIALS</span>
                <h2 class="text-gray-800 text-3xl mt-2">Focus on the Basics</h2>
            </div>
            <div class="grid pt-10 grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Relationships</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Produce Feedback or Constructive Criticism</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Provide colleagues and students with valuable support and guidance.</p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Classroom</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Manage Problem Behavior</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Discover effective strategies for handling challenging behavior. </p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 0v6M4.5 7A2.5 2.5 0 0 1 7 4.5"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Language Arts</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Generate Comprehension Questions</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Quickly craft a variety of engaging questions based on any written text.</p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Curriculum</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Simplify a Concept </h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Make a topic or standard more accessible by discovering clear and simplified explanations. </p>
                    </div>
                </the-card>
                
            </div>
        </div>
        <div class="mb-16">
            <div class="block justify-center font-semibold">
                <span class="text-purple-600 tracking-wider text-sm uppercase mt-0 mb-1 font-poppins font-bold leading-6">TRY SOMETHING NEW</span>
                <h2 class="text-gray-800 text-3xl mt-2">Shortcuts You Should Know About</h2>
            </div>
            <div class="grid pt-10 grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Curriculum</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Complete an Analogy</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Enhance comprehension by creating links between concepts. </p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 0v6M4.5 7A2.5 2.5 0 0 1 7 4.5"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Language Arts</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Critically Analyze a Piece of Text </h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Objectively examine written work to evaluate its strengths and weaknesses.</p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 1H1m14 18H1m2 0v-4.333a2 2 0 0 1 .4-1.2L5.55 10.6a1 1 0 0 0 0-1.2L3.4 6.533a2 2 0 0 1-.4-1.2V1h10v4.333a2 2 0 0 1-.4 1.2L10.45 9.4a1 1 0 0 0 0 1.2l2.15 2.867a2 2 0 0 1 .4 1.2V19H3Z"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Science and Math</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Find a Science or Math Experiment</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Discover engaging ways to test theories and hypotheses through hands-on experimentation.</p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Curriculum </div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Find Similarities and Differences</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Identify similarities and differences between two ideas.</p>
                    </div>
                </the-card>
                <the-card href="#" class="w-full border-none rounded-lg shadow-none hover:bg-white hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                        <!-- <svg class="w-7 h-7 mb-9  text-main-color dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
                        </svg> -->
                        <svg class="w-7 h-7 mb-9 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
                        </svg>
                        <div class="font-medium text-lg group-hover:text-gray-500">Organization</div>
                        <a href="#">
                            <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">Generate a List</h5>
                        </a>
                        <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">Identify and organize key information around any subject matter.</p>
                    </div>
                </the-card>
            </div>
        </div>
    </div>
    
    
</template>