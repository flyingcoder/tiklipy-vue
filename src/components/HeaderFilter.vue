<script setup>
    import { useRoute } from 'vue-router';
    import { Button } from 'flowbite-vue';
    // import { onMounted, ref } from 'vue';
    // // import LessonPlanModel from './models/lessonPlans';
    // // import { useAuthStore } from './stores/auth';
    // import LessonPlanModel from '../models/lessonPlans';

    // const authStore = useAuthStore();
    // const teacher = authStore.user;
    const route = useRoute();
    // const lessonModel = new LessonPlanModel();
    // const lessons = ref([]);

    // onMounted(async () => {
    //     lessons.value = await lessonModel.getLessonPlansByTeacher(teacher.uid);
    // });
    
</script>
<template>
    <div class="w-full sm:w-full bg-white rounded-lg mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain">
        <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
            <div class="flex justify-between xl:gap-x-2 items-cente">
                <div class="absolute inline-flex items-center justify-center text-center text-main-color ">
                    <img src="/android-chrome-512x512.png" width="50" alt="">                       
                </div>
                <div class="self-center ml-auto text-right flex">
                    <div class="flex mr-5" v-if="route.path != '/members'">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="US">Alphabetical</option>
                            <option value="CA">Grade Level</option>
                            <option value="FR">Date Created</option>
                        </select>
                    </div>
                    <Button type="submit" size="lg" v-if="route.path != '/members'" class="bg-main-color mr-5 hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-base font-semibold">Generate</Button> 
                    <div :class="route.path !== '/members' ? 'w-[300px]' : 'w-[500px]'">
                        <form>   
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <input type="search" id="default-search" class="block w-full p-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search tools..." required>
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                            </div>
                        </form>
                    </div>                    
                    <!-- <h3 class="my-1 text-2xl font-semibold text-main-color">Lesson Plan</h3>
                    <p class="p-0 mb-0 text-lg font-light text-gray-700 bg-transparent hover:border-transparent focus:outline-none">Effective and Engaging Lesson Plans</p> -->
                </div>
            </div>
        </div> <!--end inner-grid--> 
    </div>
</template>