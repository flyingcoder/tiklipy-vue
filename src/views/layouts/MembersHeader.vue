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
    const classCondition = ref(true);
    const isOptionsExpanded = ref(false);
    const isOptionsExpandedChild = ref(false);
    const isOptionsExpandedGrandchild = ref(false);
    const dropdownItems = ref([
        { label: "All Resources", route: "resources", params: 'all',icon: "ti ti-address-book" },
        { label: "Reports", route: "lessons", icon: "ti ti-file-analytics" },
        {
            label: "Lessons",
            icon: "ti ti-checkbox",
            nested: [
                { label: "All Lesson", route: "lessons", icon: 'ti ti-book'},
                { label: "Visuals Aid", route: "visuals", icon: 'ti ti-presentation' },
                { 
                    label: "Assessments", 
                    route: "homeworks",
                    icon: 'ti ti-settings-star',
                    nested: [
                        { label: "All Assessments", route: "resources", params: "assessments"},
                        { label: "Quizzes", route: "resources", params: "quizzes" },
                        { label: "Homeworks", route: "resources", params: "homeworks" },
                        { label: "Tests", route: "resources", params: "tests" },
                        { label: "Projects", route: "resources", params: "projects" },
                        { label: "Activities", route: "resources", params: "activities" }
                    ] 
                },
            ],
        },
    ]);
    
    const authStore = useAuthStore();

    onMounted(() => {
        
    });

    const handleSignOut = async () => {
        const success = await authStore.logout();
        if(success) router.push({ name: 'home' })
    };

    const setOption= () => {
      isOptionsExpanded.value = false;
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
                        <img :src="authStore.user.photoURL" alt="" width="40" class="rounded-full">
                    </template>
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <router-link :to="{name: 'account'}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Account
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'my-reviews'}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Submit review
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'suggest-tools'}" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Suggest a tool
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
                        <router-link :to="{ name: 'home' }" class="block text-base font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-book"></i> Home
                        </router-link>
                    </li>
                    <li class="self-center px-3 py-2 dropdown">
                        <router-link :to="{ name: 'dashboard' }" class="block text-base font-medium text-gray-900 divide-gray-100 dark:hover:text-main-color md:border-0 md:p-0">
                            <i class="pb-1 mr-1 text-lg ti ti-book"></i> Tools
                        </router-link>
                    </li>
                    <li class="self-center px-3 py-2 dropdown" @mouseenter="isOptionsExpanded = true" @mouseleave="isOptionsExpanded = false">
                        <a class="flex items-center text-base text-gray-900 transition duration-300 bg-transparent cursor-pointer hover:border-transparent focus:border-transparent dark:text-gray-100 hover:text-main-color">
                            <i class="mr-2 text-lg ti ti-settings"></i>
                            Resources
                            <i class="ml-auto ti ti-chevron-down"></i>
                        </a>
                        <transition
                            enter-active-class="transition duration-500 transform ease-custom"
                            enter-class="scale-y-0 -translate-y-1/2 opacity-0"
                            enter-to-class="scale-y-100 translate-y-0 opacity-100"
                            leave-active-class="transition duration-300 transform ease-custom"
                            leave-class="scale-y-100 translate-y-0 opacity-100"
                            leave-to-class="scale-y-0 -translate-y-1/2 opacity-0"
                        >
                            <ul
                                v-show="isOptionsExpanded"
                                class="absolute top-10 w-[200px] -right-12 mb-4 bg-white divide-y shadow-lg"
                            >
                                <li v-for="(item, index) in dropdownItems" :key="index" class="hover:bg-gray-50" @mouseenter="isOptionsExpandedChild = item.nested ? true : isOptionsExpandedChild" @mouseleave="isOptionsExpandedChild = item.nested ? false : isOptionsExpandedChild">
                                    <router-link
                                        :to="{ name: item.route, params: { type: item.params } }"
                                        class="flex items-center px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color"
                                    >
                                        <i class="mr-2 text-lg" :class="item.icon"></i> {{ item.label }}
                                        <i class="ml-auto ti ti-chevron-down" v-if="item.nested"></i>
                                    </router-link>
                                    <transition 
                                        enter-active-class="transition duration-500 transform ease-custom"
                                        enter-class="scale-y-0 -translate-y-1/2 opacity-0"
                                        enter-to-class="scale-y-100 translate-y-0 opacity-100"
                                        leave-active-class="transition duration-300 transform ease-custom"
                                        leave-class="scale-y-100 translate-y-0 opacity-100"
                                        leave-to-class="scale-y-0 -translate-y-1/2 opacity-0"
                                    >
                                        <ul
                                        v-show="isOptionsExpandedChild"
                                        class="absolute top-[5.6rem] -right-[12.5rem] ml-2 mt-0 bg-white divide-y w-[200px] shadow-lg"
                                        >
                                        <li v-for="(nestedItem, nestedIndex) in item.nested" :key="nestedIndex" class="hover:bg-gray-50" @mouseenter="isOptionsExpandedGrandchild = nestedItem.nested ? true : isOptionsExpandedGrandchild" @mouseleave="isOptionsExpandedGrandchild = nestedItem.nested ? false : isOptionsExpandedGrandchild">
                                            <router-link
                                            :to="{ name: nestedItem.route }"
                                            class="flex items-center px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color"
                                            >
                                            <i class="mr-2 text-lg" :class="nestedItem.icon"></i> {{ nestedItem.label }} <i class="ml-auto ti ti-chevron-down" v-if="nestedItem.nested"></i>
                                            </router-link>
                                            <transition 
                                                enter-active-class="transition duration-500 transform ease-custom"
                                                enter-class="scale-y-0 -translate-y-1/2 opacity-0"
                                                enter-to-class="scale-y-100 translate-y-0 opacity-100"
                                                leave-active-class="transition duration-300 transform ease-custom"
                                                leave-class="scale-y-100 translate-y-0 opacity-100"
                                                leave-to-class="scale-y-0 -translate-y-1/2 opacity-0"
                                            >
                                            <ul
                                                v-show="isOptionsExpandedGrandchild"
                                                class="absolute top-[5.6rem] -right-[12.5rem] ml-2 mt-0 bg-white divide-y w-[200px] shadow-lg overflow-hidden"
                                            >
                                                <li v-for="(grandchildItem, grandchildIndex) in nestedItem.nested" :key="grandchildIndex" class="hover:bg-gray-50">
                                                <router-link
                                                    :to="{ name: grandchildItem.route, params: { type: grandchildItem.params } }"
                                                    class="block px-4 py-2 text-base font-semibold text-gray-900 transition duration-300 dark:text-gray-100 hover:text-main-color"
                                                >
                                                    <i class="mr-2 text-lg ti ti-checkup-list"></i> {{ grandchildItem.label }}
                                                </router-link>
                                                </li>
                                            </ul>
                                            </transition>
                                        </li>
                                        </ul>
                                    </transition>
                                </li>
                            </ul>
                        </transition>
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