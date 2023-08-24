<script setup>
    import { onMounted, ref } from "vue";
    import Navigation from "../../components/Navigation.vue";
    import { useAuthStore } from "../../stores/auth";
    import { useUserStore } from "../../stores/user";
    // import LiveChat from '../../components/LiveChat.vue';
    
    const isLoggedIn = ref(false);
    const isMenuHidden = ref(true);
    const dropdownMenu = ref(true);
    const authStore = useAuthStore();
    const userStore = useUserStore();

    onMounted(() => {
        isLoggedIn.value = authStore.user;
    });

    const handleSignOut = async () => {
        const success = await authStore.logout();
        if(success) isLoggedIn.value = false;
    };

    const toggleMenu = () => {
        isMenuHidden.value = !isMenuHidden.value;
    };

    const toggleDropdown = () => {
        dropdownMenu.value = !dropdownMenu.value;
    };

    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }
</script>
<template>
    <!-- <LiveChat /> -->
    <header class="bg-white relative  z-40 ">
        <Navigation>
            <template #right>
                <router-link v-if="!isLoggedIn" :to="{ name: 'login' }" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 transition divide-gray-100 max-xs:hidden dark:hover:text-main-color md:border-0 md:p-0 duration-240 ">
                    <i class="pb-1 mr-1 text-lg ti ti-atom"></i> Login
                </router-link>
                <router-link v-if="!isLoggedIn" :to="{ name: 'register' }" class="md:ml-4 cursor-pointer text-white bg-main-color focus:ring-4 focus:ring-main-color font-medium rounded-lg text-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-main-color focus:outline-none dark:focus:ring-main-color hover:text-white">
                    Sign up
                </router-link>
                <router-link v-if="isLoggedIn" :to="{ name: 'dashboard' }" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 divide-gray-100 max-xs:hidden dark:hover:text-main-color md:border-0 md:p-0">
                    <i class="pb-1 mr-1 text-lg ti ti-atom hover:text-main-color"></i> Portal
                </router-link>  
                <a @click="handleSignOut" v-if="isLoggedIn" href="#" class="hover:!text-white transition duration-240 hover:shadow-md hover:shadow-[#969cf9] max-xs:hidden text-white hover:bg-secondary-color bg-main-color ml-2 focus:ring-4 focus:ring-main-color font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-main-color dark:hover:bg-secondary-color focus:outline-none dark:focus:ring-main-color">
                    Logout
                </a>
                <button data-collapse-toggle="mega-menu" @click="toggleMenu" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </template>
            <template #center>
                <router-link :to="{ name: 'home' }" class="flex items-center">
                    <img src="/tiklipy-logo-indigo.png" class="h-12 ml-4 sm:mx-auto relative top-[5px]" alt="Tiklipy Logo" />
                </router-link>
            </template>
            <template #left>
                <ul class="flex flex-col mt-4 text-lg font-medium lg:flex-row lg:space-x-1 lg:mt-0" :class="!isMenuHidden ? '' : 'max-lg:hidden'">
                    <li>
                        <router-link :to="{ name: 'home', hash: '#features' }" active-class="text-gray-900 dark:text-white" class="cursor-pointer block py-2 pl-3 pr-4 text-base text-gray-900 dark:text-white dark:hover:text-main-color dark:hover:bg-gray-700 dark:border-gray-700" >
                            <i class="pb-1 mr-1 text-lg ti ti-stars"></i> Features
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'home', hash: '#pricing' }" class="block py-2 pl-3 pr-4 text-base cursor-pointer text-gray-900 dark:text-white dark:hover:text-main-color dark:hover:bg-gray-700 dark:border-gray-700" active-class="text-gray-900 dark:text-white">
                            <i class="pb-1 mr-1 text-lg ti ti-tag"></i> Pricing
                        </router-link>
                    </li>
                    <li>
                        <button @click="toggleDropdown()" id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center w-full py-2 pl-3 pr-4 text-base font-medium text-gray-900 bg-transparent md:w-auto focus:outline-none hover:border-transparent hover:text-main-color dark:text-white focus:border-transparent focus:ring-0">
                            <i class="pb-1 mr-1 text-lg ti ti-info-circle"></i> About
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="mega-menu-dropdown" :class="{'hidden' : dropdownMenu}"
                            class="absolute z-10 w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                            <div class="w-80">
                                <ul class="space-y-4">
                                    <router-link to="/blogs" class="text-gray-500 dark:text-gray-400 hover:text-main-color dark:hover:text-main-color" active-class="text-main-color dark:text-main-color">
                                        <li class="flex p-5 font-semibold hover:bg-gray-50">
                                            <div class="pr-1"><i class="pb-1 mr-1 text-2xl ti ti-align-left"></i></div>
                                            <div class="px-2">
                                                <div class="pb-1 text-base font-semibold">
                                                    Post
                                                </div>
                                                <p class="font-light tracking-wide">
                                                    Compelling Tales of Tiklipy: A Journey through Education and Teaching
                                                </p>
                                            </div>
                                        </li>
                                    </router-link>
                                    <router-link to="/about" class="text-gray-500 dark:text-gray-400 hover:text-main-color dark:hover:text-main-color" active-class="text-main-color dark:text-main-color">
                                        <li class="flex p-5 font-semibold hover:bg-gray-50">
                                            <div class="pr-1"><i class="pb-1 mr-1 text-2xl ti ti-info-circle"></i></div>
                                            <div class="px-2">
                                                <div class="pb-1 text-base font-semibold">
                                                    About
                                                </div>
                                                <p class="font-light tracking-wide">
                                                    Discover Our Vision to Transform the Landscape of Education.
                                                </p>
                                            </div>
                                        </li>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="hidden max-xs:block">
                        <router-link v-if="isLoggedIn" :to="{ name: 'dashboard' }" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-atom"></i> Portal
                        </router-link>  
                        <a @click="handleSignOut" v-if="isLoggedIn" href="#" class="text-white bg-main-color ml-2 focus:ring-4 focus:ring-main-color font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-main-color dark:hover:bg-main-color focus:outline-none dark:focus:ring-main-color">
                        Logout
                        </a>
                    </li>
                </ul>
            </template>
        </Navigation>
    </header>
</template>