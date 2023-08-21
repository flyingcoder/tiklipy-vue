<script setup>
    import { onMounted, ref } from 'vue';
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
    });
</script>
<template>
    <div class="flex flex-wrap justify-between px-3 mt-7">
        <div class="flex w-full gap-5">
            <div class="flex flex-wrap w-full max-lg:justify-center lg h-fit">
                <div class="w-full">
                    <HeaderFilter/>
                    <div v-for="lesson in lessons" :key="lesson.teacherId + '-lesson-card'" class="w-full sm:w-full bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain ">
                        <router-link :to="{name: 'lesson', params: { id: lesson.slug }}" class="">
                            <div class="p-10 max-xs:!p-5 ">
                                <div class="flex justify-between w-full mb-10">
                                    <div class="px-2 text-white bg-green-500 border rounded-md text-md">English</div>
                                    <div class="flex items-center justify-end w-full">
                                        <img class="w-6 ml-2" src="/grade.png" alt="">
                                        <div class="text-lg">{{ lesson.gradeLevel }}</div>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-between leading-normal">
                                    <h5 class="mb-2 text-lg font-bold tracking-tight  line-clamp-2 wh lg:text-3xl text-main-color dark:text-white">
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