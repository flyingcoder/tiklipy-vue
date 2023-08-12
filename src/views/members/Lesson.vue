<script setup>
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
    import {ref} from 'vue';
    import LessonPlan from '../../components/LessonPlan.vue';
    import Activities from '../../components/Activities.vue';
    import Projects from '../../components/Projects.vue';
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
        <div class="flex flex-wrap justify-between mb-6">
            <div class="w-full sm:w-[49%] lg:w-[32%] cursor-pointer mb-3" @click="setActiveView('lessonPlan')">
                <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/docs.png" width="60" alt="">                     
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-main-color">Lesson Plan</h3>
                            <p class="text-gray-700 mb-0 text-lg font-light bg-transparent p-0 hover:border-transparent focus:outline-none">Generated Lesson Plan</p>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
            <div class="w-full sm:w-[49%] lg:w-[32%] cursor-pointer mb-3" @click="setActiveView('ppt')">
                <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/slide.png" width="30" alt="">                       
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-main-color">PowerPoint</h3>
                            <p class="text-gray-700 mb-0 text-lg font-light bg-transparent p-0 hover:border-transparent focus:outline-none">Generated PowerPoint</p>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
            <div class="w-full sm:w-[49%] lg:w-[32%] cursor-pointer mb-3" @click="setActiveView('quiz')">
                <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/docs.png" width="60" alt="">                      
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-main-color">Quiz</h3>
                            <p class="text-gray-700 mb-0 text-lg font-light bg-transparent p-0 hover:border-transparent focus:outline-none">Generated Quiz</p>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
            <div class="w-full sm:w-[49%] lg:w-[32%] cursor-pointer mb-3" @click="setActiveView('homework')">
                <div class="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/docs.png" width="60" alt="">                     
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-main-color">Homework</h3>
                            <p class="text-gray-700 mb-0 text-lg font-light bg-transparent p-0 hover:border-transparent focus:outline-none">Generated Homework</p>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
            <div class="w-full sm:w-[49%] lg:w-[32%] cursor-pointer mb-3" @click="setActiveView('activities')">
                <div class="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/docs.png" width="60" alt="">                     
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-main-color">Activities</h3>
                            <p class="text-gray-700 mb-0 text-lg font-light bg-transparent p-0 hover:border-transparent focus:outline-none">Generated Activities</p>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
            <div class="w-full sm:w-[49%] lg:w-[32%] cursor-pointer mb-3" @click="setActiveView('projects')">
                <div class="bg-white dark:bg-slate-800 shadow rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
                    <div class="flex justify-between xl:gap-x-2 items-cente">
                        <div class="absolute -left-6 -top-4 text-blue-500 p-3 text-center inline-flex items-center justify-center w-32 h-32 ">
                            <img src="/docs.png" width="60" alt="">                     
                        </div>
                        <div class="self-center ml-auto text-right">                            
                            <h3 class="my-1 font-semibold text-2xl text-main-color">Projects</h3>
                            <p class="text-gray-700 mb-0 text-lg font-light bg-transparent p-0 hover:border-transparent focus:outline-none">Generated Projects</p>
                        </div>
                    </div>
                </div> <!--end inner-grid--> 
            </div>
        </div>

        <div class="w-full bg-white rounded-md p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain text-black">
            <LessonPlan v-if="isViewActive('lessonPlan')" />
            <Homework v-if="isViewActive('homework')" />
            <Quiz v-if="isViewActive('quiz')" />
            <Activities v-if="isViewActive('activities')"/>
            <Projects v-if="isViewActive('projects')" />
            <PPT v-if="isViewActive('ppt')" @click="$emit(hidePowerPoint)" />
        </div>
    </div>
</template>