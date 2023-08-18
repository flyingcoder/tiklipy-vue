<script setup>
    import { onMounted, ref } from 'vue';
    import LessonPlanModel from '../../models/LessonPlans';
    import { useAuthStore } from '../../stores/auth';
    import Filter from '../../components/Filter.vue';


    const authStore = useAuthStore();
    const teacher = authStore.user;
    const lessonModel = new LessonPlanModel();
    const lessons = ref([]);

    onMounted(async () => {
        lessons.value = await lessonModel.getLessonPlansByTeacher(teacher.uid);
    });

    const lessonsCards = {
        
        type: 'lesson_plan',
        category: 'Report',
        // tag: 'featured',
        tag: 'write',
        promptExample: 'Computer Laborator Supervisor Auxiliary report.',
        systemPrompt: 'Assist in generating clear and concise instructions for monthly auxiliary reports. Provide guidance on structuring the report, including key points, challenges, highlights, and insights. Ensure the instructions are professional and informative to simplify the reporting process.',
        title: 'Effortless Auxiliary Report Generator.',
        icon:'ti-user',
        description: 'Simplify your auxiliary assignment. Just share a few details, and Tiklipy will solve your problem.',
        inputs: {
            highlights: {
                value: '',
                placeholder: 'e.g. Upgraded software in computer lab for better functionality and implemented new security measures to protect lab equipment.',
                inputType: 'textarea',
                label: 'Main Highlights',
            },
            challenges: {
                value: '',
                placeholder: 'e.g. Dealing with occasional computer glitches and managing student access to specific software.',
                inputType: 'textarea',
                label: 'Challenges Faced',
            },
            insights: {
                value: '',
                placeholder: 'e.g. Recognized the need for regular maintenance to prevent technical issues',
                inputType: 'textarea',
                label: 'Insights',
            },
            purpose: {
                value: '',
                placeholder: 'e.g. To provide an overview of activities and improvements in the computer lab.',
                inputType: 'text',
                label: 'Report Insights',
            },
            outcome: {
                value: '',
                placeholder: 'e.g. Improved lab functionality and security and enhanced student experience in the lab.',
                inputType: 'text',
                label: 'Report Outcome',
            }
        }
    
    };


</script>
<template>
    <div class="px-3 mt-7 flex flex-wrap justify-between">
        <div class="w-full flex">
            <div class="flex flex-wrap max-lg:justify-center w-full md:w-3/4 lg h-fit">
                <div class="w-full" v-if="lessons.length > 0">
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
                <div class="w-full sm:w-[47%] bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain" v-else>
                    <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain cursor-pointer">
                        <div class="flex justify-between xl:gap-x-2 items-cente">
                            <div class="absolute inline-flex items-center justify-center w-40 h-32 p-3 text-center -left-6 -top-4 text-main-color ">
                                <img src="/android-chrome-512x512.png" width="50" alt="">                       
                            </div>
                            <div class="self-center ml-auto text-right">                            
                                <h3 class="my-1 text-2xl font-semibold text-main-color">Lesson Plan</h3>
                                <p class="p-0 mb-0 text-lg font-light text-gray-700 bg-transparent hover:border-transparent focus:outline-none">Effective and Engaging Lesson Plans</p>
                            </div>
                        </div>
                    </div> <!--end inner-grid--> 
                </div>
            </div>
            <div class="form w-full md:w-1/4">
                <Filter filter-title="Lessons"/>
            </div>
        </div>
    </div>
</template>