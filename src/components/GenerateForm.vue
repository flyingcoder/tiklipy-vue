<script setup>
    import expressModel from "../models/express";
    import generatedResourceModel from "../models/generatedResources";
    import { onMounted, ref, watch, defineProps  } from 'vue'
    import { Input } from 'flowbite-vue';
    import { Select } from 'flowbite-vue';
    import { Alert } from 'flowbite-vue';
    import { Textarea } from 'flowbite-vue';
    import { Button } from 'flowbite-vue';
    import 'animate.css';

    defineEmits(['generation-complete']);

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
    const generateResource = new generatedResourceModel();

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
    <div class="w-full">
        <div class="bg-gray-100 p-6 rounded-3xl animate__animated  animate__fadeInUp">
            <form v-if="!isGenerating" class="bg-gray-100 p-6 rounded-3xl">
                <h2 class="text-2xl font-bold text-gray-800 leading-snug mb-10">Your Upcoming Lesson</h2>
                <div class="mb-4">
                    <label class="text-gray-700 font-semibold mb-1 block">Select Grade level</label>
                    <Select v-model="selectGrade" placeholder="Please select Grade level" class="mb-7 bg-transparent-input" :options="gradeLevel" />
                </div>
                <div class="mb-4">
                    <label class="text-gray-700 font-semibold mb-1 block" >Select Subject</label>
                    <Select v-model="selectSubject" placeholder="Please select Grade level" class="mb-7 bg-transparent-input" :options="subject" />
                </div>
                <div class="mb-4">
                    <label for="" class="text-gray-700 font-semibold mb-1 block">Topic</label>
                    <input v-model="topic" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Lesson Topic" required>
                </div>

                    <!-- Assessment Toggle -->
                <div class="mb-4">
                    <div class="flex items-center mb-6">
                        <label :class="toggleAssesment? '':''" class="mr-3 text-gray-700 font-semibold">Assesment </label>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input v-model="toggleAssesment" type="checkbox" value="" class="sr-only peer" >
                            <div  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-secondary-color dark:peer-focus:ring-secondary-color dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-main-color"></div>
                        </label>
                    </div>
                    <div :class="toggleAssesment? 'visible':'hidden'" class="">
                        <div class="basis-2/3 mb-2">
                            <Select v-model="asssesmentQuestionType" placeholder="Select Question Type" class=" bg-transparent-input" :options="questionType" />
                        </div>
                        <div class="mb-6 basis-1/3 ">
                            <input v-model="assessmentNumberOfQuestions" type="number" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Number of Questions">
                        </div>
                    </div>
                </div>

                <!-- Homework Toggle -->
                <div class="mb-6">
                    <div class="flex items-center mb-6">
                        <label :class="toggleHomework? '':''" class="mr-3 text-gray-700 font-semibold">Homework </label>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input v-model="toggleHomework" type="checkbox" value="" class="sr-only peer" >
                            <div  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-secondary-color dark:peer-focus:ring-secondary-color dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-main-color"></div>
                        </label>
                    </div>
                    <div :class="toggleHomework? 'visible':'hidden'" class="">
                        <div class="basis-2/3 mb-2">
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
                <Button @click.prevent="generate" type="submit" size="lg" class="w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">Generate Topic with Tiklipy!</Button>
            </form>
        </div>
    </div>
</template>