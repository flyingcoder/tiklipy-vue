<script setup>
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
</script>
<template>
    <div class="mt-7 px-3">
        <div class="block justify-center font-semibold mb-6">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-gray-800 text-3xl mt-2 mb-3">Lessons</h2>
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
                        Lessons
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/public/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/public/docs.png" width="60" alt="">                     
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-black">Lesson Plan</h3>
                            <a class="text-main-color mb-0 font-medium" href="#">View</a>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
            <div class="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/public/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/public/slide.png" width="30" alt="">                       
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-black">PowerPoint</h3>
                            <a class="text-main-color mb-0 font-medium" href="#">View</a>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
            <div class="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/public/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/public/docs.png" width="60" alt="">                      
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-black">Quiz</h3>
                            <a class="text-main-color mb-0 font-medium" href="#">View</a>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
            <div class="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div class="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden bg-[url('/public/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/public/docs.png" width="60" alt="">                     
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-black">Homework</h3>
                            <a class="text-main-color mb-0 font-medium" href="#">View</a>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
        </div>
    </div>
</template>