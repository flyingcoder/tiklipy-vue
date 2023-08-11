<script setup>
    import { ref, watch  } from 'vue'
    import { Input } from 'flowbite-vue';
    import { Select } from 'flowbite-vue';
    import { Textarea } from 'flowbite-vue';
    import { Button } from 'flowbite-vue';
    import { Toggle } from 'flowbite-vue';
    

    const toggleAssesment = ref(false);
    const toggleHomework = ref(false);
    const selectGrade = ref('1');
    const selectSubject = ref('Math');
    const asssesmentQuestionType = ref('');
    const homeworkQuestionType = ref('');
    const message = ref('');
    const topic = ref('');
    const homeworkNumberOfQuestions = ref('');
    const AssessmentNumberOfQuestions = ref('');

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

</script>
<template>
    <div class="container text-black mt-7 px-3 mx-auto">
        <div class="bg-white rounded-t-3xl shadow-md">
            <div class="flex bg-indigo-500 px-9 py-4 rounded-t-3xl">
                <div>
                    <button type="button" disabled class="text-blue-700 bg-gray-100 bg-opacity-30 border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center dark:hover:text-white hover:border-transparent">
                        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17v1a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2M6 1v4a1 1 0 0 1-1 1H1m13.14.772 2.745 2.746M18.1 5.612a2.086 2.086 0 0 1 0 2.953l-6.65 6.646-3.693.739.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z"/>
                        </svg>
                        <span class="sr-only">Icon description</span>
                    </button>
                </div>
                <div class="text-2xl font-bold pl-4 text-white self-center">
                    Write
                </div>
            </div>
            <div class="flex flex-wrap   gap-4 p-3 sm:p-9">
                <div class="w-full lg:w-[68%] col-span-4">
                    <div class="w-full generated-value py-4">
                        <h1 class="text-xl font-bold mb-6">Assessment Title: Exploring Health Project</h1>
        
                        <!-- Objective -->
                        <section class="mb-6">
                            <h2 class="text-xl font-semibold mb-2">Objective:</h2>
                            <p>The objective of this project is to assess your understanding of various aspects of health and your ability to apply this knowledge in real-world scenarios.</p>
                        </section>

                        <!-- Instructions -->
                        <section class="mb-6">
                            <h2 class="text-xl font-semibold mb-2">Instructions:</h2>
                            <p>For this project, you will research and create a comprehensive health guide that covers various aspects of health. You may choose to present your guide in the form of a digital presentation, a poster, or a written report. Remember to include accurate information and engage your audience with visual aids and clear explanations.</p>
                        </section>
                        
                        <!-- Sections -->
                        <section class="mb-8">
                            <h2 class="text-xl font-semibold mb-2">Section 1: Introduction</h2>
                            <p>In this section, provide an overview of your health guide. Explain why health is important and how it impacts daily life. Include a brief description of the topics you will cover in your guide.</p>
                        </section>

                        <!-- Sections -->
                        <section class="mb-8">
                            <h2 class="text-xl font-semibold mb-2">Section 2: Physical Health</h2>
                            <p>In this section, discuss the importance of physical health and its impact on overall well-being. Include information on exercise, nutrition, hygiene, and the benefits of maintaining a healthy lifestyle. Provide examples and practical tips for maintaining physical health.</p>
                        </section>

                        <section class="mb-8">
                            <h2 class="text-xl font-semibold mb-2">Section 3: Mental and Emotional Health</h2>
                            <p>In this section, explore the significance of mental and emotional health. Discuss common mental health issues, such as stress, anxiety, and depression, and provide strategies for managing them. Include information on the importance of self-care, positive relationships, and seeking help when needed.</p>
                        </section>

                        <section class="mb-8">
                            <h2 class="text-xl font-semibold mb-2">Section 4: Social Health</h2>
                            <p>In this section, examine the role of social health in our lives. Discuss the importance of healthy relationships, effective communication, and building a supportive community. Include examples of positive social behaviors and strategies for resolving conflicts.</p>
                        </section>

                        <section class="mb-8">
                            <h2 class="text-xl font-semibold mb-2">Section 5: Sexual and Reproductive Health</h2>
                            <p>In this section, provide information on sexual and reproductive health. Discuss topics such as puberty, consent, safe sex, contraception, and sexually transmitted infections. Include accurate and age-appropriate information, emphasizing the importance of making informed decisions.</p>
                        </section>

                        <section class="mb-8">
                            <h2 class="text-xl font-semibold mb-2">Section 6: Healthy Habits and Disease Prevention</h2>
                            <p>In this section, explain the significance of developing healthy habits and preventing diseases. Discuss the importance of regular check-ups, vaccinations, and practicing good hygiene. Include information on common diseases and ways to reduce the risk of contracting them.</p>
                        </section>

                        <section class="mb-8">
                            <h2 class="text-xl font-semibold mb-2">Section 7: Conclusion</h2>
                            <p>In this final section, summarize the key points covered in your health guide. Emphasize the importance of maintaining overall health and provide a call to action for your audience to make positive changes in their lives.</p>
                        </section>
                        
                        <!-- ... Other sections ... -->

                        <!-- Rubric -->
                        <section class="mb-8">
                            <h2 class="text-xl font-semibold mb-2">Assessment Rubric:</h2>
                            <ul class="list-disc list-inside">
                                <li>Content: Accurate information, comprehensive coverage of topics (40 points)</li>
                                <li>Organization and Structure: Clear introduction and conclusion, logical flow of ideas (20 points)</li>
                                <li>Presentation: Visual aids, clarity of explanations, engaging delivery (20 points)</li>
                                <li>Grammar and Spelling: Proper grammar, spelling, and punctuation (10 points)</li>
                                <li>Citations and References: Accurate citations and references for external sources used (10 points)</li>
                            </ul>
                        </section>
                        
                        <!-- Note -->
                        <section>
                            <p class="text-gray-600">Remember to use credible sources for your research and properly cite any external sources used. Be creative and demonstrate your understanding of health concepts in an engaging manner. Good luck!</p>
                        </section>
                    </div>
                    <div class="block">
                        <div class="mt-9 mb-4 text-gray-500">444 words</div>
                        <div class="flex">
                            <Button color="default" class="mr-3 bg-main-color hover:bg-secondary-color border-0 py-3 font-semibold">
                                <template #prefix>
                                    <svg class=" w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.708 2.292.706-.706A2 2 0 0 1 9.828 1h6.239A.97.97 0 0 1 17 2v12a.97.97 0 0 1-.933 1H15M6 5v4a1 1 0 0 1-1 1H1m11-4v12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V9.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 5h5.239A.97.97 0 0 1 12 6Z"/>
                                    </svg>
                                </template>
                                Copy
                            </Button>
                            <Button color="default" class="mr-3 bg-main-color hover:bg-secondary-color border-0 py-3 font-semibold">
                                <template #prefix>
                                    <svg class=" w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                                    </svg>
                                </template>
                                Save
                            </Button>
                            <Button class="bg-main-color hover:bg-secondary-color border-0 font-semibold py-3">
                                <template #prefix>
                                    <svg class=" w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"/>
                                    </svg>
                                </template>
                                Regenerate
                            </Button>

                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-[30%] col-span-2">
                    <div class="bg-gray-100 p-6 rounded-3xl">
                        <h2 class="text-2xl font-bold text-gray-800 leading-snug mb-10">Enter Your Upcoming Lesson</h2>
                        <form>
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
                                <input v-model="topic" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Lesson Topic" required>
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
                                        <input v-model="assessmentNumberOfQuestions" type="number" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Number of Questions" required>
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
                                        <input v-model="homeworkNumberOfQuestions" type="number" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Number of Questions" required>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-6">
                                <Textarea rows="4" placeholder="Additional instruction..." v-model="message" label="Your message" />
                            </div>
                            <Button type="submit" size="lg" class="w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">Generate Topic with Tiklipy!</Button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
        
    </div>
</template>