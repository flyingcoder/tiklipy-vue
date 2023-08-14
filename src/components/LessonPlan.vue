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
            <div class="generated-lesson-plan">
                <header class="mb-[2rem]">
                    <h1 class="font-bold text-3xl font-bold">Science Lesson Plan</h1>
                    <h2 class="text-lg">Introduction to Photosynthesis</h2>
                </header>

                <section class="mb-[2rem]">
                    <div class="bg-red-100 p-6 rounded-lg ">
                        <h3 class=""><strong>Objective</strong></h3>
                        <p>
                            By the end of this lesson, students will be able to understand the process of photosynthesis, identify its
                            key components, and explain the importance of photosynthesis in the ecosystem.
                        </p>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-green-100 p-6 rounded-lg ">
                        <h3><strong>Materials</strong></h3>
                        <ul>
                            <li>Projector or whiteboard</li>
                            <li>PowerPoint presentation or chalkboard</li>
                            <li>Handouts with diagrams of photosynthesis</li>
                            <li>Plant leaves (real or artificial) for a demonstration</li>
                        </ul>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-yellow-100 p-6 rounded-lg ">
                        <h3><strong>Introduction</strong></h3>
                        <p>
                            Begin the lesson by asking students what they know about plants and their importance to the environment.
                            Introduce the topic of photosynthesis as the process by which plants convert sunlight into energy and produce
                            oxygen. Explain the objective of the lesson and what students will learn about photosynthesis.
                        </p>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-orange-100 p-6 rounded-lg ">
                        <h3><strong>Photosynthesis Explanation</strong></h3>
                        <p>
                            Use a PowerPoint presentation or the chalkboard to explain the process of photosynthesis step by step.
                            Cover the following points:
                        </p>
                        <ul  class="list-disc ml-5">
                            <li>Definition of photosynthesis</li>
                            <li>The role of chloroplasts in plants</li>
                            <li>The reactants of photosynthesis (carbon dioxide, water, sunlight)</li>
                            <li>The products of photosynthesis (glucose, oxygen)</li>
                            <li>The chemical equation of photosynthesis</li>
                            <li>Importance of photosynthesis in the ecosystem</li>
                        </ul>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-teal-100 p-6 rounded-lg ">
                        <h3><strong>Interactive Activity</strong></h3>
                        <p>
                            Divide the students into groups of 3-4. Distribute handouts with diagrams of the photosynthesis process.
                            Instruct each group to label the different components of photosynthesis in the diagram and discuss the
                            significance of each step. Walk around the class to provide guidance and answer any questions.
                        </p>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-blue-100 p-6 rounded-lg ">
                        <h3><strong>Demonstration</strong></h3>
                        <p>
                            Conduct a live demonstration of photosynthesis using plant leaves (real or artificial). Show how the leaves
                            absorb sunlight and explain the role of chlorophyll in capturing energy. Discuss how the plant releases
                            oxygen during the process.
                        </p>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-red-100 p-6 rounded-lg ">
                        <h3><strong>Review and Discussion</strong></h3>
                        <p>
                            Recap the main points of the lesson on photosynthesis. Ask students to share what they found most interesting
                            or challenging about the topic. Address any misconceptions or questions that may have arisen during the lesson.
                        </p>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-green-100 p-6 rounded-lg ">
                        <h3><strong>Homework (optional)</strong></h3>
                        <p>
                            Assign a short research task for students to find examples of photosynthetic organisms other than plants,
                            such as algae or certain bacteria.
                        </p>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-yellow-100 p-6 rounded-lg ">
                        <h3><strong>Assessment</strong></h3>
                        <p>
                            Observe students' participation during the interactive activity and discussion to assess their understanding
                            of photosynthesis. Review their handouts to gauge their ability to label and explain the components of the
                            process.
                        </p>
                    </div>
                </section>

                <section class="mb-[2rem]">
                    <div class="bg-orange-100 p-6 rounded-lg ">
                        <h3><strong>Extension Activities</strong></h3>
                        <p>
                            For students who show a strong grasp of the topic, encourage them to research more about the impact of
                            photosynthesis on climate change and its role in maintaining the Earth's ecological balance. They can create
                            presentations or essays on this subject.
                        </p>
                    </div>
                </section>
            </div>
        </div>
        <div class="w-full lg:w-[30%] col-span-2">
            <GenerateForm :Type="Type" />
        </div>
    </div>
</template>