<script setup>
    import { ref, onMounted } from 'vue';
    import { Auth } from '../../plugins/firebase';
    import { getDoc, addDoc, getFirestore, collection, onSnapshot } from "firebase/firestore";

    const messages = ref([
        {
            role: "system",
            content: "You are a helpful teacher assistant."
        },
        {
            role: "user",
            content: "Can you tell me how to approach teaching multiplication to pupils who have trouble remembering the multiplication table? Give me the top 3 best strategies."
        },
        {
            role: "assistant",
            content: "Absolutely! Here are three effective strategies for teaching multiplication to pupils who struggle with remembering the multiplication table:\n\n1. Visual aids and manipulatives: Use visual aids such as multiplication grids and charts, number lines, or arrays to help students visualize and understand multiplication concepts. Manipulatives like counters, cubes, or tiles can also be used to create arrays or groups to demonstrate multiplication visually.\n\n2. Mnemonic devices and tricks: Teach students mnemonic devices or memory tricks to help them remember the multiplication facts. For example, the \"doubles\" trick involves multiplying a number by 2, or using patterns like doubling and halving to solve other multiplication facts, such as multiplying by 4 or 8. These tricks can make the learning process more engaging and memorable for students.\n\n3. Multiplication games and activities: Incorporate games and interactive activities to make multiplication practice more enjoyable. There are several board games, online games, or even card games available that focus on multiplication. Additionally, you can create your own activities like flashcards, puzzles, or bingo games to reinforce the multiplication facts in a fun and engaging way.\n\nRemember to provide ample opportunities for practice and reinforcement, gradually building on their knowledge as they gain confidence. Being patient, supportive, and incorporating a variety of teaching methods"
        }
    ]);

    onMounted(() => {
        gptRef();
        console.log('testing');
    });

    const gptRef = async () => {
        
        const db = getFirestore();
        const prompts = {
            prompt: 'testing'
        }

        const gptRef = collection(
            db,
            "customers",
            Auth.currentUser.uid,
            "generates"
        );

        const subDoc = await addDoc(gptRef, prompts);

        onSnapshot(subDoc,  (snap) => {
            const { error, doc } = snap.data();

            console.log(snap.data());

            if(error) {
                console.error('An error occored: ${error.message}');
                isLoading.value = false
            }
        });
    };
</script>

<template>
    <div class="container relative px-2 mx-auto pb-14 mt-7">
        
    <div class="grid gap-4 lg:grid-cols-12">
      <div class="col-span-12 lg:col-span-3">
        <div class="h-full bg-white shadow-md rounded-xl">
                <!--end card-header-->
                <div class="p-0 card-body">
                    <div id="ChatBox" class="h-full" data-simplebar>
                        <div class="" id="Chat">
                            <ul class="list-group">
                                <li class="flex items-center p-2 border-b border-dashed list-group-item border-slate-200 dark:border-slate-700">
                                    <button class="w-full px-4 py-2 mt-2 font-bold text-white rounded bg-main-color hover:bg-secondary-color">
                                        <i class="pb-1 mr-1 text-lg ti ti-plus"></i> New Chat
                                    </button>
                                </li>
                                <li
                                    class="flex items-center p-4 border-b border-dashed list-group-item border-slate-200 dark:border-slate-700 unread bg-slate-50 dark:bg-slate-700">
                                    <a href="">
                                        <div class="flex items-center">
                                            <div class="relative rounded w-9 h-9">
                                                <span class="absolute text-green-500 -left-1 -top-1">
                                                    <svg width="12" height="12">
                                                        <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                    </svg>
                                                </span>
                                                <img class="object-cover object-center w-full h-full overflow-hidden rounded"
                                                    src="/public/avatar/avatar-1.jpg" alt="logo" />
                                            </div>
                                            <div class="ml-2">
                                                <div
                                                    class="text-gray-800 cursor-pointer hover:text-gray-900 focus:text-gray-500 dark:text-gray-100 focus:outline-none">
                                                    <h5 class="text-sm font-medium ">Mary Schneider</h5>
                                                </div>
                                                <p
                                                    class="flex-wrap w-40 text-xs font-medium text-gray-800 truncate focus:outline-none dark:text-gray-400">
                                                    Good morning! Congratulations Friend Congratulations Friend</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="self-center ml-auto text-center">
                                        <span
                                            class="inline-block w-4 h-4 text-xs font-medium text-center text-white bg-green-500 rounded-full">3</span>
                                        <p
                                            class="text-xs font-medium text-gray-500 focus:outline-none dark:text-gray-400">
                                            07:30
                                            AM</p>
                                    </div>
                                </li>
                                <li
                                    class="flex items-center p-4 border-b border-dashed list-group-item border-slate-200 dark:border-slate-700">
                                    <a href="">
                                        <div class="flex items-center">
                                            <div class="relative rounded w-9 h-9">
                                                <span class="absolute text-slate-300 -left-1 -top-1">
                                                    <svg width="12" height="12">
                                                        <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                    </svg>
                                                </span>
                                                <img class="object-cover object-center w-full h-full overflow-hidden rounded"
                                                    src="/public/avatar/avatar-9.jpg" alt="logo" />
                                            </div>
                                            <div class="ml-2">
                                                <div
                                                    class="text-gray-800 cursor-pointer hover:text-gray-900 focus:text-gray-500 dark:text-gray-100 focus:outline-none">
                                                    <h5 class="text-sm font-medium ">Victor Harrison</h5>
                                                </div>
                                                <p
                                                    class="flex-wrap w-40 text-xs font-medium text-gray-500 truncate focus:outline-none dark:text-gray-400">
                                                    Good morning! Congratulations Friend Congratulations Friend</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="self-center ml-auto text-center">
                                        <p
                                            class="text-xs font-medium text-gray-500 focus:outline-none dark:text-gray-400">
                                            07:10
                                            AM</p>
                                    </div>
                                </li>
                                <li
                                    class="flex items-center p-4 border-b border-dashed list-group-item border-slate-200 dark:border-slate-700">
                                    <a href="">
                                        <div class="flex items-center">
                                            <div class="relative rounded w-9 h-9">
                                                <span class="absolute text-slate-300 -left-1 -top-1">
                                                    <svg width="12" height="12">
                                                        <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                    </svg>
                                                </span>
                                                <img class="object-cover object-center w-full h-full overflow-hidden rounded"
                                                    src="/public/avatar/avatar-9.jpg" alt="logo" />
                                            </div>
                                            <div class="ml-2">
                                                <div
                                                    class="text-gray-800 cursor-pointer hover:text-gray-900 focus:text-gray-500 dark:text-gray-100 focus:outline-none">
                                                    <h5 class="text-sm font-medium ">Victor Harrison</h5>
                                                </div>
                                                <p
                                                    class="flex-wrap w-40 text-xs font-medium text-gray-500 truncate focus:outline-none dark:text-gray-400">
                                                    Good morning! Congratulations Friend Congratulations Friend</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="self-center ml-auto text-center">
                                        <p
                                            class="text-xs font-medium text-gray-500 focus:outline-none dark:text-gray-400">
                                            07:10
                                            AM</p>
                                    </div>
                                </li>
                                <li
                                    class="flex items-center p-4 border-b border-dashed list-group-item border-slate-200 dark:border-slate-700">
                                    <a href="">
                                        <div class="flex items-center">
                                            <div class="relative rounded w-9 h-9">
                                                <span class="absolute text-slate-300 -left-1 -top-1">
                                                    <svg width="12" height="12">
                                                        <circle cx="4" cy="4" r="4" fill="currentColor"></circle>
                                                    </svg>
                                                </span>
                                                <img class="object-cover object-center w-full h-full overflow-hidden rounded"
                                                    src="/public/avatar/avatar-9.jpg" alt="logo" />
                                            </div>
                                            <div class="ml-2">
                                                <div
                                                    class="text-gray-800 cursor-pointer hover:text-gray-900 focus:text-gray-500 dark:text-gray-100 focus:outline-none">
                                                    <h5 class="text-sm font-medium ">Victor Harrison</h5>
                                                </div>
                                                <p
                                                    class="flex-wrap w-40 text-xs font-medium text-gray-500 truncate focus:outline-none dark:text-gray-400">
                                                    Good morning! Congratulations Friend Congratulations Friend</p>
                                            </div>
                                        </div>
                                    </a>
                                    <div class="self-center ml-auto text-center">
                                        <p
                                            class="text-xs font-medium text-gray-500 focus:outline-none dark:text-gray-400">
                                            07:10
                                            AM</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div><!--end card-body-->
            </div> <!--end card-->
      </div>
      <div class="h-full col-span-12 lg:col-span-9">
        <div class="">
          <!-- ... Chat messages and input area ... -->
          <div class="bg-white rounded-xl shadow-md max-h-[500px] flex-1 p:2 sm:p-6 justify-between flex flex-col">
                    <div
                        class="flex justify-between p-4 border-b border-gray-200 border-dashed sm:items-center dark:border-slate-700">
                        <div class="relative flex items-center space-x-4">
                            <div class="relative">
                                <img src="/public/android-chrome-512x512.png" alt=""
                                    class="w-10 h-10 rounded-full sm:w-16 sm:h-16">
                            </div>
                            <div class="flex flex-col leading-tight">
                                <div class="flex items-center mt-1 text-xl font-medium">
                                    <span class="mr-3 text-gray-700 dark:text-slate-200">Tiklipy Bot</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="messages" class="flex flex-col p-3 space-y-4 overflow-y-auto" data-simplebar>
                        <div v-for="m in messages" :key="m.content">
                            <template v-if="m.role !== 'system'">
                                <div class="chat-message">
                                <div :class="{'justify-end': m.role === 'user'}" class="flex items-end">
                                    <div :class="{'order-1': m.role === 'user', 'order-2': m.role === 'assistant'}" class="flex flex-col items-end max-w-xs mx-2 space-y-2 text-sm font-medium md:max-w-lg">
                                    <div class="my-2">
                                        <span v-html="m.content.replace(/\n/g, '<br>')" :class="{'rounded-bl-none border border-gray-100 bg-gray-50 text-gray-600 dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400': m.role === 'assistant', 'rounded-br-none bg-blue-500 text-white': m.role === 'user'}" class="inline-block px-4 py-2 rounded-lg"></span>
                                    </div>
                                    </div>
                                    <img :src="m.role === 'user' ? '/public/avatar/avatar-5.jpg' : '/public/android-chrome-512x512.png'" alt="My profile" class="w-8 h-8 rounded-full" :class="{'order-2': m.role === 'user', 'order-1': m.role === 'assistant'}">
                                </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="px-2 pt-4 mb-2 border-t border-gray-200 border-dashed sm:mb-0 dark:border-slate-700">
                        <div class="relative flex">
                            <input type="text" placeholder="e.g: How can I improve my teaching?"
                                class="w-full py-2 pl-4 text-gray-600 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:placeholder-gray-400 bg-gray-50 dark:bg-slate-700 dark:border-slate-800">
                            <div class="absolute inset-y-0 right-0 items-center hidden sm:flex">

                                <button type="button"
                                    class="inline-flex items-center justify-center px-4 py-2 text-white transition duration-500 ease-in-out bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none">
                                    <i class="text-lg ti ti-send"></i>
                                </button>
                                <!-- <button type="button"
                                    class="inline-flex items-center justify-center px-4 py-3 text-white transition duration-500 ease-in-out bg-blue-500 rounded-md rounded-full hover:bg-blue-400 focus:outline-none">
                                    <i class="fas fa-paper-plane"></i>
                                </button> -->
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</template>