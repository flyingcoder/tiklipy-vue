<script setup>
    import { onMounted, ref } from 'vue';
    import LessonPlanModel from '../../models/lessonPlans';
    import { useAuthStore } from '../../stores/auth';
    import Filter from '../../components/Filter.vue';


    const authStore = useAuthStore();
    const teacher = authStore.user;
    const lessonModel = new LessonPlanModel();
    const lessons = ref([]);

    onMounted(async () => {
        lessons.value = await lessonModel.getLessonPlansByTeacher(teacher.uid);
    });
</script>
<template>
    <div class="px-3 mt-7 flex flex-wrap justify-between">
        <div class="w-full flex">
            <div class="flex flex-wrap max-lg:justify-center w-full md:w-3/4 lg h-fit">
                <!-- <div v-for="lesson in lessons" :key="lesson.teacherId + '-lesson-card'" class="w-full sm:w-[47%] bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain ">
                    <router-link :to="{name: 'lesson', params: { id: lesson.slug }}" class=" ">
                        <div class="p-10 max-xs:!p-5 ">
                            <div class="w-full flex justify-between mb-10">
                                <div class="text-md border px-2 rounded-md bg-green-500 text-white">English</div>
                                <div class="flex items-center justify-end w-full">
                                    <img class="w-6 ml-2" src="/grade.png" alt="">
                                    <div class="text-lg">{{ lesson.gradeLevel }}</div>
                                </div>
                            </div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class=" line-clamp-2 wh mb-2 text-lg lg:text-3xl font-bold tracking-tight text-main-color dark:text-white">
                                    {{ lesson.topic }}
                                </h5>
                            </div>
                        </div>
                    </router-link>
                </div> -->
                <div class="w-full sm:w-[47%] bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain ">
                    <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain cursor-pointer">
                        <div class="flex justify-between xl:gap-x-2 items-cente">
                            <div class="absolute inline-flex items-center justify-center w-40 h-32 p-3 text-center -left-6 -top-4 text-main-color ">
                                <img src="/android-chrome-512x512.png" width="50" alt="">                       
                            </div>
                            <div class="self-center ml-auto text-right">                            
                                <h3 class="my-1 text-2xl font-semibold text-main-color">Generate Project</h3>
                                <p class="p-0 mb-0 text-lg font-light text-gray-700 bg-transparent hover:border-transparent focus:outline-none">Success through Effective Project Management</p>
                            </div>
                        </div>
                    </div> <!--end inner-grid--> 
                </div>
            </div>
            <div class="form w-full md:w-1/4">
                <Filter filter-title="Projects"/>
            </div>
        </div>
    </div>
    <!-- <div class="mt-7 px-3">
        <div class="flex flex-wrap max-lg:justify-center">
            <div class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex">
                <router-link :to="{ name: 'assessment', params: { type: 'projects', id: 1 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                <router-link :to="{ name: 'assessment', params: { type: 'projects', id: 2 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                <router-link :to="{ name: 'assessment', params: { type: 'projects', id: 3 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
    </div> -->
</template>