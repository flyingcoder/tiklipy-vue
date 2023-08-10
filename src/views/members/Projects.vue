<script setup>
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
</script>
<template>
    <div class="mt-7 px-3">
        <div class="block justify-center font-semibold mb-6">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-gray-800 text-3xl mt-2 mb-3">Projects</h2>
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
                        Projects
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <router-link :to="{name: 'lesson', params: { id: 1 }}" class="flex bg-[url('/public/p-1.png')] bg-no-repeat bg-contain flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="flex items-center w-56 justify-center">
                        <img class="w-16" src="/public/grade.png" alt="">
                        <div class="text-5xl -ml-2">5</div>
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">Literary Analysis: Exploring Classic Literature</h5>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Delve into the captivating world of classic literature through this enriching lesson on literary analysis. In this course, students will embark on a journey...</p>
                    </div>
                </router-link>
            </div>
            <div class="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <router-link :to="{name: 'lesson', params: { id: 2 }}" class="flex bg-[url('/public/p-1.png')] bg-no-repeat bg-contain flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="flex items-center w-56 justify-center">
                        <img class="w-16" src="/public/grade.png" alt="">
                        <div class="text-5xl -ml-2">2</div>
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">Math Puzzles and Problem Solving</h5>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Engage your mathematical curiosity with the captivating world of 'Math Puzzles and Problem Solving.' In this interactive lesson, students will embark..</p>
                    </div>
                </router-link>
            </div>
            <div class="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <router-link :to="{name: 'lesson', params: { id: 3 }}" class="flex bg-[url('/public/p-1.png')] bg-no-repeat bg-contain flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="flex items-center w-56 justify-center">
                        <img class="w-16" src="/public/grade.png" alt="">
                        <div class="text-5xl -ml-2">10</div>
                    </div>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">Historical Figures and Their Impact</h5>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Unveil the rich tapestry of history through the captivating lesson 'Historical Figures and Their Impact...</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>