<script setup>
    import expressModel from "../../models/express";
    import GeneratedResourceModel from "../../models/generatedResources";
    import { useGenerateStore } from '../../stores/generate';
    import { onMounted, ref, watch, defineProps  } from 'vue'
    import { Input } from 'flowbite-vue';
    import { Select } from 'flowbite-vue';
    import { Alert } from 'flowbite-vue';
    import { Textarea } from 'flowbite-vue';
    import { Button } from 'flowbite-vue';
    import 'animate.css';

    defineEmits(['generation-complete']);
    const loaderStore = useGenerateStore();

    const toggleAssesment = ref(false);
    const toggleHomework = ref(false);
    const selectGrade = ref('1');
    const selectSubject = ref('Math');
    const asssesmentQuestionType = ref('');
    const homeworkQuestionType = ref('');
    const message = ref('');
    const topic = ref('');
    const generatedTopic = ref('');
    const homeworkNumberOfQuestions = ref('');
    const assessmentNumberOfQuestions = ref('');
    const backEndModel = new expressModel();
    const copyContent = ref(false);
    const isGenerating = ref(false);
    const generateResource = new GeneratedResourceModel();

    const questionType = ref([
    { value: 'MC', name: 'Multiple Choice' },
    { value: 'T/F', name: 'True/False' },
    { value: 'Enumeration', name: 'Enumeration' },
    { value: 'Essay', name: 'Essay' },
    { value: 'Oral', name: 'Oral' },
    { value: 'short answer', name: 'Short Answer' },
    { value: 'computational', name: 'Computational' },
    ]);

    const subject = ref([
    { value: 'Math', name: 'Math' },
    { value: 'Science', name: 'Science' },
    { value: 'PE', name: 'Physical Education' },
    { value: 'English', name: 'English' },
    { value: 'AralPan', name: 'Araling Panlipunan' },
    { value: 'TLE', name: 'Technology and Livelihood Education' },
    { value: 'ESP', name: 'Edukasyon sa Pagpapakatao' },
    { value: 'Music', name: 'Music' }
    ]);

    const gradeLevel = ref([
    { value: '1', name: 'Grade 1' },
    { value: '2', name: 'Grade 2' },
    { value: '3', name: 'Grade 3' },
    { value: '4', name: 'Grade 4' },
    { value: '5', name: 'Grade 5' },
    { value: '6', name: 'Grade 6' },
    { value: '7', name: 'Grade 7' },
    { value: '8', name: 'Grade 8' },
    { value: '9', name: 'Grade 9' },
    { value: '10', name: 'Grade 10' },
    { value: '11', name: 'Grade 11' },
    { value: '12', name: 'Grade 12' },
    ]);

    const sendToFireBase = (rawContent) => {
        generateResource.addGeneratedResource(rawContent, 'lessonPlan');
    }

    onMounted(() => {
        //sendToFireBase("testing");
    })

    const generate = async () => {
        isGenerating.value = true;
        const instruc = createInstruction();
        await backEndModel.generateLesson(instruc)
            .then((completion) => {
                sendToFireBase(completion?.data?.message?.content);
                generatedTopic.value = completion?.data?.message?.content?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') });
        isGenerating.value = false;
    }

    const copyGeneratedTopic = () => {
        const range = document.createRange();
        range.selectNode(document.querySelector(".generated-value"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        copyContent.value = !copyContent.value
        setTimeout(() => {
            copyContent.value = !copyContent.value;
        }, 3000);
    };

    const createInstruction = () => {
        return "topic: "+topic.value+"\ngrade level: "+selectGrade+"\nsubject: "+selectSubject+"\nadditional notes: "+message;
    }
</script>
<template>
    <div class="fixed top-0 left-0" v-if="copyContent">
        <Alert type="success">Copied</Alert>
    </div>
    <div class="container px-3 mx-auto text-black mt-7">
        <div class="bg-white shadow-md rounded-t-3xl">
            <div class="flex py-4 bg-indigo-500 px-9 rounded-t-3xl">
                <div>
                    <button type="button" disabled class="text-main-color bg-gray-100 bg-opacity-30 border focus:ring-4 focus:outline-none focus:ring-secondary-color font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center dark:hover:text-white hover:border-transparent">
                        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2M6 1v4a1 1 0 0 1-1 1H1m13.14.772 2.745 2.746M18.1 5.612a2.086 2.086 0 0 1 0 2.953l-6.65 6.646-3.693.739.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"/>
                        </svg>
                        <span class="sr-only">Icon description</span>
                    </button>
                </div>
                <div class="self-center pl-4 text-2xl font-bold text-white">
                    Write
                </div>
            </div>
            <div class="flex flex-wrap gap-4 p-3 sm:p-9">
                <div class="w-full lg:w-[68%] col-span-4">
                    <div class="w-full py-4 generated-value" v-if="!generatedTopic">
                        <h1 class="mb-6 text-2xl font-semibold">Creating Educational Content with Tiklipy in 9 Simple Steps:</h1>
                        <div class="space-y-6">
                            <!-- Step 1 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 1: Choose Lesson: Select grade, subject, topic.</h2>
                            </div>

                            <!-- Step 2 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 2: Assess & Homework: Toggle for tasks.</h2>
                            </div>

                            <!-- Step 3 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 3: Details: Set questions' specifics.</h2>
                            </div>

                            <!-- Step 4 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 4: Add Instructions: Extra guidance if needed.</h2>
                            </div>

                            <!-- Step 5 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 5: Generate: Click "Generate with Tiklipy!"</h2>
                            </div>

                            <!-- Step 6 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 6: Review & Interact: See content on the left.</h2>
                            </div>

                            <!-- Step 7 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 7: Copy/Save/Regenerate: Use buttons provided.</h2>
                            </div>

                            <!-- Step 8 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 8: Refine: Adjust choices, generate more.</h2>
                            </div>

                            <!-- Step 9 -->
                            <div>
                                <h2 class="text-xl font-semibold">Step 9: Follow Rubric: Check quality as per guidelines.</h2>
                            </div>
                        </div>
                    </div>
                    <div class="w-full py-4 generated-value" v-html="generatedTopic">
                    </div>
                    <div class="block">
                        <div class="flex">
                            <Button color="default" @click="copyGeneratedTopic" class="py-3 mr-3 font-semibold border-0 bg-main-color hover:bg-secondary-color">
                                <template #prefix>
                                    <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.708 2.292.706-.706A2 2 0 0 1 9.828 1h6.239A.97.97 0 0 1 17 2v12a.97.97 0 0 1-.933 1H15M6 5v4a1 1 0 0 1-1 1H1m11-4v12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V9.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 5h5.239A.97.97 0 0 1 12 6Z"/>
                                    </svg>
                                </template>
                                Copy
                            </Button>
                            <Button color="default" class="py-3 mr-3 font-semibold border-0 bg-main-color hover:bg-secondary-color">
                                <template #prefix>
                                    <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                                    </svg>
                                </template>
                                Save
                            </Button>
                            <!-- <Button class="py-3 font-semibold border-0 bg-main-color hover:bg-secondary-color">
                                <template #prefix>
                                    <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
                                    </svg>
                                </template>
                                Regenerate
                            </Button> -->

                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-[30%] col-span-2">
                    <div class="p-6 bg-gray-100 rounded-3xl animate__animated animate__fadeInUp">
                        <div v-for="(item, index) in loaderStore.selectedInputs" :key="index">
                            <h2 class="text-3xl font-bold text-main-color mb-1">{{ item.title }}</h2>
                            <p class="mb-5">{{ item.description }}</p>
                            <h2 class="text-md font-bold text-main-color mb-1">{{ item.label }}</h2>
                            <component :is="item.tag" :placeholder="item.placeholder" class=" w-full px-3 py-2 rounded-lg bg-gray-50 border-[1px] !border-gray-500 " rows="7"></component>
                        </div>
                        <Button @click.prevent="generate" type="submit" size="lg" class="mt-5 w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">Generate Topic with Tiklipy!</Button>
                        <!-- <div v-if="isGenerating" class="p-6 bg-gray-100 rounded-3xl animate__animated animate__fadeInUp">
                            <h2 class="mb-10 text-2xl font-bold leading-snug text-gray-800">Your Upcoming Lesson</h2>
                            <div class="mb-5">
                                <img class="rounded-xl"  src="/bongo-cat/coding-bongo-cat.gif" alt="">
                            </div>
                            <p class="text-center">Tiklipy is processing your request...</p>
                        </div>
                        <form v-if="!isGenerating" class="p-6 bg-gray-100 rounded-3xl animate__animated animate__fadeInUp">
                            <h2 class="mb-10 text-2xl font-bold leading-snug text-gray-800">Your Upcoming Lesson</h2>
                            <div class="mb-4">
                                <label class="block mb-1 font-semibold text-gray-700">Select Grade level</label>
                                <Select v-model="selectGrade" placeholder="Please select Grade level" class="mb-7 bg-transparent-input" :options="gradeLevel" />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-1 font-semibold text-gray-700" >Select Subject</label>
                                <Select v-model="selectSubject" placeholder="Please select Grade level" class="mb-7 bg-transparent-input" :options="subject" />
                            </div>
                            <div class="mb-4">
                                <label for="" class="block mb-1 font-semibold text-gray-700">Topic</label>
                                <input v-model="topic" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Lesson Topic" required>
                            </div> -->

                             <!-- Assessment Toggle -->
                            <!-- <div class="mb-4">
                                <div class="flex items-center mb-6">
                                    <label :class="toggleAssesment? '':''" class="mr-3 font-semibold text-gray-700">Assesment </label>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input v-model="toggleAssesment" type="checkbox" value="" class="sr-only peer" >
                                        <div  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-secondary-color dark:peer-focus:ring-secondary-color dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-main-color"></div>
                                    </label>
                                </div>
                                <div :class="toggleAssesment? 'visible':'hidden'" class="">
                                    <div class="mb-2 basis-2/3">
                                        <Select v-model="asssesmentQuestionType" placeholder="Select Question Type" class=" bg-transparent-input" :options="questionType" />
                                    </div>
                                    <div class="mb-6 basis-1/3 ">
                                        <input v-model="assessmentNumberOfQuestions" type="number" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Number of Questions">
                                    </div>
                                </div>
                            </div> -->

                            <!-- Homework Toggle -->
                            <!-- <div class="mb-6">
                                <div class="flex items-center mb-6">
                                    <label :class="toggleHomework? '':''" class="mr-3 font-semibold text-gray-700">Homework </label>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input v-model="toggleHomework" type="checkbox" value="" class="sr-only peer" >
                                        <div  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-secondary-color dark:peer-focus:ring-secondary-color dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-main-color"></div>
                                    </label>
                                </div>
                                <div :class="toggleHomework? 'visible':'hidden'" class="">
                                    <div class="mb-2 basis-2/3">
                                        <Select v-model="homeworkQuestionType" placeholder="Select Question Type" class=" bg-transparent-input" :options="questionType" />
                                    </div>
                                    <div class="mb-6 basis-1/3 ">
                                        <input v-model="homeworkNumberOfQuestions" type="number" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Number of Questions">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6">
                                <Textarea rows="4" placeholder="Additional instruction..." v-model="message" label="Your message" />
                            </div>
                            <Button @click.prevent="generate" type="submit" size="lg" class="w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">Generate Topic with Tiklipy!</Button> -->
                        <!-- </form> -->
                    </div>
                </div>
            </div> 
        </div>
        
    </div>
</template>../../models/Express