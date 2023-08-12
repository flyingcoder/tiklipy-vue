<script setup>
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
</script>
<template>
    <div class="mt-7 px-3">
        <div class="flex flex-wrap max-lg:justify-center">
            <div class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex">
                <router-link :to="{ name: 'assessment', params: { type: 'quiz', id: 1 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="p-10 max-xs:!p-5">
                        <div class="flex items-center w-56 mb-5">
                            <img class="w-16 -ml-2" src="/grade.png" alt="">
                            <div class="text-5xl ">5</div>
                        </div>
                        <div class="flex flex-col justify-between leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">Literary Analysis: Exploring Classic Literature</h5>
                            <p class=" font-normal text-gray-500 dark:text-gray-400">Delve into the captivating world of classic literature through this enriching lesson on literary analysis. In this course, students will embark on a journey...</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex ">
                <router-link :to="{ name: 'assessment', params: { type: 'homework', id: 1 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="p-10 max-xs:!p-5">
                        <div class="flex items-center w-56 mb-5">
                            <img class="w-16 -ml-2" src="/grade.png" alt="">
                            <div class="text-5xl">2</div>
                        </div>
                        <div class="flex flex-col justify-between leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">Math Puzzles and Problem Solving</h5>
                            <p class="font-normal text-gray-500 dark:text-gray-400">Engage your mathematical curiosity with the captivating world of 'Math Puzzles and Problem Solving.' In this interactive lesson, students will embark..</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex ">
                <router-link :to="{ name: 'assessment', params: { type: 'project', id: 1 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="p-10 max-xs:!p-5">
                        <div class="flex items-center w-56 mb-5">
                            <img class="w-16 -ml-2" src="/grade.png" alt="">
                            <div class="text-5xl">10</div>
                        </div>
                        <div class="flex flex-col justify-between leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">Historical Figures and Their Impact</h5>
                            <p class="font-normal text-gray-500 dark:text-gray-400">Unveil the rich tapestry of history through the captivating lesson 'Historical Figures and Their Impact...</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>