<script setup>
    import { ref } from 'vue';
    import { useIdentityStore } from "../stores/siteIdentity";

    const sitename = useIdentityStore();
    const liveChat = ref(false);
    const show = ref(true);
</script>
<template>
    <div class="fixed bottom-20 right-4 z-50 sm:w-[30rem] animate__animated" :class="[ liveChat ? 'animate__slideInRight' : 'animate__slideOutRight', show ? 'hidden' : '' ]">
        <div class="border bg-white rounded-xl">
            <div>
                <div class="w-full">
                    <div class="relative flex items-center p-3 border-b border-gray-300">
                        <img class="object-cover w-10 h-10 rounded-full"
                            src="/android-chrome-512x512.png" alt="username" />
                        <span class="block ml-2 font-bold text-main-color">Assessing with {{sitename.siteName}}</span>
                        <!-- <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                        </span> -->
                    </div>
                    <div class="relative w-full p-6 overflow-y-auto sm:h-[40rem]">

                        <ul class="space-y-2">
                            <li class="flex justify-start">
                                <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                    <div class="flex items-center space-x-2">
                                    <img
                                        class="w-8 h-8 rounded-full"
                                        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                                        alt="User Avatar"
                                    />
                                    <span class="block">Hi</span>
                                    </div>
                                </div>
                            </li>
                            <li class="flex justify-end">
                                <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                    <div class="flex items-center space-x-2">
                                    <span class="block">Hiiii</span>
                                    <img
                                        class="w-8 h-8 rounded-full"
                                        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                                        alt="User Avatar"
                                    />
                                    </div>
                                </div>
                            </li>
                            <li class="flex justify-end">
                                <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                    <div class="flex items-center space-x-2">
                                    <span class="block">Hiiii</span>
                                    <img
                                        class="w-8 h-8 rounded-full"
                                        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                                        alt="User Avatar"
                                    />
                                    </div>
                                </div>
                            </li>
                            <li class="flex justify-start">
                                <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                                    <div class="flex items-center space-x-2">
                                    <img
                                        class="w-8 h-8 rounded-full"
                                        src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                                        alt="User Avatar"
                                    />
                                    <span class="block">Hi</span>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">

                        <input type="text" placeholder="Message"
                            class="block w-full py-2 pl-4 mx-3 border-main-color text-black rounded-full outline-none focus:outline-main-color focus:border-main-color border focus:text-gray-700"
                            name="message" required />
                        <button type="submit" class="focus:outline-none outline-none focus:border-transparent hover:border-transparent hover:outline-transparent">
                            <svg class="w-5 h-5 text-main-color origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="fixed bottom-4 right-4 z-50">
        <button @click="[liveChat = !liveChat, show = false]" class="bg-main-color hover:bg-main-color focus:outline-secondary-color focus:border-secondary-color  p-[initial] text-white rounded-full w-12 h-12 shadow-lg">
            <i class="text-3xl ti ti-message-dots"></i>
        </button>
    </div>
</template>