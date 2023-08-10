<script setup>
    import { ref } from 'vue'
    import { Input } from 'flowbite-vue';
    import { Select } from 'flowbite-vue';
    import { Textarea } from 'flowbite-vue'
    import { Button } from 'flowbite-vue'

    let selected = ref('')
    const message = ref('')

    const countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' },
    ]

</script>
<template>
    <div class="container text-black mt-7">
        <div class="bg-white rounded-xl shadow-md">
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
            <div class="grid grid-cols-6 gap-4 p-9">
                <div class="col-span-4">
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
                            <Button color="default" class="mr-3 bg-indigo-600 py-3 font-semibold">
                                <template #prefix>
                                    <svg class=" w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.708 2.292.706-.706A2 2 0 0 1 9.828 1h6.239A.97.97 0 0 1 17 2v12a.97.97 0 0 1-.933 1H15M6 5v4a1 1 0 0 1-1 1H1m11-4v12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V9.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 5h5.239A.97.97 0 0 1 12 6Z"/>
                                    </svg>
                                </template>
                                Copy
                            </Button>
                            <Button color="default" class="mr-3 bg-indigo-600 py-3 font-semibold">
                                <template #prefix>
                                    <svg class=" w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                                    </svg>
                                </template>
                                Save
                            </Button>
                            <Button class="bg-indigo-600 font-semibold py-3">
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
                <div class="col-span-2">
                    <div class="bg-gray-100 p-6 rounded-3xl">
                        <h2 class="text-2xl font-bold text-gray-800 leading-snug">Devise an alternate form of assessment.</h2>
                        <p class="text-lg text-gray-500 mt-2 mb-4">Evaluate student comprehension using innovative assessment methods.</p>
                        <div class="flex bg-indigo-100 rounded-lg p-4 mb-10">
                            <div class="mr-2">
                                <i class="ti ti-check mr-1 pb-1 text-lg text-main-color"></i>
                            </div>
                            <div class="block">
                                <div class="font-semibold mb-1 text-gray-700">For Example:</div>
                                <p class="text-main-color text-sm">Distinguish formative assessment by tasking students with a creative challenge that demonstrates their understanding and critical thinking.</p>
                            </div>
                        </div>
                        <div class="mb-7">
                            <label class="text-gray-700 font-semibold mb-1 block" for="assessment-type">Alternative Assessment Type</label>
                            <Select v-model="selected" class="mb-7 bg-transparent-input" :options="countries" />
                        </div>
                        <div class="mb-7">
                            <label class="text-gray-700 font-semibold mb-1 block" for="assessment-type">Grade Level or Academic Area</label>
                            <Input required placeholder="For example, 6th grade." id="assessment-type" class="bg-white placeholder-gray-500"/>
                        </div>
                        
                        <div class="mb-6">
                            <label class="text-gray-700 font-semibold mb-1 block" for="assessment-type">Specific Subject Matter or Learning Standard</label>
                            <Textarea rows="8" placeholder="Provide the overarching subject or paste an official educational standard." class="bg-transparent-input placeholder-gray-500" label="" v-model="topic"/>
                        </div>
                        <div class="mb-6">
                            <label class="text-gray-700 font-semibold mb-1 block" for="assessment-type">Supplementary Details</label>
                            <Textarea rows="8" placeholder="Is there any other information you would like to include?" class="bg-transparent-input placeholder-gray-500" label="" v-model="information" />
                        </div>
                        <Button size="lg" class="w-full bg-indigo-600 text-lg font-semibold">Go Fetch!</Button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>