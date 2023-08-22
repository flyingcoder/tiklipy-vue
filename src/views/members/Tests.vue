<script setup>
    import { onMounted, ref, computed } from 'vue';
    import { useAuthStore } from '../../stores/auth';
    import { useFormStore } from '../../stores/form';
    import { TheCard } from 'flowbite-vue';
    import HeaderFilter from '../../components/HeaderFilter.vue';
    import cardData from '../../temp/cards';
    import { useRouter } from 'vue-router';


    const authStore = useAuthStore();
    const teacher = authStore.user;
    const lessons = ref([]);
    const rawCards = cardData;
    const searchQuery = ref('');
    const router = useRouter();
    const formStore = useFormStore();
    const tags = ref([
        { name: 'featured', desc: ''},
        { name: 'lessons', desc: 'Effortlessly generate a lesson plan tailored to your teaching style.'},
        { name: 'tools', desc: 'Empowering Efficiency: Unleashing the Potential of Essential Tools.'},
        { name: 'explore', desc: 'Unveiling the Unknown: Embarking on Journeys of Exploration'},
        { name: 'manage', desc: 'Navigating Success: Mastering the Art of Effective Management'},
        { name: 'organize', desc: 'Harmonize and Systematize: The Essence of Effective Organization'},
        { name: 'modify', desc: 'Crafting Change: The Art of Skillful Modification'},
        { name: 'write', desc: 'Effortlessly Generate Diverse Content with Personalized Style and Substance.'},
    ]);

    onMounted(async () => {
    });

    const cards = computed(() => {
        return rawCards.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    const searchFilter = (query) => {
        searchQuery.value = query
    }

</script>
<template>
    <div class="flex flex-wrap justify-between px-3 mt-7">
        <div class="flex w-full gap-5">
            <div class="flex flex-wrap w-full max-lg:justify-center md:w-full lg h-fit">
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
    <!-- <div class="px-3 mt-7">
        <div class="flex flex-wrap max-lg:justify-center">
            <div class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex">
                <router-link :to="{ name: 'assessment', params: { type: 'tests', id: 1 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="p-10 max-xs:!p-5">
                        <div class="flex items-center w-56 mb-5">
                            <img class="w-16 -ml-2" src="/grade.png" alt="">
                            <div class="text-5xl ">5</div>
                        </div>
                        <div class="flex flex-col justify-between leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">Literary Analysis: Exploring Classic Literature</h5>
                            <p class="font-normal text-gray-500  dark:text-gray-400">Delve into the captivating world of classic literature through this enriching lesson on literary analysis. In this course, students will embark on a journey...</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex ">
                <router-link :to="{ name: 'assessment', params: { type: 'tests', id: 2 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                <router-link :to="{ name: 'assessment', params: { type: 'tests', id: 3 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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