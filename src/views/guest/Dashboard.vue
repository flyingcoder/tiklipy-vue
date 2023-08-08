<script setup>
    import { TheCard } from 'flowbite-vue';

    const cardsDataSection1 = [
        {
            title: 'Create a Newsletter, Blog Post, or Class Update',
            subtitle: 'Newsletter',
            icon: "",
            description: 'Instantly generate custom letters and updates. ',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Generate a Five-E Lesson Plan',
            subtitle: 'Newsletter',
            description: 'Design a lesson that promotes active learning through five distinct stages.',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Write an Email',
            subtitle: 'Email',
            description: 'Generate effective emails with personalized tone and content. ',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Generate an Article, Passage, or Short Story',
            subtitle: 'Curriculum',
            description: 'Instantly create content that is tailored to your individual needs and requirements. ',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
    ];

    const cardsDataSection2 = [
        {
            title: 'Produce Feedback or Constructive Criticism',
            subtitle: 'Relationships',
            description: 'Provide colleagues and students with valuable support and guidance.',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Manage Problem Behavior',
            subtitle: 'Classroom',
            description: 'Discover effective strategies for handling challenging behavior. ',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Generate Comprehension Questions',
            subtitle: 'Language Arts',
            description: 'Quickly craft a variety of engaging questions based on any written text. ',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Simplify a Concept ',
            subtitle: 'Curriculum',
            description: 'Make a topic or standard more accessible by discovering clear and simplified explanations. ',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
    ];

    const cardsDataSection3 = [
        {
            title: 'Complete an Analogy',
            subtitle: 'Curriculum',
            description: 'Enhance comprehension by creating links between concepts. ',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Critically Analyze a Piece of Text ',
            subtitle: 'Language Arts',
            description: 'Objectively examine written work to evaluate its strengths and weaknesses.',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Find a Science or Math Experiment',
            subtitle: 'Science & Math',
            description: 'Discover engaging ways to test theories and hypotheses through hands-on experimentation.',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Find Similarities and Differences',
            subtitle: 'Curriculum',
            description: 'Identify similarities and differences between two ideas.',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
        {
            title: 'Generate a List',
            subtitle: 'Organization',
            description: 'Identify and organize key information around any subject matter.',
            icon: 'w-7 h-7 mb-9 text-main-color text-gray-800 dark:text-white',
        },
    ];

    const welcomeData = [
        {
            mainColor: 'text-main-color',
            welcomeText: 'WELCOME BACK',
            title: 'Get Ready for the New School Year',
            textColor: 'text-black',
            textShade: 'text-gray-700',
            cardsData: cardsDataSection1, 
        },
        {
            mainColor: 'text-main-color',
            welcomeText: 'ESSENTIALS',
            title: 'Focus on the Basics',
            textColor: 'text-black',
            textShade: 'text-gray-700',
            cardsData: cardsDataSection2, 
        },
        {
            mainColor: 'text-main-color',
            welcomeText: 'TRY SOMETHING NEW',
            title: 'Shortcuts You Should Know About',
            textColor: 'text-black',
            textShade: 'text-gray-700',
            cardsData: cardsDataSection3, 
        },
    ];
</script>
<template>
    <div class="mt-10">
        <!-- Welcome Section -->
        <div v-for="(data, index) in welcomeData" :key="'welcome_' + index" class="mb-16">
            <div class="block text-left">
                <span :class="data.mainColor + ' font-bold'">{{ data.welcomeText }}</span>
                <div :class="'text-3xl ' + data.textColor + ' mt-2 font-bold ' + data.textShade">{{ data.title }}</div>
            </div>
            <div class="grid pt-8 grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <the-card v-for="(card, cardIndex) in data.cardsData" :key="'card_' + cardIndex" href="#" class="w-full border-none rounded-lg shadow-none hover:shadow-md" style="max-width: 100% !important">
                    <div class="p-6 dark:bg-gray-800 dark:border-gray-700">
                    <svg :class="card.icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"/>
                    </svg>
                    <div class="font-medium text-lg group-hover:text-gray-500">{{ card.subtitle }}</div>
                    <a href="#">
                        <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white">{{ card.title }}</h5>
                    </a>
                    <p class="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">{{ card.description }}</p>
                    </div>
                </the-card>
            </div>
        </div>
    </div>
  </template>