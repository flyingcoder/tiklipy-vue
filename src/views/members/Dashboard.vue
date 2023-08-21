<script setup>
    import { ref, onMounted } from 'vue';
    import { TheCard } from 'flowbite-vue';
    import { useFormStore } from '../../stores/form';
    import cardData from '../../temp/cards';
    import HeaderFilter from '../../components/HeaderFilter.vue';
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
    <HeaderFilter/>
    <div class="px-3 mt-7">
        <div class="mb-16" :class="{'animate__fadeInLeft': animate}">
            <div class="flex flex-wrap items-stretch max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes('featured')" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
        <div class="mb-16">
            <div class="justify-center block mb-6 font-semibold">
                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                    LESSONS</span>
                <h2 class="mt-2 text-3xl text-gray-800">
                    Effortlessly generate a lesson plan tailored to your teaching style.</h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes('lessons')" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
        <div class="mb-16">
            <div class="justify-center block mb-6 font-semibold">
                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                    TOOLS</span>
                <h2 class="mt-2 text-3xl text-gray-800">
                    Empowering Efficiency: Unleashing the Potential of Essential Tools</h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes('tools')" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
        <div class="mb-16">
            <div class="justify-center block mb-6 font-semibold">
                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                    EXPLORE</span>
                <h2 class="mt-2 text-3xl text-gray-800">
                    Unveiling the Unknown: Embarking on Journeys of Exploration
                </h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes('explore')" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
        <div class="mb-16">
            <div class="justify-center block mb-6 font-semibold">
                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                    MANAGEMENT</span>
                <h2 class="mt-2 text-3xl text-gray-800">
                    Navigating Success: Mastering the Art of Effective Management
                </h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes('manage')" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
        <div class="mb-16">
            <div class="justify-center block mb-6 font-semibold">
                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                    ORGANIZE</span>
                <h2 class="mt-2 text-3xl text-gray-800">
                    Harmonize and Systematize: The Essence of Effective Organization</h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes('organize')" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
        <div class="mb-16">
            <div class="justify-center block mb-6 font-semibold">
                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                    MODIFY</span>
                <h2 class="mt-2 text-3xl text-gray-800">
                    Crafting Change: The Art of Skillful Modification</h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes('modify')" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
        <div class="mb-16">
            <div class="justify-center block mb-6 font-semibold">
                <span class="mt-0 mb-1 text-sm font-bold leading-6 tracking-wider uppercase text-main-color font-poppins">
                    WRITE</span>
                <h2 class="mt-2 text-3xl text-gray-800">
                    Effortlessly Generate Diverse Content with Personalized Style and Substance.</h2>
            </div>
            <div class="flex flex-wrap max-lg:justify-center">
                <div v-for="(card, index) in cards" :key="index +'-card-generate'" class="flex justify-center max-sm:w-full"  @click="cardIsClick(card)">
                    <the-card @click="cardIsClick(card)" v-if="card.tag.includes('write')" href="#" class="w-[30rem] bg-white sm:mr-5 mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="max-width: 100% !important">
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
    
    
</template>