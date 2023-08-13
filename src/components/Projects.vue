<script setup>
    import { defineProps } from 'vue';
//import generate form
    import GenerateForm from './GenerateForm.vue';
//set props
    const props = defineProps({
        Type: String,
    });
  
//emit and emit handler
//sa generate form component 
// define props
// define emit action
</script>
<template>
    <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-[68%] col-span-4">
            <div class="generated-project">
                <h1 class="font-bold text-3xl mb-4">Environmental Explorers</h1>
                <p class="text-base mb-4">In this project, students will become "Environmental Explorers" and embark on an exploration of their local environment. They will learn about ecosystems, biodiversity, environmental challenges, and sustainability through hands-on activities and research. The project will culminate in a presentation and poster session where students share their findings with the school community.</p>

                <h2 class="text-lg font-semibold mb-2">Project Duration</h2>
                <p class="text-base mb-4">Approximately 4-6 weeks</p>

                <h2 class="text-lg font-semibold mb-2">Project Steps</h2>
                <div class="bg-yellow-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 1: Introduction to Ecosystems</strong></p>
                    <p>Explain what ecosystems are and their importance.</p>
                    <p>Introduce key terms such as habitat, species, biodiversity, and food chain.</p>
                    <p>Show videos or images of various ecosystems (forest, desert, ocean, etc.) to spark interest.</p>
                </div>
                <div class="bg-red-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 2: Choose an Ecosystem</strong></p>
                    <p>Divide students into small groups and assign each group a specific ecosystem to study.</p>
                    <p>Provide resources for research, including books, websites, and videos.</p>
                </div>
                <div class="bg-blue-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 3: Research and Exploration</strong></p>
                    <p>Students research their assigned ecosystem, focusing on its unique features, plants, animals, climate, and challenges.</p>
                    <p>Encourage outdoor exploration if possible, such as nature walks or field trips to local parks.</p>
                </div>
                <div class="bg-green-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 4: Biodiversity Investigation</strong></p>
                    <p>Each group selects a species from their ecosystem to study in-depth.</p>
                    <p>Research the species' characteristics, behavior, role in the ecosystem, and conservation status.</p>
                </div>
                <div class="bg-orange-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 5: Environmental Challenges</strong></p>
                    <p>Discuss common environmental challenges like pollution, deforestation, and habitat loss.</p>
                    <p>Assign each group an environmental challenge related to their ecosystem and have them brainstorm solutions.</p>
                </div>
                <div class="bg-indigo-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 6: Sustainable Practices</strong></p>
                    <p>Introduce the concept of sustainability and its importance.</p>
                    <p>Challenge students to identify sustainable practices for their ecosystem, such as reducing waste, conserving water, or protecting wildlife.</p>
                </div>
                <div class="bg-yellow-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 7: Data Collection and Analysis</strong></p>
                    <p>Students collect data on their chosen species, ecosystem health, and any changes observed.</p>
                    <p>Analyze the data and draw conclusions about the ecosystem's well-being.</p>
                </div>
                <div class="bg-blue-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 8: Presentation and Poster Session</strong></p>
                    <p>Each group creates a presentation showcasing their ecosystem, species, challenges, and solutions.</p>
                    <p>Design posters with visuals, data, and key points.</p>
                    <p>Organize a presentation day where students present to their classmates and teachers.</p>
                </div>
                <div class="bg-red-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 9: Reflection and Action</strong></p>
                    <p>Discuss what students learned during the project.</p>
                    <p>Have students brainstorm ways they can make a positive impact on their local environment.</p>
                </div>
                <div class="bg-teal-100 p-6 rounded-lg mb-4">
                    <p class="mb-2"><strong>Step 10: Celebration</strong></p>
                    <p>Host an "Environmental Explorers Expo" where students display their posters and presentations.</p>
                    <p>Invite parents, teachers, and other students to learn from their findings.</p>
                </div>

                <h2 class="text-lg font-semibold mb-2">Assessment</h2>
                <ul class="list-disc pl-6 mb-4">
                <li>Presentation content and clarity</li>
                <li>Poster quality and visual appeal</li>
                <li>Depth of research and understanding</li>
                <li>Engagement in group work and discussions</li>
                <li>Participation in outdoor activities (if applicable)</li>
                <li>Creativity in proposing solutions</li>
                </ul>

                <h2 class="text-lg font-semibold mb-2">Benefits</h2>
                <ul class="list-disc pl-6">
                <li>Encourages teamwork and collaboration</li>
                <li>Enhances research and critical thinking skills</li>
                <li>Raises awareness about environmental issues</li>
                <li>Promotes a sense of responsibility towards the environment</li>
                <li>Provides an opportunity for public speaking and presentation skills development</li>
                </ul>
            </div>
        </div>
        <div class="w-full lg:w-[30%] col-span-2">
            <GenerateForm :Type="Type"/>
        </div>
    </div>
</template>