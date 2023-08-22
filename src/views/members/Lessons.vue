<script setup>
    import { onMounted, ref, computed } from 'vue';
    import { useAuthStore } from '../../stores/auth';
    import { useFormStore } from '../../stores/form';
    import { TheCard } from 'flowbite-vue';
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
    const lessons = ref([]);
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
            <div class="flex flex-wrap w-full max-lg:justify-center lg h-fit">
                <div class="w-full">
                    <HeaderFilter @search-change="searchFilter"/>
                    <div v-if="searchQuery" class="px-3 mt-7">
                        <div class="mb-16">
                            <div class="flex flex-wrap items-stretch max-lg:justify-center">
                                <div v-for="(card, index) in cards" :key="index +'-card-generate-filtered'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                                    <the-card @click="cardIsClick(card)" href="#" class="lesson-card animate__animated animate__fadeInUp w-[29rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                                            <div class= "flex flex-wrap items-center justify-between group-hover:text-gray-500 mb-5"> 
                                            <i :class="card.icon" class="text-4xl font-medium text-main-color dark:text-white ti"></i>
                                                {{ card.category }}
                                            </div>
                                            <div class="flex flex-col justify-between leading-normal">
                                                <h5 class=" text-2xl font-bold tracking-tight dark:text-white">
                                                    {{ card.title }}
                                                </h5>
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
                                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes(tag.name)" href="#" class="lesson-card animate__animated animate__fadeInUp w-[29rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
                                        <div class="p-4 max-xs:!p-0 dark:bg-gray-800 dark:border-gray-700">
                                            <div class= "flex flex-wrap items-center justify-between group-hover:text-gray-500 mb-5"> 
                                            <i :class="card.icon" class="text-4xl font-medium text-main-color dark:text-white ti"></i>
                                                {{ card.category }}
                                            </div>
                                            <div class="flex flex-col justify-between leading-normal">
                                                <h5 class=" text-2xl font-bold tracking-tight dark:text-white">
                                                    {{ card.title }}
                                                </h5>
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