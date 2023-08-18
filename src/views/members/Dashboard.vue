<script setup>
    import { ref, onMounted } from 'vue';
    import { TheCard } from 'flowbite-vue';
    import { useFormStore } from '../../stores/form';
    import cardData from '../../temp/cards';
    import { useRouter } from 'vue-router';

    const formStore = useFormStore();
    const router = useRouter();
    const animate = ref(false);

    onMounted(() => {
        animation();
    });

    const animation = () => {
        animate.value = true;
    };

    const cards = cardData;
    
    const cardIsClick = (card) => {
        formStore.setFormDetails(card);
        router.push({ name: 'generate' });
    }
</script>

<template>
    <div class="px-3 mt-7">
        <div class="mb-16" :class="{'animate__fadeInLeft': animate}">
            <div class="flex flex-wrap items-stretch max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generator'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
        <!-- <div class="mb-16">
            <div class="justify-center block mb-6 font-semibold">
                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">FUNDAMENTALS</span>
                <h2 class="mt-2 text-3xl text-gray-800">Concentrate on the fundamentals.</h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <router-link class="flex justify-center max-sm:w-full" :to="{name: 'generate'}">
                    <the-card class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                            </svg>
                            <div class="text-lg font-medium group-hover:text-gray-500">Relationships</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">Generate Feedback or Offer Constructive Criticism.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Offer valuable assistance and direction to both colleagues and students.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex justify-center max-sm:w-full" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                            </svg>
                            <div class="text-lg font-medium group-hover:text-gray-500">Classroom</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">Effectively Oversee Problematic Behavior.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Explore successful approaches to managing difficult behavior.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex justify-center max-sm:w-full" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 0v6M4.5 7A2.5 2.5 0 0 1 7 4.5"/>
                            </svg>
                            <div class="text-lg font-medium group-hover:text-gray-500">Language Arts</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">Effectively Oversee Problematic Behavior.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Efficiently generate a multitude of interesting questions from any written material.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
                <router-link class="flex justify-center max-sm:w-full" :to="{name: 'generate'}">
                    <the-card href="#" class="w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                            <svg class="w-8 mr-5 mb-7 text-main-color dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
                            </svg>
                            <div class="text-lg font-medium group-hover:text-gray-500">Curriculum</div>
                            <div class="flex flex-col justify-between leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white">Make a Complex Idea Easy to Understand.</h5>
                                <p class="font-normal text-gray-500 dark:text-gray-400">Make a subject or standard easier to understand by finding clear and simplified explanations.</p>
                            </div>
                        </div>
                    </the-card>
                </router-link>
            </div>
        </div> -->
    </div>
    
    
</template>