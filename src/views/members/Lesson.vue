<script setup>
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
    import {ref} from 'vue';
    import LessonPlan from '../../components/LessonPlan.vue';
    import Homework from '../../components/Homework.vue';
    import Quiz from '../../components/Quiz.vue';
    import PPT from '../../components/PPT.vue';

    const activeView = ref('lessonPlan');

    const setActiveView = (view) => {
        activeView.value = view;
    };

    const isViewActive = (view) => {
        return activeView.value === view;
    };

</script>
<template>
    <div class="mt-7 px-3">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="md:col-span-2 lg:col-span-2 xl:col-span-1">
                <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/public/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/public/docs.png" width="60" alt="">                     
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-black">Lesson Plan</h3>
                            <button @click="setActiveView('lessonPlan')" class="text-main-color mb-0 font-medium bg-transparent p-0 hover:border-transparent focus:outline-none">View</button>
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
                            <button  @click="setActiveView('ppt')" class="text-main-color mb-0 font-medium bg-transparent p-0 hover:border-transparent focus:outline-none">View</button>
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
                            <button  @click="setActiveView('quiz')" class="text-main-color mb-0 font-medium bg-transparent p-0 hover:border-transparent focus:outline-none">View</button>
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
                            <button  @click="setActiveView('homework')" class="text-main-color mb-0 font-medium bg-transparent p-0 hover:border-transparent focus:outline-none">View</button>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
        </div>

        <div class="w-full bg-white rounded-md p-4 relative overflow-hidden bg-[url('/public/p-1.png')] bg-no-repeat bg-contain text-black">
            <LessonPlan v-if="isViewActive('lessonPlan')" />
            <Homework v-if="isViewActive('homework')" />
            <Quiz v-if="isViewActive('quiz')" />
            <PPT v-if="isViewActive('ppt')" @click="$emit(hidePowerPoint)" />
        </div>
    </div>
</template>