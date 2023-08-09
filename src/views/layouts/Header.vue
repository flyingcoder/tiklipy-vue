<script setup>
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";
    import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
    import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue';
    
    const router = useRouter();
    const isLoggedIn = ref(false);

    let auth;
    onMounted(() => {
        auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
        });
    });

    const handleSignOut = () => {
        signOut(auth).then(() => {
        router.push('sign-in');
        });
    };
</script>
<template>
    <header class="bg-white">
        <nav class="border-gray-200 dark:bg-gray-900 mx-14">
            <div class="flex flex-wrap items-center justify-between px-4 py-6 mx-auto">
                <div class="flex items-center md:order-3 relative z-10">
                    <a v-if="!isLoggedIn" @click="$emit('loginIsClick')" class="cursor-pointer text-gray-800 dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                      Login
                    </a>
                    <router-link v-if="!isLoggedIn" to="/pricing" class="cursor-pointer text-white bg-main-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:text-white">
                      Sign up
                    </router-link>
                    <router-link v-if="isLoggedIn" :to="{ name: 'dashboard' }" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                        <i class="pb-1 mr-1 text-lg ti ti-atom"></i> Portal
                    </router-link>  
                    <a @click="handleSignOut" v-if="isLoggedIn" href="#" class="text-white bg-main-color ml-2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                      Logout
                    </a>
                    <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                
                <div class="absolute inset-x-0 md:order-2 z-0">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src="/public/tiklipy-logo-indigo.png" class="h-12 m-auto" alt="Flowbite Logo" />
                </a>
                </div>
                
                <div id="mega-menu" class="relative z-10 items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul class="flex flex-col mt-4 text-lg font-medium md:flex-row md:space-x-12 md:mt-0">
                        <li>
                            <router-link to="/features" active-class="text-main-color dark:text-white" class="block py-2 pl-3 pr-4 text-gray-900 dark:text-white dark:hover:text-main-color dark:hover:bg-gray-700 dark:border-gray-700" >
                                <i class="pb-1 mr-1 text-lg ti ti-book"></i> Features
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/pricing" class="block py-2 pl-3 pr-4 text-gray-900 dark:text-white dark:hover:text-main-color dark:hover:bg-gray-700 dark:border-gray-700"
                                        active-class="text-main-color dark:text-white">Pricing</router-link>
                        </li>
                        <li v-if="isLoggedIn">
                            <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown"
                                    class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 bg-transparent border-b border-gray-100 md:w-auto dark:text-white dark:hover:text-main-color dark:hover:bg-gray-700 dark:border-gray-700"
                            >
                                Assesment
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="mega-menu-dropdown"
                                class="absolute z-10 hidden w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                <div class="p-4">
                                    <ul class="space-y-4">
                                        <li>
                                            <router-link to="/blogs"
                                                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                                                        active-class="text-blue-600 dark:text-blue-500">Post</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/about"
                                                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                                                        active-class="text-blue-600 dark:text-blue-500">About</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown"
                                    class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 bg-transparent md:w-auto focus:outline-none hover:border-transparent hover:text-main-color dark:text-white focus:border-transparent focus:ring-0"
                            >
                                About
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <div id="mega-menu-dropdown"
                                class="absolute z-10 hidden w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                                <div class="w-36">
                                    <ul class="space-y-4">
                                        <router-link to="/blogs"
                                                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                                                        active-class="text-blue-600 dark:text-blue-500">
                                            <li class="px-4 py-3 hover:bg-gray-50 font-semibold">
                                                Post
                                            </li>
                                        </router-link>
                                        <router-link to="/about"
                                                        class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                                                        active-class="text-blue-600 dark:text-blue-500">
                                            <li class="px-4 py-3 hover:bg-gray-50 font-semibold">
                                                About
                                            </li>
                                        </router-link>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
