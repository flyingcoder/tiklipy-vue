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
        <div class="flex lg:w-[68%] col-span-4">
            <div class="generated-homework">
                <header class="mb-6">
                    <h1 class="text-3xl font-bold">English Homework - Creative Writing</h1>
                </header>
                
                <div class="bg-yellow-100 p-4 rounded-lg mb-6">
                    <h2 class="text-xl font-semibold mb-4">Instructions:</h2>
                    <p>
                        Write a short story that showcases your creativity and imagination. Your story should have a clear beginning,
                        middle, and end. Consider the following elements while writing your story:
                    </p>
                    <ul class="list-disc pl-6 mt-4">
                        <li>Setting: Choose a unique and interesting setting for your story...</li>
                        <br>
                        <li>Characters: Develop well-rounded characters with distinct personalities, motivations, and emotions. Include a protagonist and at least one other significant character.
                        </li>
                        <br>
                        <li>Conflict: Introduce a conflict or problem that the protagonist faces. This conflict could be internal
                            (emotional or moral) or external (a physical challenge or an antagonist).
                        </li>
                        <br>
                        <li>Plot: Create a compelling plotline that engages the reader. Build suspense and tension as the story
                            progresses.
                        </li>
                        <br>
                        <li>Resolution: Provide a satisfying resolution to the conflict. Your ending can be happy, sad, or open-ended, but
                            it should leave a lasting impact on the reader.
                        </li>
                        <br>
                        <li>Language and Style: Use descriptive language, varied sentence structures, and literary devices (such as
                            similes, metaphors, and personification) to enhance your story's richness and depth.
                        </li>
                    </ul>
                </div>

                <div class="bg-indigo-100 p-6 rounded-lg mb-6">
                    <h2 class="text-xl font-semibold mb-4">Requirements:</h2>
                    <ul class="list-disc pl-6 mt-4">
                        <li>The short story should be at least 500 words long but not exceed 1000 words.</li>
                        <li>Use proper grammar, punctuation, and spelling.</li>
                        <li>Make sure your writing is clear, concise, and free of any offensive content.</li>
                    </ul>
                </div>

                <div class="bg-green-100 p-6 rounded-lg mb-6">
                    <h2 class="text-xl font-semibold mb-4">Submission:</h2>
                    <p>
                        Submit your completed short story as a typed document (Microsoft Word or PDF) to the English teacher's email by the
                        due date mentioned in class. Remember to include your name, grade, and the title of your short story in the
                        document.
                    </p>
                </div>

                <div class="bg-red-100 p-6 rounded-lg mb-6">
                    <h2 class="text-xl font-semibold mb-4">Grading Criteria:</h2>
                    <p>
                        Your short story will be evaluated based on creativity, plot development, character portrayal, language usage, and
                        adherence to the given instructions.
                    </p>
                </div>
                
                <p class="mt-4">
                    Note: Plagiarism or copying from other sources will result in severe penalties. Ensure that your work is original and
                    reflects your own ideas and creativity.
                </p>
                <p class="mt-4">Good luck, and have fun writing your short story!</p>
            </div>
        </div>
        <div class="flex lg:w-[30%] col-span-2">
            <GenerateForm :Type="Type" />
        </div>
    </div>
</template>
