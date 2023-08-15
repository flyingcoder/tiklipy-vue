<script setup>
    import { onMounted, ref } from "vue";
    import Navigation from "../../components/Navigation.vue";
    import { useRouter } from "vue-router";
    import { useAuthStore } from "../../stores/auth";
    import { Dropdown } from 'flowbite-vue';
    import 'animate.css';
    
    const router = useRouter();
    const isMenuHidden = ref(true);
    
    const authStore = useAuthStore();

    onMounted(() => {
        
    });

    const handleSignOut = async () => {
        const success = await authStore.logout();
        if(success) router.push({ name: 'home' })
    };

    const toggleMenu = () => {
        isMenuHidden.value = !isMenuHidden.value;
    };

</script>
<template>
    <header class="bg-white">
        <Navigation>
            <template #right>
                <router-link :to="{ name: 'consult' }" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 divide-gray-100 max-xs:hidden dark:hover:text-main-color md:border-0 md:p-0">
                    <i class="pb-1 mr-1 text-lg ti ti-atom"></i> Consult
                </router-link>
                <button @click="handleSignOut" type="button" class="max-xs:hidden text-white bg-main-color ml-2 focus:ring-4 focus:ring-main-color font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-main-color dark:hover:bg-main-color focus:outline-none dark:focus:ring-main-color">
                    Logout
                </button>  
                <button data-collapse-toggle="mega-menu" @click="toggleMenu" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </template>
            <template #center>
                <router-link :to="{ name: 'home' }" class="flex items-center">
                    <img src="/tiklipy-logo-black.png" class="h-12 ml-4 sm:mx-auto relative top-[5px]" alt="Tiklipy Logo" />
                </router-link>
            </template>
            <template #left>
                <ul class="flex-col mt-4 text-lg font-medium lg:flex lg:flex-row lg:space-x-4 md:mt-0" :class="isMenuHidden ? 'hidden' : ''">
                    <li class="self-center px-3 py-2 dropdown">
                        <router-link :to="{ name: 'lessons' }" class="block text-base font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-book"></i> Lessons
                        </router-link>
                    </li>
                    <li class="self-center px-3 py-2 dropdown">
                        <router-link :to="{ name: 'visuals' }" class="block text-base font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-presentation"></i> Visual Aid
                        </router-link>
                    </li>
                    <li class="self-center px-3 py-2 dropdown">
                        <dropdown placement="bottom">
                            <template #trigger="{ toggle }">
                                <a
                                class="flex items-center text-base text-gray-900 transition duration-300 bg-transparent cursor-pointer hover:border-transparent focus:border-transparent dark:text-gray-100 hover:text-main-color"
                                @click="toggle"
                                >
                                <i class="mr-2 text-lg ti ti-checkbox"></i>
                                Assessment
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
                    <li class="hidden max-xs:block">
                        <router-link :to="{ name: 'consult' }" active-class="text-main-color dark:text-white" class="block px-3 py-2 text-lg font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-atom"></i> Consult
                        </router-link>
                        <a @click="handleSignOut" href="#" class="text-white bg-main-color ml-2 focus:ring-4 focus:ring-main-color font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-main-color dark:hover:bg-main-color focus:outline-none dark:focus:ring-main-color">
                        Logout
                        </a>
                    </li>
                </ul>
            </template>
        </Navigation>
    </header>
</template>