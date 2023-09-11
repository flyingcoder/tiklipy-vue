<script setup>
    import { ref } from 'vue';
    import { Accordion, AccordionPanel, Button, AccordionHeader, AccordionContent } from 'flowbite-vue';
    const price = 399;
</script>
<template>
    <div class="container mx-auto my-7 text-center px-3">
        <div class="max-w-[40rem] m-auto">
            <div class="text-4xl sm:text-6xl text-gray-800 font-semibold">The present that simplifies the art of teaching.</div>
            <p class="mt-3 md:mt-9 text-lg text-gray-700">Demonstrate your gratitude to educators by offering them the gift of more time and a reduced workload. A gift subscription is an ideal choice for both teachers who are already enthusiasts of Tiklipy and those who are just discovering the platform.</p>
        </div>
        <div class="max-w-md mt-5 md:mt-16 bg-gray-100 border border-gray-200 rounded-lg shadow mx-auto dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5 border-b-2">
                <div class="justify-between flex text-gray-700 text-base font-medium !outline-0 !border-0">
                    <div class="self-center">1 Month Subscription</div>
                    <div>
                        <span class="pr-3">₱{{ price }}</span>
                        <Button class="!outline-0 !border-0 bg-main-color font-semibold transition duration-240 rounded-md hover:bg-secondary-color hover:shadow-md hover:shadow-[#646cffa6]">Buy</Button>
                    </div>
                    
                </div>
                
                <div class="mt-2">
                    <p class="text-justify text-gray-500 text-sm">Discover the joy of Tiklipy - the ultimate companion for every teacher! This heartfelt gesture provides a complimentary one-month access to Tiklipy's robust educational resources. An excellent means to bring a smile to any educator's face.</p>
                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" class="flex items-center px-0 text-main-color justify-between w-full font-medium text-left hover:border-transparent focus:outline-none border border-b-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>Terms & Conditions</span>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class=" dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">*This gift code is valid for individual plans exclusively. It cannot be exchanged for any other non-individual plans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-5 border-b-2">
                <div class="justify-between flex text-gray-700 text-base font-medium">
                    <div class="self-center">3 Months Subscription</div>
                    <div>
                        <span class="pr-3">₱{{ price * 3 }}</span>
                        <Button class="border-0 bg-main-color font-semibold transition duration-240 rounded-md hover:bg-secondary-color hover:shadow-md hover:shadow-[#646cffa6]">Buy</Button>
                    </div>
                    
                </div>
                
                <div class="mt-2">
                    <p class="text-justify text-gray-500 text-sm">Embrace the gift of Tiklipy - every teacher's best friend! This token of appreciation offers three months of free access to Tiklipy's powerful teaching tools. The perfect way to brighten an educator's day.</p>
                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" class="flex items-center px-0 text-main-color justify-between w-full font-medium text-left hover:border-transparent focus:outline-none border border-b-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>Terms & Conditions</span>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class=" dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">*This gift code is valid for individual plans exclusively. It cannot be exchanged for any other non-individual plans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-5 border-b-2">
                <div class="justify-between flex text-gray-700 text-base font-medium">
                    <div class="self-center">1 Year Subscription</div>
                    <div>
                        <span class="pr-3">₱{{ price * 7 }}</span>
                        <Button class="border-0 bg-main-color font-semibold transition duration-240 rounded-md hover:bg-secondary-color hover:shadow-md hover:shadow-[#646cffa6]">Buy</Button>
                    </div>
                </div>
                <div class="mt-2">
                    <p class="text-justify text-gray-500 text-sm">Explore the essence of Tiklipy's gift - the ultimate companion for every teacher! This token of appreciation offers a full year of free access to Tiklipy's powerful teaching tools, providing the perfect way to brighten an educator's day.</p>
                    <div id="accordion-collapse" data-accordion="collapse">
                        <h2 id="accordion-collapse-heading-1">
                            <button type="button" class="flex items-center px-0 text-main-color justify-between w-full font-medium text-left hover:border-transparent focus:outline-none border border-b-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>Terms & Conditions</span>
                            </button>
                        </h2>
                        <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div class=" dark:bg-gray-900">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">*This gift code is valid for individual plans exclusively. It cannot be exchanged for any other non-individual plans.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-5 border-b-2">
                <div class="mt-2">
                    <p class="text-justify text-gray-500 text-xs pb-2">Claiming your Tiklipy Gift Card is effortless. Just head over to www.tiklipy.com and create an account. While signing up, you'll come across a section that reads 'Apply a Discount Code.' Give it a click and input your special Gift Card code. And that's all it takes - you're good to go!</p>
                    <p class="text-justify text-gray-500 text-xs py-2">Already a Tiklipy user? Don't worry, redeeming your Gift Card is a breeze. Simply go to 'Account Settings' and choose 'Plan'. From there, you'll find the 'Add a Discount Code' option where you can easily enter your Gift Card code.</p>
                    <p class="text-justify text-gray-500 text-xs py-2">Need assistance? Contact us at: hello@tiklipy.com</p>
                    <!-- <a href="#" class="text-center text-xs underline">Check your Tiklipy gift code balance.</a> -->
                </div>
            </div>
        </div>
    </div>
</template>