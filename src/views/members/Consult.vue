<script setup>
    import { ref, onMounted, watch } from 'vue';
    import { useAuthStore } from '../../stores/auth';
    import { getDoc, addDoc, getFirestore, collection, onSnapshot } from "firebase/firestore";
    import axios from '../../plugins/axios';

    const messages = ref([]);
    const isGenerating = ref(false);
    const prompt = ref("");
    const auth = useAuthStore();

    axios.defaults.headers.common['Authorization'] = auth.authUser.accessToken;

    //watch promt to add typing animation
    watch(prompt, (msg) => {
        //add typing variable
    });

    onMounted(() => {
        
    });

    const storeMessage = () => {
        //add new document for a new message
    }

    const fetchMessages = () => {
        //fetch messages to firebase base on chat collection
    }

    const newChat = async () => {
        //add new collection to firebase
    }

    const sendMessage = async () => {
        isGenerating.value = true;

        try {
            const promptObject = { role: 'user', content: prompt.value,};
            messages.value.push(promptObject);
            prompt.value = '';
            
            await axios.post('/api/v1/consult', messages.value)
                    .then((completion) => { messages.value.push(completion.data.message) })

            isGenerating.value = false;
        } catch (error) {
            console.log(error)
            isGenerating.value = false;
        } 
    }
</script>

<template>
    <div class="container relative px-2 mx-auto pb-14 mt-7">
        
    <div class="grid gap-4 lg:grid-cols-12">
      <div class="col-span-12 lg:col-span-4 xl:col-span-3">
        <div class="h-full bg-white shadow-md rounded-xl">
                <!--end card-header-->
                <div class="p-0 card-body">
                    <div id="ChatBox" class="h-full" data-simplebar>
                        <div class="" id="Chat">
                            <ul class="list-group">
                                <li class="flex items-center p-2 border-b border-dashed list-group-item border-slate-200 dark:border-slate-700">
                                    <button @click="newChat" class="w-full px-4 py-2 mt-2 font-bold text-white rounded bg-main-color hover:bg-secondary-color">
                                        <i class="pb-1 mr-1 text-lg ti ti-plus"></i> New Chat
                                    </button>
                                </li>

                                <li class="flex items-center p-4 border-b border-dashed list-group-item border-slate-200 dark:border-slate-700">
                                    <a href="">
                                        <div class="flex items-center">
                                            <div class="relative rounded w-9 h-9">
                                                <div class="object-cover object-center w-full h-full overflow-hidden rounded">
                                                    <i class="ti ti-message-circle-bolt"></i>
                                                </div>
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
      <div class="h-full col-span-12 lg:col-span-8 xl:col-span-9">
        <div class="">
          <!-- ... Chat messages and input area ... -->
          <div class="bg-white rounded-xl shadow-md max-h-[500px] flex-1 p:2 sm:p-6 justify-between flex flex-col">
                    <div class="flex justify-between p-4 border-b border-gray-200 border-dashed sm:items-center dark:border-slate-700">
                        <div class="relative flex items-center space-x-4">
                            <div class="relative">
                                <img src="/android-chrome-512x512.png" alt=""
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
                                        <span v-html="m.content.replace(/\n/g, '<br>')" :class="{'rounded-bl-none border border-gray-100 bg-gray-50 text-gray-600 dark:border-slate-800 dark:bg-slate-700 dark:text-slate-400': m.role === 'assistant', 'rounded-br-none bg-secondary-color text-white': m.role === 'user'}" class="inline-block px-4 py-2 rounded-lg"></span>
                                    </div>
                                    </div>
                                    <img :src="m.role === 'user' ? '/avatar/avatar-5.jpg' : '/android-chrome-512x512.png'" alt="My profile" class="w-8 h-8 rounded-full" :class="{'order-2': m.role === 'user', 'order-1': m.role === 'assistant'}">
                                </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="px-2 pt-4 mb-2 border-t border-gray-200 border-dashed sm:mb-0 dark:border-slate-700">
                        <div class="relative flex">
                            <input :disabled="isGenerating" v-model="prompt" type="text" :placeholder="isGenerating ? 'Processing the best response...' : 'e.g: How can I improve my teaching?'"
                                class="w-full py-2 pl-4 text-gray-600 placeholder-gray-400 border border-gray-200 rounded-md focus:outline-none focus:placeholder-gray-400 bg-gray-50 dark:bg-slate-700 dark:border-slate-800">
                            <div class="inset-y-0 right-0 items-center ml-2 sm:flex">
                                <button :class="!prompt || isGenerating ? 'cursor-not-allowed' : 'hover:shadow-md hover:shadow-[#646cffa6] hover:bg-secondary-color'" @click="sendMessage" :disabled="!prompt || isGenerating" type="button"
                                    class="inline-flex items-center justify-center px-4 py-2 text-white transition border-0 rounded-md bg-main-color duration-240 focus:outline-none">
                                    <i class="text-lg ti ti-send"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</template>