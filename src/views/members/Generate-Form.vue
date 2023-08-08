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
    <div class="container text-black mt-16">
        <div class="grid grid-cols-4 gap-4">
            <div class="cols-span-1">
                <div class="bg-white p-6 rounded-xl">
                    <h2 class="text-2xl font-bold text-gray-800 leading-snug">Create an alternative Assessment</h2>
                    <p class="text-lg text-gray-500 mt-2 mb-4">Measure student learning through creative approaches.</p>
                    <div class="flex bg-indigo-100 rounded-lg p-4 mb-10">
                        <div class="mr-2">
                            <i class="ti ti-check mr-1 pb-1 text-lg text-main-color"></i>
                        </div>
                        <div class="block">
                            <div class="font-semibold mb-1 text-gray-700">For Example:</div>
                            <p class="text-main-color text-sm">Differentiate a formative assessment by having students show what they know with a creative challenge that involves critical thinking.</p>
                        </div>
                    </div>
                    <Input required placeholder="" class="mb-3" label="Type of Alternative Assessment" />
                    <Select v-model="selected" label="Grade Level or Subject" class="mb-7" :options="countries" />
                    <div class="mb-6">
                        <Textarea rows="4" placeholder="State the general topic or paste an official standard" v-model="topic" label="Topic or Standard" />
                    </div>
                    <div class="mb-6">
                        <Textarea rows="4" placeholder="Is there any additional information you would like noted?" v-model="information" label="Additional Information" />
                    </div>
                    <Button size="lg" class="w-full">Go Fetch</Button>
                </div>
            </div>
            <div class="col-span-3">
                <div class="h-full w-full generated-value px-4">
                    <h1 class="text-2xl font-bold mb-6">Assessment Title: Exploring Health Project</h1>
    
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
                    <div>444 words</div>
                    <div class="flex">
                        <Button color="default">
                            <template #prefix>
                            <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                            </template>
                            Buy
                        </Button>
                        <Button color="default">
                            <template #prefix>
                            <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                            </template>
                            Buy
                        </Button>
                        <Button color="default">
                            <template #prefix>
                            <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                            </template>
                            Buy
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>