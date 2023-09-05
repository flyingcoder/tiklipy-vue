<script setup>
    

</script>

<template>
    <ul class="mt-10 hidden text-lg font-semibold text-center text-gray-500 divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li class="w-full rounded-tl-lg">
            <router-link class="rounded-tl-lg"
                :class="{
                'text-blue-600 border-b-4 border-blue-600 font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700': $route.name === 'invite-code',
                'font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700':
                    $route.name !== 'invite-code'
                }"
                :to="{ name: 'invite-code' }"
                exact
            >
                Invitation Codes
            </router-link>
        </li>
        <li class="w-full">
            <router-link 
                :class="{
                'text-blue-600 border-b-4 border-blue-600 font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700': $route.name === 'reviews',
                'font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700':
                    $route.name !== 'reviews'
                }"
                :to="{ name: 'reviews' }"
                exact
            >Reviews</router-link>
        </li>
        <li class="w-full">
            <router-link 
                :class="{
                'text-blue-600 border-b-4 border-blue-600 font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700': $route.name === 'newsletters',
                'font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700':
                    $route.name !== 'newsletters'
                }"
                :to="{ name: 'newsletters' }"
                exact>Newsletters</router-link>
        </li>
        <li class="w-full rounded-tr-lg">
            <router-link class="rounded-tr-lg" 
                :class="{
                'text-blue-600 border-b-4 border-blue-600 font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700': $route.name === 'admin-blogs',
                'font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700':
                    $route.name !== 'admin-blogs'
                }"
                :to="{ name: 'admin-blogs' }"
                exact>Blogs</router-link>
        </li>
        <li class="w-full rounded-tr-lg">
            <router-link class="rounded-tr-lg" 
                :class="{
                'text-blue-600 border-b-4 border-blue-600 font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700': $route.name === 'posts',
                'font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700':
                    $route.name !== 'posts'
                }"
                :to="{ name: 'posts' }"
                exact>Posts</router-link>
        </li>
        <li class="w-full rounded-tr-lg">
            <router-link class="rounded-tr-lg" 
                :class="{
                'text-blue-600 border-b-4 border-blue-600 font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700': $route.name === 'admin-help',
                'font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700':
                    $route.name !== 'admin-help'
                }"
                :to="{ name: 'admin-help' }"
                exact>Help</router-link>
        </li>
        <li class="w-full rounded-tr-lg">
            <router-link class="rounded-tr-lg" 
                :class="{
                'text-blue-600 border-b-4 border-blue-600 font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700': $route.name === 'prompt',
                'font-semibold inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-transparent focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700':
                    $route.name !== 'prompt'
                }"
                :to="{ name: 'prompt' }"
                exact>Prompt
            </router-link>
        </li>
    </ul>
    <router-view></router-view>
</template>