<script setup>
    import expressModel from "../../models/express";
    import GeneratedResourceModel from "../../models/generatedResources";
    import { useFormStore } from '../../stores/form';
    import { onMounted, ref, watch, defineProps  } from 'vue'
    import { Input } from 'flowbite-vue';
    import { Select } from 'flowbite-vue';
    import { Alert } from 'flowbite-vue';
    import { Textarea } from 'flowbite-vue';
    import { Button } from 'flowbite-vue';
    import { useRouter } from 'vue-router';
    import 'animate.css';

    const router = useRouter();
    const formStore = useFormStore();
    const backEndModel = new expressModel();
    const generateResource = new GeneratedResourceModel();

    const generatedResource = ref();
    const copyContent = ref(false);
    const isGenerating = ref(false);

    const sendToFireBase = (rawContent) => {
        generateResource.addGeneratedResource(rawContent, 'lessonPlan');
    }

    onMounted(() => {
        console.log(formStore.description)
        if(formStore.category === '')
            router.push({ name: 'dashboard' })
    })

    const generate = async () => {
        console.log(formStore.inputs)
        //isGenerating.value = true;
        //const instruc = createInstruction();
        //await backEndModel.generateLesson(instruc)
        //    .then((completion) => {
        //        sendToFireBase(completion?.data?.message?.content);
        //        generatedResource.value = completion?.data?.message?.content?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') });
        //isGenerating.value = false;
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
                    <div class="inline-flex items-center p-1.5 text-xl font-medium text-center bg-gray-100 border rounded-full text-main-color bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-secondary-color dark:hover:text-white hover:border-transparent">
                        <i :class="formStore.icon" class="text-4xl text-white ti dark:text-white"></i>
                    </div>
                </div>
                <div class="self-center pl-4 text-2xl font-bold text-white">
                    {{ formStore.title }}
                </div>
            </div>
            <div class="flex flex-wrap gap-4 p-3 sm:p-9">
                <div class="w-full lg:w-[68%] col-span-4">
                    <div class="w-full py-4 generated-value" v-if="!generatedResource">
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
                    <div class="w-full py-4 generated-value" v-html="generatedResource">
                        
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
                        <h3 class="mb-4 text-xl font-bold leading-snug text-gray-500">
                            {{ formStore.description }}
                        </h3>
                        <p v-if="formStore.promptExample" class="p-4 mb-2 text-purple-700 bg-blue-200">
                            <i class="text-purple-800 ti ti-writing-sign"></i>
                            For Example: <br>{{ formStore.promptExample }}
                        </p>
                        <div v-for="(input, index) in formStore.inputs" :key="index + '-generate-form-input'" class="mb-4">
                            <Textarea :placeholder="input.placeholder" v-model="formStore.inputs[index].value" v-if="input.inputType == 'textarea'" rows="5" :label="input.label" />
                            <Input :placeholder="input.placeholder" v-model="formStore.inputs[index].value" v-else-if="input.inputType == 'text'" type="text" :label="input.label" />
                        </div>
                        <Button @click.prevent="generate" type="submit" size="lg" class="mt-5 w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">
                           Tiklipy Go!
                        </Button>
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
</template>