<script setup>
    import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue';
</script>
<template>
    <div class="container mt-10 px-3 m-auto">
        <div class="max-w-3xl mx-auto">
            <div class="block justify-center">
                <h2 class="text-center text-4xl font-semibold text-gray-800">Frequently Asked Questions</h2>
                <p class="text-center text-black mt-8 text-gray-700 text-xl mb-11">Tiklipy Common Questions: Find quick resolutions to familiar Tiklipy concerns.</p>
            </div>
            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" class="aria-expanded:!border-0 !border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none flex items-center justify-between w-full py-5 px-0 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span class="text-black">What is the billing process like?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div class="!border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none py-5 px-0 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Tiklipy's subscription plan offers convenience and great value. For $10 per month, you can access and utilize all of Tiklipy's features on multiple devices. Our prices are set, and there are no additional charges. Furthermore, you have the flexibility to cancel your subscription at any time.</p>
                    </div>
                </div>
                <!-- FAQ 2 -->
                <h2 id="accordion-collapse-heading-2">
                    <button type="button" class="aria-expanded:!border-0 !border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none flex items-center justify-between w-full py-5 px-0 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                        <span class="text-black">Is my subscription set to renew automatically?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div class="!border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none py-5 px-0 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Certainly. If you don't take action to cancel your subscription, it will be renewed automatically on a monthly basis. Should you decide to cancel, the subscription will remain active until the ongoing billing cycle concludes. Upon expiration, you won't be able to utilize our tools, retrieve your stored content, or download any materials. However, you're always welcome to resubscribe whenever you wish.</p>
                    </div>
                </div>
                <!-- FAQ 3 -->
                <h2 id="accordion-collapse-heading-3">
                    <button type="button" class="aria-expanded:!border-0 !border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none flex items-center justify-between w-full py-5 px-0 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                        <span class="text-black">What are the terms for cancelling a subscription?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                    <div class="!border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none py-5 px-0 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Tiklipy's subscription plan offers convenience and great value. For $10 per month, you can access and utilize all of Tiklipy's features on multiple devices. Our prices are set, and there are no additional charges. Furthermore, you have the flexibility to cancel your subscription at any time.</p>
                    </div>
                </div>
                <!-- FAQ 4 -->
                <h2 id="accordion-collapse-heading-4">
                    <button type="button" class="aria-expanded:!border-0 !border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none flex items-center justify-between w-full py-5 px-0 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
                        <span class="text-black">Who can benefit from Tiklipy?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                    <div class="!border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none py-5 px-0 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Tiklipy is designed to serve a diverse group of educators, including administrators, classroom teachers from both public and private schools, as well as homeschooling parents.</p>
                    </div>
                </div>
                <!-- FAQ 5 -->
                <h2 id="accordion-collapse-heading-5">
                    <button type="button" class="aria-expanded:!border-0 !border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none flex items-center justify-between w-full py-5 px-0 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
                        <span class="text-black">How frequently do you introduce new features?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
                    <div class="!border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none py-5 px-0 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">We collaborate closely with prominent educators to ensure our toolkit continues to expand, incorporating fresh functionalities on a regular basis. Should you have any ideas, feel free to share them with us!</p>
                    </div>
                </div>
                <!-- FAQ 6 -->
                <h2 id="accordion-collapse-heading-6">
                    <button type="button" class="aria-expanded:!border-0 !border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none flex items-center justify-between w-full py-5 px-0 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
                        <span class="text-black">Which devices can I use with Tiklipy?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-6" class="hidden" aria-labelledby="accordion-collapse-heading-6">
                    <div class="!border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none py-5 px-0 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Tiklipy is compatible with various internet-connected devices, including smartphones, laptops, and desktop computers.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400"> Is it necessary to download an app to utilize Tiklipy? No need to download any app.</p>
                    </div>
                </div>
                <!-- FAQ 7 -->
                <h2 id="accordion-collapse-heading-7">
                    <button type="button" class="aria-expanded:!border-0 !border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none flex items-center justify-between w-full py-5 px-0 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-7" aria-expanded="false" aria-controls="accordion-collapse-body-7">
                        <span class="text-black">Is it necessary to download an app to utilize Tiklipy?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-7" class="hidden" aria-labelledby="accordion-collapse-heading-7">
                    <div class="!border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none py-5 px-0 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">No need to download any app.</p>
                    </div>
                </div>
                <!-- FAQ 8 -->
                <h2 id="accordion-collapse-heading-8">
                    <button type="button" class="aria-expanded:!border-0 !border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none flex items-center justify-between w-full py-5 px-0 font-medium text-left border border-b-0 border-gray-200 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-8" aria-expanded="false" aria-controls="accordion-collapse-body-8">
                        <span class="text-black">What sets Tiklipy apart from ChatGPT?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-8" class="hidden" aria-labelledby="accordion-collapse-heading-8">
                    <div class="!border-b-[1.5px] !border-black ring-offset-0 !outline-0  border-0 rounded-none py-5 px-0 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Developed by an educator, Tiklipy is uniquely designed to cater to the specific needs of educators. It is created to help you achieve impactful results without the need for complex commands or prompts. This sets Tiklipy apart from platforms like ChatGPT, as it is specifically tailored to support educators and the way they work.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>