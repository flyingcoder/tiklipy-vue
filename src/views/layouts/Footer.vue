<script setup>
    import { ref } from 'vue';
    import { Input, Button } from 'flowbite-vue';
    import expressModel from "../../models/express";

    const backEndModel = new expressModel();
    const email = ref('');

    const saveToFireBase = () => {
        if(email.value)
            backEndModel.addNewsletter(email.value);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<template>
    <div>
        <div class="container mx-auto">
            <footer class="dark:bg-gray-900">
                <div class="mx-auto w-full p-4 py-16 lg:py-20">
                    <div class="flex flex-row flex-wrap justify-between">
                        <div class="basis-full lg:basis-2/12">
                                <div class="mb-6 md:mb-0">
                                    <router-link :to="{name:'home'}" class="max-xs:justify-center flex items-center">
                                        <img src="/tiklipy-logo-indigo.png" height="48" width="150" class="mr-3" alt="Tiklipy Logo" />
                                    </router-link>
                                </div>
                            </div>
                        <div class="max-xs:text-center max-lg:py-7 flex flex-row flex-wrap basis-full lg:basis-5/12">
                            <div class="max-xs:py-3 max-xs:basis-full basis-1/3">
                                <h2 class="mb-6 text-xs font-semibold text-gray-600 uppercase dark:text-white">Product</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <router-link :to="{ name: 'home', hash: '#pricing' }" class="text-gray-900 font-semibold">Pricing</router-link>
                                    </li>
                                    <li class="mb-4">
                                        <router-link :to="{name: 'gifts'}" class="text-gray-900 font-semibold">Send A Gift</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="max-xs:py-3 max-xs:basis-full basis-1/3">
                                <h2 class="mb-6 text-xs font-semibold text-gray-600 uppercase dark:text-white">Resources</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <router-link :to="{name: 'blogs'}" class="text-gray-900 font-semibold">Blog</router-link>
                                    </li>
                                    <li class="mb-4">
                                        <router-link :to="{name: 'help'}" class="text-gray-900 font-semibold">Tikipy Support Hub</router-link>
                                    </li>
                                    <li class="mb-4">
                                        <router-link :to="{name: 'faq'}" class="text-gray-900 font-semibold">FAQs</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="max-xs:py-3 max-xs:basis-full basis-1/3">
                                <h2 class="mb-6 text-xs font-semibold text-gray-600 uppercase dark:text-white">Company</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <router-link :to="{name: 'about'}" class="text-gray-900 font-semibold">About</router-link>
                                    </li>
                                    <li class="mb-4">
                                        <a href="tel:+1234567890" class="text-gray-900 font-semibold">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="max-xs:text-center basis-full lg:basis-3/12">
                            <div class="text-gray-700 mb-5 font-semibold">Subscribe to Our Newsletter</div>
                            <div class="w-full">
                                <Input size="lg" type="email" v-model="email" placeholder="Email Address" class="bg-transparent-input">
                                    <template #suffix>
                                    <Button @click="saveToFireBase" class="border-0 transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color max-xs:hidden">Join</Button>
                                    </template>
                                </Input>
                                <Button @click="saveToFireBase" class="!text-base xs:hidden w-full mt-3 py-4  border-0 transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color">Join</Button>
                            </div>
                            <div class="max-xs:text-black mt-3  text-sm">We care about your privacy</div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-8 mt-16" />
                    <div class="flex max-md:flex-col-reverse justify-between">
                        <div class="flex flex-wrap">
                            <span class="md:mr-5 max-md:basis-full text-sm text-gray-500 max-md:text-center dark:text-gray-400 max-md:py-5">© 2023 <router-link :to="{name: 'home'}" class="hover:underline">Tiklipy™</router-link>.&nbsp; All Rights Reserved.</span>
                            <div class="max-md:basis-full flex flex-warp max-md:justify-center">
                                <router-link :to="{name: 'terms'}">
                                    <a class="mx-1 block text-sm">Terms</a>
                                </router-link>
                                <router-link :to="{name: 'privacy'}">
                                    <a class="mx-1 block text-sm">Privacy</a>
                                </router-link>
                                <router-link :to="{name: 'license'}">
                                    <a class="mx-1 block text-sm">License</a>
                                </router-link>
                            </div>
                        </div>
                        <div class="flex mt-4 space-x-5 max-md:justify-center sm:mt-0">
                            <a href="https://www.facebook.com/profile.php?id=61550675489090" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="transition duration-240 text-main-color hover:text-secondary-color w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                                    </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>
                            <a href="https://twitter.com/tiklipy007" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="text-main-color hover:text-secondary-color w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                                </svg>
                                <span class="sr-only">Twitter page</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    
</template>