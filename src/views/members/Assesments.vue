<script setup>
    import { onMounted, ref } from 'vue';
    import LessonPlanModel from '../../models/lessonPlans';
    import { useAuthStore } from '../../stores/auth';
    import { useFormStore } from '../../stores/form';
    import { useRouter } from 'vue-router';



    const authStore = useAuthStore();
    const teacher = authStore.user;
    const lessonModel = new LessonPlanModel();
    const lessons = ref([]);
    const router = useRouter();
    const formStore = useFormStore();

    onMounted(async () => {
        lessons.value = await lessonModel.getLessonPlansByTeacher(teacher.uid);
    });

    const lessonsCard = {
        type: 'lesson_plan',
        category: 'Report',
        // tag: 'featured',
        tag: 'write',
        promptExample: 'Crafting Engaging Lessons" is your guide to creating dynamic learning experiences that spark curiosity and critical thinking.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Guiding Insights: The Art of Crafting Effective Lessons',
        icon:'ti-user',
        description: 'Guided Learning: Crafting Effective Lessons for Growth',
        inputs: {
            grade: {
                value: '',
                placeholder: 'Example: Grade 2',
                inputType: 'text',
                label: 'Grade Level',
            },
            subject: {
                value: '',
                placeholder: 'Example: Math',
                inputType: 'text',
                label: 'Subject',
            },
            type: {
                value: '',
                placeholder: 'Example: Multiple Choice',
                inputType: 'text',
                label: 'Question Type',
            },
            items: {
                value: '',
                placeholder: 'Example: 5',
                inputType: 'text',
                label: 'Total Items',
            },
            topic: {
                value: '',
                placeholder: 'State the general topic or paste an official standard.',
                inputType: 'textarea',
                label: 'Topic or Standard',
            },
            instructions: {
                value: '',
                placeholder: 'Share specific guidelines or details to aid completion',
                inputType: 'textarea',
                label: 'Additional Instructions',
            }
        }
    
    };

    const cardIsClick = (card) => {
        formStore.setFormDetails(card);
        router.push({ name: 'generate' });
    }
</script>
<template>
    <div class="px-3 mt-7 flex flex-wrap justify-between">
        <div class="w-full flex">
            <div class="flex flex-wrap max-lg:justify-center w-full lg h-fit">
                <div class="w-full">
                    <div class="w-full sm:w-full bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain">
                        <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
                            <div class="flex justify-between xl:gap-x-2 items-cente">
                                <div class="absolute inline-flex items-center justify-center text-center text-main-color ">
                                    <img src="/android-chrome-512x512.png" width="50" alt="">                       
                                </div>
                                <div class="self-center ml-auto text-right flex">
                                    <div class="flex w-full mr-5">
                                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="US">Alphabetical</option>
                                            <option value="CA">Grade Level</option>
                                            <option value="FR">Date Created</option>
                                        </select>
                                    </div>
                                    <Button type="submit" size="lg" class="w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-base font-semibold">Generate</Button>                      
                                    <!-- <h3 class="my-1 text-2xl font-semibold text-main-color">Lesson Plan</h3>
                                    <p class="p-0 mb-0 text-lg font-light text-gray-700 bg-transparent hover:border-transparent focus:outline-none">Effective and Engaging Lesson Plans</p> -->
                                </div>
                            </div>
                        </div> <!--end inner-grid--> 
                    </div>
                    <div v-for="lesson in lessons" :key="lesson.teacherId + '-lesson-card'" class="w-full sm:w-[47%] bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain ">
                        <router-link :to="{name: 'lesson', params: { id: lesson.slug }}" class=" ">
                            <div class="p-10 max-xs:!p-5 ">
                                <div class="w-full flex justify-between mb-10">
                                    <div class="text-md border px-2 rounded-md bg-green-500 text-white">English</div>
                                    <div class="flex items-center justify-end w-full">
                                        <img class="w-6 ml-2" src="/grade.png" alt="">
                                        <div class="text-lg">{{ lesson.gradeLevel }}</div>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-between leading-normal">
                                    <h5 class=" line-clamp-2 wh mb-2 text-lg lg:text-3xl font-bold tracking-tight text-main-color dark:text-white">
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
    <!-- <div class="mt-7 px-3">
        <div class="flex flex-wrap max-lg:justify-center">
            <div class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex">
                <router-link :to="{ name: 'assessment', params: { type: 'quiz', id: 1 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div class="p-10 max-xs:!p-5">
                        <div class="flex items-center w-56 mb-5">
                            <img class="w-16 -ml-2" src="/grade.png" alt="">
                            <div class="text-5xl ">5</div>
                        </div>
                        <div class="flex flex-col justify-between leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-main-color dark:text-white">Literary Analysis: Exploring Classic Literature</h5>
                            <p class=" font-normal text-gray-500 dark:text-gray-400">Delve into the captivating world of classic literature through this enriching lesson on literary analysis. In this course, students will embark on a journey...</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class=" w-[30rem] bg-white rounded-lg sm:mr-5 mb-5 flex ">
                <router-link :to="{ name: 'assessment', params: { type: 'homework', id: 1 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                <router-link :to="{ name: 'assessment', params: { type: 'project', id: 1 } }" class="bg-[url('/p-1.png')] bg-no-repeat bg-contain items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:shadow-lg transition delay-75 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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