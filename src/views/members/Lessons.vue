<script setup>
    import { onMounted, ref } from 'vue';
    import LessonPlanModel from '../../models/LessonPlans';
    import { useAuthStore } from '../../stores/auth';
    import { useFormStore } from '../../stores/form';
    import HeaderFilter from '../../components/HeaderFilter.vue';
    import cardData from '../../temp/cards';
    import { Button } from 'flowbite-vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const formStore = useFormStore();
    const authStore = useAuthStore();
    const teacher = authStore.user;
    const rawCards = cardData;
    const searchQuery = ref('');
    const lessonModel = new LessonPlanModel();
    const lessons = ref([]);

    onMounted(async () => {
        lessons.value = await lessonModel.getLessonPlansByTeacher(teacher.uid);
    });

    const cards = computed(() => {
        return rawCards.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    const searchFilter = (query) => {
        searchQuery.value = query
    }


</script>
<template>
    <div class="px-3 mt-7 flex flex-wrap justify-between">
        <div class="w-full flex  gap-5">
            <div class="flex flex-wrap max-lg:justify-center w-full lg h-fit">
                <div class="w-full">
                    <HeaderFilter @search-change="searchFilter"/>
                    <div v-if="searchQuery" class="px-3 mt-7">
                        <div class="mb-16">
                            <div class="flex flex-wrap items-stretch max-lg:justify-center">
                                <div v-for="(card, index) in cards" :key="index +'-card-generate-filtered'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                                    <the-card @click="cardIsClick(card)" href="#" class="animate__animated animate__fadeInUp w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                                            <i :class="card.icon" class="text-4xl font-medium text-main-color dark:text-white ti"></i>
                                            <div class= "mt-7 group-hover:text-gray-500">
                                                {{ card.category }}
                                            </div>
                                            <div class="flex flex-col justify-between leading-normal">
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                                                    {{ card.title }}
                                                </h5>
                                                <p class="font-normal text-gray-500 dark:text-gray-400">
                                                    {{ card.description }}
                                                </p>
                                            </div>
                                        </div>
                                    </the-card>
                                </div>     
                            </div>
                        </div>
                    </div>
                    <div v-if="!searchQuery" class="px-3 mt-7">
                        <div v-for="tag in tags" :key="tag.name + 'tag-div'" class="mb-16" >
                            <div class="justify-center block mb-6 font-semibold">
                                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                                    {{ tag.name }}</span>
                                <h2 class="mt-2 text-3xl text-gray-800">
                                    {{ tag.desc }}</h2>
                            </div>
                            <div class="flex flex-wrap max-lg:justify-center">
                                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes(tag.name)" href="#" class="animate__animated animate__fadeInUp w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                                            <i :class="card.icon" class="text-4xl font-medium text-main-color dark:text-white ti"></i>
                                            <div class= "mt-7 group-hover:text-gray-500">
                                                {{ card.category }}
                                            </div>
                                            <div class="flex flex-col justify-between leading-normal">
                                                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                                                    {{ card.title }}
                                                </h5>
                                                <p class="font-normal text-gray-500 dark:text-gray-400">
                                                    {{ card.description }}
                                                </p>
                                            </div>
                                        </div>
                                    </the-card>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>