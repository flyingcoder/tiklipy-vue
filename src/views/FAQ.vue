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
            <Accordion flush>
                <accordion-panel>
                <accordion-header>What is the billing process like?</accordion-header>
                <accordion-content>
                    <div>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Tiklipy's subscription plan offers convenience and great value. For $10 per month, you can access and utilize all of Tiklipy's features on multiple devices. Our prices are set, and there are no additional charges. Furthermore, you have the flexibility to cancel your subscription at any time.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>Is my subscription set to renew automatically?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Certainly. If you don't take action to cancel your subscription, it will be renewed automatically on a monthly basis. Should you decide to cancel, the subscription will remain active until the ongoing billing cycle concludes. Upon expiration, you won't be able to utilize our tools, retrieve your stored content, or download any materials. However, you're always welcome to resubscribe whenever you wish.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>What are the terms for cancelling a subscription?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Tiklipy's subscription plan offers convenience and great value. For $10 per month, you can access and utilize all of Tiklipy's features on multiple devices. Our prices are set, and there are no additional charges. Furthermore, you have the flexibility to cancel your subscription at any time.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>Who can benefit from Tiklipy?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Tiklipy is designed to serve a diverse group of educators, including administrators, classroom teachers from both public and private schools, as well as homeschooling parents.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>How frequently do you introduce new features?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">We collaborate closely with prominent educators to ensure our toolkit continues to expand, incorporating fresh functionalities on a regular basis. Should you have any ideas, feel free to share them with us!</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>Which devices can I use with Tiklipy?</accordion-header>
                <accordion-content>
                    <div>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Tiklipy is compatible with various internet-connected devices, including smartphones, laptops, and desktop computers.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400"> Is it necessary to download an app to utilize Tiklipy? No need to download any app.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>Is it necessary to download an app to utilize Tiklipy?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">No need to download any app.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>What sets Tiklipy apart from ChatGPT?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Developed by an educator, Tiklipy is uniquely designed to cater to the specific needs of educators. It is created to help you achieve impactful results without the need for complex commands or prompts. This sets Tiklipy apart from platforms like ChatGPT, as it is specifically tailored to support educators and the way they work.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
            </Accordion>
        </div>
    </div>
</template>