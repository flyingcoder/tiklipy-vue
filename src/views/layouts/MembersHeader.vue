<script setup>
    import { onMounted, ref } from "vue";
    import Navigation from "../../components/Navigation.vue";
    import { useRouter } from "vue-router";
    import { useAuthStore } from "../../stores/auth";
    import { Dropdown } from 'flowbite-vue';
    import 'animate.css';
    import 'flowbite';

    
    const router = useRouter();
    const isMenuHidden = ref(true);
    
    const authStore = useAuthStore();

    onMounted(() => {
        
    });

    const handleSignOut = async () => {
        const success = await authStore.logout();
        if(success) router.push({ name: 'home' })
    };

    const toggleNesteds = () => {
        console.log('sd');
    }

    const toggleMenu = () => {
        isMenuHidden.value = !isMenuHidden.value;
    };

</script>
<style>
</style>
<template>
    <header class="bg-white py-[2.5px]">
        <Navigation>
            <template #right>
                <!-- <router-link :to="{name: 'account'}" class="px-2">
                    ⭐150 
                </router-link> -->
                <router-link :to="{ name: 'consult' }" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 divide-gray-100 max-xs:hidden dark:hover:text-main-color md:border-0 md:p-0">
                    <i class="pb-1 mr-1 text-lg ti ti-atom"></i> Consult
                </router-link>
                <button data-collapse-toggle="mega-menu" @click="toggleMenu" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-lg text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <dropdown placement="left" class=" max-xs:hidden  cursor-pointer custom-css-dropdown pl-4 !outline-0 !border-0" >
                    <template #trigger>
                        <svg class="w-9 text-gray-800 !outline-0 dark:text-white text-main-color hover:!text-secodnary-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </template>
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <router-link :to="{name: 'account'}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Account
                            </router-link>
                        </li>
                        <li>
                            <a  @click="handleSignOut" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </dropdown>
            </template>
            <template #center>
                <router-link :to="{ name: 'dashboard' }" class="flex items-center m-auto sm:w-fit">
                    <img src="/tiklipy-logo-black.png" class="h-12 ml-4 sm:mx-auto relative top-[5px]" alt="Tiklipy Logo" />
                </router-link>
            </template>
            <template #left>
                <ul class="flex-col mt-4 text-lg font-medium lg:flex lg:flex-row lg:space-x-4 md:mt-0" :class="isMenuHidden ? 'hidden' : ''">
                    <li class="self-center px-3 py-2 dropdown">
                        <router-link :to="{ name: 'dashboard' }" class="block text-base font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-book"></i> Tools
                        </router-link>
                    </li>
                    <li class="self-center px-3 py-2 dropdown">
                        <router-link :to="{ name: 'visuals' }" class="block text-base font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-presentation"></i> Resources
                        </router-link>
                    </li>
                    <!-- <li class="self-center px-3 py-2 dropdown" @mouseenter="toggleNesteds">
                        <router-link :to="{ name: 'visuals' }" class="block text-base font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-presentation"></i> asdasdasd
                        </router-link>
                    </li> -->
                    <!-- <li class="self-center px-3 py-2 dropdown">
                        <dropdown placement="bottom">
                            <template #trigger="{ toggle }">
                                <a
                                class="flex items-center text-base text-gray-900 transition duration-300 bg-transparent cursor-pointer hover:border-transparent focus:border-transparent dark:text-gray-100 hover:text-main-color"
                                @click="toggle"
                                >
                                <i class="mr-2 text-lg ti ti-checkbox"></i>
                                Lessons
                                <i class="ml-auto ti ti-chevron-down"></i>
                                </a>
                            </template>
                            <div class="w-44">
                                <ul class="space-y-2 text-black">
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'assessments'}" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Entirety
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'quizes'}" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Quizzes
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'homeworks' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Homeworks
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'tests' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Tests
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'projects' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Projects
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'activities' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Activities
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </dropdown>
                    </li> -->
                    <li class="self-center px-3 py-2 dropdown">
                        <dropdown placement="bottom">
                            <template #trigger="{ toggleMain }">
                                <a
                                class="flex items-center text-base text-gray-900 transition duration-300 bg-transparent cursor-pointer hover:border-transparent focus:border-transparent dark:text-gray-100 hover:text-main-color"
                                @click="toggleMain"
                                >
                                <i class="mr-2 text-lg ti ti-checkbox"></i>
                                Lessons
                                <i class="ml-auto ti ti-chevron-down"></i>
                                </a>
                            </template>
                            <div class="w-44">
                                <ul class="space-y-2 text-black">
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'assessments'}" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> All Lessons
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'quizes'}" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Quizzes
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'homeworks' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Homeworks
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'tests' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Tests
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'projects' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Projects
                                        </router-link>
                                    </li>
                                    <li class="hover:bg-gray-50">
                                        <router-link :to="{name: 'activities' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Activities
                                        </router-link>
                                    </li>
                                    <li class="self-center px-4 py-2 dropdown hover:bg-gray-50 cursor-pointer">
                                        <dropdown placement="right" class="w-full" id="nested-lessons">
                                            <template #trigger="{ toggleNested }">
                                                <a
                                                class="flex w-full items-center text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color"
                                                @mouseover="toggleNested"
                                                >
                                                <i class="mr-2 text-lg ti ti-checkbox"></i>
                                                Lessons
                                                <i class="ml-auto ti ti-chevron-down"></i>
                                                </a>    
                                            </template>
                                            <div class="w-44">
                                                <ul class="space-y-2 text-black">
                                                    <li class="hover:bg-gray-50">
                                                        <router-link :to="{name: 'assessments'}" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Entirety
                                                        </router-link>
                                                    </li>
                                                    <li class="hover:bg-gray-50">
                                                        <router-link :to="{name: 'quizes'}" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Quizzes
                                                        </router-link>
                                                    </li>
                                                    <li class="hover:bg-gray-50">
                                                        <router-link :to="{name: 'homeworks' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Homeworks
                                                        </router-link>
                                                    </li>
                                                    <li class="hover:bg-gray-50">
                                                        <router-link :to="{name: 'tests' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Tests
                                                        </router-link>
                                                    </li>
                                                    <li class="hover:bg-gray-50">
                                                        <router-link :to="{name: 'projects' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Projects
                                                        </router-link>
                                                    </li>
                                                    <li class="hover:bg-gray-50">
                                                        <router-link :to="{name: 'activities' }" class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color">
                                                            <i class="mr-2 text-lg ti ti-checkbox"></i> Activities
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </dropdown>
                                    </li>
                                    <!-- <li aria-labelledby="dropdownNavbarLink">
                                        <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                            </svg>
                                        </button>
                                        <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                            </li>
                                            </ul>
                                        </div>
                                    </li> -->
                                </ul>
                            </div>
                        </dropdown>
                    </li>

                    <li class="hidden max-xs:block">
                        <router-link :to="{ name: 'consult' }" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-atom"></i> Consult
                        </router-link>

                    </li>
                    <li class="hidden mt-5 max-xs:block">
                        <router-link :to="{name: 'account'}" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            Account
                        </router-link>
                        </li>
                    <li class="hidden max-xs:block ">
                        <a @click="handleSignOut" href="#" class=" !text-white bg-main-color ml-2 focus:ring-4 focus:ring-main-color font-medium rounded-lg text-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-main-color dark:hover:bg-main-color focus:outline-none dark:focus:ring-main-color">
                            Sign out
                        </a>
                        <a  @click="handleSignOut" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"></a>
                    </li>
                </ul>
            </template>
        </Navigation>
    </header>
</template>