<script setup>
    import { onMounted, ref } from "vue";
    import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
    import { Input, Button } from 'flowbite-vue'

    const isLoggedIn = ref(false);

    let auth;
    onMounted(() => {
        auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
        });
    });
</script>

<template>
    <div>
        <div class="container mx-auto">
            <footer v-if="isLoggedIn" class="mt-10">
                <div class="bottom-0 justify-between px-4 py-10 mx-16 font-light text-center md:flex md:items-center md:text-left" style="width: -webkit-fill-available">
                    <div class="mb-6 text-sm font-medium md:mb-0">© 2023 Tiklipy. All rights reserved.</div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <a href="#" class="block text-sm">Terms</a>
                        <a href="#" class="block text-sm">Privacy</a>
                        <a href="#" class="block text-sm">License</a>
                    </div>
                </div>
            </footer>
            <footer v-if="!isLoggedIn" class="dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-16 lg:py-20">
                    <div class="md:flex md:justify-between">
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                            <div class="w-48">
                                <div class="mb-6 md:mb-0">
                                    <a href="https://flowbite.com/" class="flex items-center">
                                        <img src="/public/tiklipy-logo-indigo.png" height="48" width="108" class="mr-3" alt="Ticklipy Logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="w-52">
                                <h2 class="mb-6 text-xs font-semibold text-gray-600 uppercase dark:text-white">Product</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://flowbite.com/" class=" text-gray-900 font-semibold">Tutorials</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://tailwindcss.com/" class="text-gray-900 font-semibold">Pricing</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://tailwindcss.com/" class="text-gray-900 font-semibold">Send A Gift</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-52">
                                <h2 class="mb-6 text-xs font-semibold text-gray-600 uppercase dark:text-white">Resources</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://github.com/themesberg/flowbite" class="text-gray-900 font-semibold">Blog</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://discord.gg/4eeurUVvTy" class="text-gray-900 font-semibold">Help Center</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="https://discord.gg/4eeurUVvTy" class="text-gray-900 font-semibold">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-52">
                                <h2 class="mb-6 text-xs font-semibold text-gray-600 uppercase dark:text-white">Company</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="text-gray-900 font-semibold">About</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="text-gray-900 font-semibold">Media Kit</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="text-gray-900 font-semibold">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="block w-96">
                            <div class="flex text-gray-700 mb-5 font-semibold">Subscribe to Our Newsletter</div>
                            <div class="w-full">
                                <Input size="lg" placeholder="Email Address">
                                    <template #prefix>
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </template>
                                    <template #suffix>
                                    <Button>Join</Button>
                                    </template>
                                </Input>
                            </div>
                            <div class="flex text-black mt-3 text-sm">We care about your privacy</div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-8 mt-16" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <div class="flex">
                            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Ticklipy™</a>.&nbsp; All Rights Reserved.</span>
                            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 ml-7">
                                <a href="#" class="block text-sm">Terms</a>
                                <a href="#" class="block text-sm">Privacy</a>
                                <a href="#" class="block text-sm">License</a>
                            </div>
                        </div>
                        
                        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                                    </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                                    </svg>
                                <span class="sr-only">Discord community</span>
                            </a>
                            <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
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