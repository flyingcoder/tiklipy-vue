<script setup>

</script>
<template>
    <div class="container  mx-auto px-2">
        <div class="flex flex-wrap">
            <div class="flex items-center py-4 w-full">
                <div class="w-full">
                    <div class="">
                        <div class="flex flex-wrap justify-between">
                            <div class="items-center ">
                                <h1 class="font-semibold text-xl mb-0 block dark:text-slate-100">Chat</h1>
                                <ol class="list-reset flex text-sm">
                                    <li><a href="#" class="text-gray-500">Escol Assist AI</a></li>
                                    <li><span class="text-gray-500 mx-2">/</span></li>
                                    <li class="text-blue-600 hover:text-blue-700">Consult</li>
                                </ol>
                            </div>
                            <!-- div class="flex items-center">
                                <button
                                    class="px-3 py-2 lg:px-4 bg-blue-500 text-white text-sm font-semibold rounded hover:bg-blue-600">Create
                                    New</button>
                            </!-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!--end container-->

    <div x-data="consult" class="container mx-auto px-2 relative pb-14 ">
        <div class="grid lg:grid-cols-12 gap-4">
            <div class="col-span-12 lg:col-span-3 mb-4">
                <div class="card h-full">
                    <!--end card-header-->
                    <div class="card-body p-0">
                        <div id="ChatBox" class="h-full" data-simplebar>
                            <div class="" id="Chat">
                                <ul class="list-group">
                                    <li
                                        class="list-group-item items-center flex border-b border-dashed border-slate-200 dark:border-slate-700 p-4 unread bg-slate-50 dark:bg-slate-700">
                                        <a href="">
                                            <div class="flex items-center">
                                                <div class="w-9 h-9 rounded relative">
                                                    <span class="absolute text-green-500 -left-1 -top-1">
                                                        <svg width="12" height="12">
                                                            <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                        </svg>
                                                    </span>
                                                    <img class="w-full h-full overflow-hidden object-cover rounded object-center"
                                                        src="assets/images/users/avatar-1.jpg" alt="logo" />
                                                </div>
                                                <div class="ml-2">
                                                    <div
                                                        class="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                        <h5 class=" font-medium text-sm">Mary Schneider</h5>
                                                    </div>
                                                    <p
                                                        class="focus:outline-none text-gray-800 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">
                                                        Good morning! Congratulations Friend Congratulations Friend</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="ml-auto self-center text-center">
                                            <span
                                                class="w-4 h-4 rounded-full bg-green-500 text-white text-xs font-medium text-center inline-block">3</span>
                                            <p
                                                class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">
                                                07:30
                                                AM</p>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                        <a href="">
                                            <div class="flex items-center">
                                                <div class="w-9 h-9 rounded relative">
                                                    <span class="absolute text-slate-300 -left-1 -top-1">
                                                        <svg width="12" height="12">
                                                            <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                        </svg>
                                                    </span>
                                                    <img class="w-full h-full overflow-hidden object-cover rounded object-center"
                                                        src="assets/images/users/avatar-9.jpg" alt="logo" />
                                                </div>
                                                <div class="ml-2">
                                                    <div
                                                        class="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                        <h5 class=" font-medium text-sm">Victor Harrison</h5>
                                                    </div>
                                                    <p
                                                        class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">
                                                        Good morning! Congratulations Friend Congratulations Friend</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="ml-auto self-center text-center">
                                            <p
                                                class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">
                                                07:10
                                                AM</p>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                        <a href="">
                                            <div class="flex items-center">
                                                <div class="w-9 h-9 rounded relative">
                                                    <span class="absolute text-slate-300 -left-1 -top-1">
                                                        <svg width="12" height="12">
                                                            <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                        </svg>
                                                    </span>
                                                    <img class="w-full h-full overflow-hidden object-cover rounded object-center"
                                                        src="assets/images/users/avatar-4.jpg" alt="logo" />
                                                </div>
                                                <div class="ml-2">
                                                    <div
                                                        class="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                        <h5 class=" font-medium text-sm">David Ward</h5>
                                                    </div>
                                                    <p
                                                        class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">
                                                        Good morning! Congratulations Friend Congratulations Friend</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="ml-auto self-center text-center">
                                            <p
                                                class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">
                                                04
                                                Apr</p>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                        <a href="">
                                            <div class="flex items-center">
                                                <div class="w-9 h-9 rounded relative">
                                                    <span class="absolute text-green-500 -left-1 -top-1">
                                                        <svg width="12" height="12">
                                                            <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                        </svg>
                                                    </span>
                                                    <img class="w-full h-full overflow-hidden object-cover rounded object-center"
                                                        src="assets/images/users/avatar-6.jpg" alt="logo" />
                                                </div>
                                                <div class="ml-2">
                                                    <div
                                                        class="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                        <h5 class=" font-medium text-sm">Virgil Locklin</h5>
                                                    </div>
                                                    <p
                                                        class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">
                                                        Good morning! Congratulations Friend Congratulations Friend</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="ml-auto self-center text-center">
                                            <p
                                                class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">
                                                03
                                                Apr</p>
                                        </div>
                                    </li>
                                    <li
                                        class="list-group-item items-center flex border-b border-dashed border-slate-200 p-4 dark:border-slate-700">
                                        <a href="">
                                            <div class="flex items-center">
                                                <div class="w-9 h-9 rounded relative">
                                                    <span class="absolute text-slate-300 -left-1 -top-1">
                                                        <svg width="12" height="12">
                                                            <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                        </svg>
                                                    </span>
                                                    <img class="w-full h-full overflow-hidden object-cover rounded object-center"
                                                        src="assets/images/users/avatar-5.jpg" alt="logo" />
                                                </div>
                                                <div class="ml-2">
                                                    <div
                                                        class="cursor-pointer hover:text-gray-900 focus:text-gray-500 text-gray-800 dark:text-gray-100 focus:outline-none">
                                                        <h5 class=" font-medium text-sm">John Martinez</h5>
                                                    </div>
                                                    <p
                                                        class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium flex-wrap truncate w-40">
                                                        Good morning! Congratulations Friend Congratulations Friend</p>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="ml-auto self-center text-center">
                                            <p
                                                class="focus:outline-none text-gray-500 dark:text-gray-400 text-xs font-medium">
                                                2 Apr
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div><!--end card-body-->
                </div> <!--end card-->
            </div>
            <div class="col-span-12 lg:col-span-9">
                <div class="card mb-4">
                    <!-- component -->
                    <div class="max-h-[500px] flex-1 p:2 sm:p-6 justify-between flex flex-col">
                        <div
                            class="flex sm:items-center justify-between p-4 border-b border-dashed border-gray-200 dark:border-slate-700">
                            <div class="relative flex items-center space-x-4">
                                <div class="relative">
                                    <img src="assets/images/logo-sm.png" alt=""
                                        class="w-10 sm:w-16 h-10 sm:h-16 rounded-full">
                                </div>
                                <div class="flex flex-col leading-tight">
                                    <div class="text-xl mt-1 flex items-center font-medium">
                                        <span class="text-gray-700 mr-3 dark:text-slate-200">EscolAssist Bot</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto" data-simplebar>
                            <template x-for="m in messages" :key="m.content">
                                <template x-if="m.role !== 'system'">
                                    <div class="chat-message">
                                        <div :class="{'justify-end' : m.role === 'user'}" class="flex items-end">
                                            <div :class="{'order-1': m.role === 'user', 'order-2': m.role === 'assistant'}"
                                                class="flex flex-col space-y-2 text-sm max-w-xs md:max-w-lg mx-2 items-end font-medium">
                                                <div class="my-2">
                                                    <span x-html="m.content.replace(/\n/g, '<br>')"
                                                        :class="{'rounded-bl-none border border-gray-100 bg-gray-50 text-gray-600 dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400': m.role === 'assistant', 'rounded-br-none bg-blue-500 text-white': m.role === 'user'}"
                                                        class="px-4 py-2 rounded-lg inline-block"></span>
                                                </div>
                                            </div>
                                            <img :src="m.role === 'user' ? 'assets/images/users/avatar-5.jpg' : 'assets/images/logo-sm.png'"
                                                alt="My profile" class="w-8 h-8 rounded-full"
                                                :class="{'order-2': m.role === 'user', 'order-1': m.role === 'assistant'}">
                                        </div>
                                    </div>
                                </template>
                            </template>
                        </div>
                        <div class="border-t border-dashed px-2 border-gray-200 pt-4 mb-2 sm:mb-0 dark:border-slate-700">
                            <div class="relative flex">
                                <input type="text" placeholder="e.g: How can I improve my teaching?"
                                    class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-400 pl-4 bg-gray-50 dark:bg-slate-700 rounded-md py-2 border border-gray-200 dark:border-slate-800">
                                <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">

                                    <button type="button"
                                        class="inline-flex items-center justify-center rounded-md px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                        <i class="fas fa-paper-plane"></i>
                                    </button>
                                    <!-- <button type="button"
                                        class="inline-flex rounded-full items-center justify-center rounded-md px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                                        <i class="fas fa-paper-plane"></i>
                                    </button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!--end card-->
            </div><!--end col-->
        </div><!--end inner-grid-->
        <!-- footer -->
    </div>
</template>