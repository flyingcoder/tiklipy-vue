<script setup>
    import { onMounted, ref } from 'vue';
    import LessonPlanModel from '../../models/LessonPlans';
    import { useAuthStore } from '../../stores/auth';
    import { useFormStore } from '../../stores/form';
    import HeaderFilter from '../../components/HeaderFilter.vue';
    import { Button } from 'flowbite-vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const formStore = useFormStore();
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
        <div class="w-full flex  gap-5">
            <div class="flex flex-wrap max-lg:justify-center w-full lg h-fit">
                <div class="w-full">
                    <HeaderFilter/>
                    <div v-for="lesson in lessons" :key="lesson.teacherId + '-lesson-card'" class="w-full sm:w-full bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain ">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>