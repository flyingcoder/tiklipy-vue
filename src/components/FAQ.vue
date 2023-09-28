<script setup>
    import { ref } from 'vue';
    import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue';
    import { useIdentityStore } from "../stores/siteIdentity";

    const sitename = useIdentityStore();
    const price = 399;
</script>
<style>

.FAQ button:focus,
.FAQ button:active,
.FAQ button:focus-within,
.FAQ button:target,
.FAQ button:hover,
.FAQ button:visited,
.FAQ button:focus-visible {
    outline: 0px !important;
    --tw-ring-opacity:0px !important;
    background: transparent !important;
    border-color:#646cff !important;
    color: #646cff;
}
.FAQ .no-border button{
    border-bottom: 0px !important;
}
.FAQ button {
    color:#000;
    background: transparent !important;
    border: 0px;
    border-bottom: 1px solid;
    border-radius: 0px;
    padding-left: 0!important;
    padding-right: 0!important;
}
.FAQ button.flex.items-center.p-5.w-full.font-medium.text-left.text-gray-500.border.border-gray-200.focus\:ring-4.focus\:ring-gray-200.dark\:focus\:ring-gray-800.dark\:border-gray-700.dark\:text-gray-400.hover\:bg-gray-100.dark\:hover\:bg-gray-800.bg-gray-100.dark\:bg-gray-800.border-t-0.border-b-0.border-x-0, .FAQ button.flex.items-center.p-5.w-full.font-medium.text-left.text-gray-500.border.border-gray-200.focus\:ring-4.focus\:ring-gray-200.dark\:focus\:ring-gray-800.dark\:border-gray-700.dark\:text-gray-400.hover\:bg-gray-100.dark\:hover\:bg-gray-800.bg-gray-100.dark\:bg-gray-800.border-b-0.border-x-0, .FAQ button.flex.items-center.p-5.w-full.font-medium.text-left.text-gray-500.border.border-gray-200.focus\:ring-4.focus\:ring-gray-200.dark\:focus\:ring-gray-800.dark\:border-gray-700.dark\:text-gray-400.hover\:bg-gray-100.dark\:hover\:bg-gray-800.bg-gray-100.dark\:bg-gray-800.border-x-0{
    border-bottom: 0px !important;
}
.FAQ .p-5.border.border-gray-200.dark\:border-gray-700.dark\:bg-gray-900.border-b-0.border-x-0 {
    border-top: 0px;
    border-bottom: 1px solid black;
    padding-left: 0!important;
    padding-right: 0!important;
    color:#000 !important;
}
</style>
<template>
    <div class="container FAQ max-md: px-3 mt-4 md:mt-10  m-auto">
        <div class="max-w-3xl mx-auto">
            <div class="block justify-center">
                <h2 class="mb-3 md:mb-10 text-3xl md:text-5xl font-semibold text-center uppercase text-main-color">Frequently Asked Questions</h2>
                <p class="text-center text-black mt-3 text-gray-700 text-xl mb-5">{{sitename.siteName}} Common Questions: Find quick resolutions to familiar {{sitename.siteName}} concerns.</p>
            </div>
            <Accordion flush class="bg-white px-5 rounded-2xl">
                <accordion-panel>
                <accordion-header class="test1">What is the billing process like?</accordion-header>
                <accordion-content class="test2">
                    <div>
                        <p class="mb-2 text-gray-500 dark:text-gray-400 border-0">{{sitename.siteName}}'s subscription plan offers convenience and great value. For ₱399 per month, you can access and utilize all of {{sitename.siteName}}'s features on multiple devices. Our prices are set, and there are no additional charges. Furthermore, you have the flexibility to cancel your subscription at any time.</p>
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
                    <p class="mb-2 text-gray-500 dark:text-gray-400">We understand that circumstances can change. You have the flexibility to cancel your plan at any time.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>Who can benefit from {{sitename.siteName}}?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">{{sitename.siteName}} is designed to serve a diverse group of educators, including administrators, classroom teachers from both public and private schools, as well as homeschooling parents.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>How frequently do you introduce new features?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">We collaborate closely with prominent educators to ensure our toolkit continues to expand, incorporating fresh functionalities on a regular basis. If you have any ideas, feel free to share them with us!</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>Which devices can I use with {{sitename.siteName}}?</accordion-header>
                <accordion-content>
                    <div>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">{{sitename.siteName}} is compatible with various internet-connected devices, including smartphones, laptops, and desktop computers.</p>
                        <p class="mb-2 text-gray-500 dark:text-gray-400"> Is it necessary to download an app to utilize {{sitename.siteName}}? No need to download any app.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header>Is it necessary to download an app to utilize {{sitename.siteName}}?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">No need to download any app.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
                <accordion-panel>
                <accordion-header class="no-border">What sets {{sitename.siteName}} apart from ChatGPT?</accordion-header>
                <accordion-content>
                    <div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">{{sitename.siteName}} is uniquely built to cater to the specific needs of learning and development. It is designed to help users achieve impactful results without the need for complex commands or prompts. This sets {{sitename.siteName}} apart from platforms like ChatGPT, as it is specifically tailored to support individuals in the field of learning and development, regardless of their role or background.</p>
                    </div>
                </accordion-content>
                </accordion-panel>
            </Accordion>
        </div>
    </div>
</template>