<script setup>
    import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue';
</script>
<template>
    <div class="container text-black mt-10">
        <div class="max-w-3xl mx-auto">
            <div class="block justify-center">
                <h2 class="text-center text-4xl font-semibold text-gray-800">Frequently Asked Questions</h2>
                <p class="text-center text-black mt-8 text-gray-700 text-xl mb-11">Tiklipy Common Questions: Find quick resolutions to familiar Tiklipy concerns.</p>
            </div>
            <Accordion class="max-w-screen-2xl bg-white">
                <accordion-panel>
                <accordion-header class="rounded-none">header</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>another header</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>and one more header</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
            </Accordion>
        </div>
    </div>
</template>