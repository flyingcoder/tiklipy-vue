<script setup>
    import { onMounted, ref } from 'vue';
    import LessonPlanModel from '../../models/lessonPlans';
    import { useAuthStore } from '../../stores/auth';

    const authStore = useAuthStore();
    const teacher = authStore.user;
    const lessonModel = new LessonPlanModel();
    const lessons = ref([]);

    onMounted(async () => {
        lessons.value = await lessonModel.getLessonPlansByTeacher(teacher.uid);
    });


</script>
<template>
    <div class="px-3 mt-7">
        <div class="flex flex-wrap max-lg:justify-center">
            <div v-for="lesson in lessons" :key="lesson.teacherId + '-lesson-card'" class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex">
                <router-link :to="{name: 'lesson', params: { id: lesson.slug }}" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="p-10 max-xs:!p-5">
                        <div class="flex items-center w-56 mb-5">
                            <img class="w-16 -ml-2" src="/grade.png" alt="">
                            <div class="text-5xl">{{ lesson.gradeLevel }}</div>
                        </div>
                        <div class="flex flex-col justify-between leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">
                                {{ lesson.topic }}
                            </h5>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>