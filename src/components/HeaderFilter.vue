<script setup>
    import { ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { Button } from 'flowbite-vue';

    const route = useRoute();
    const searchQuery = ref('');
    const sortQuery = ref('latest');
    
    const emit = defineEmits(['searchChange', 'sortChange'])

    watch(searchQuery, async (newVal, oldVal) => {
        emit('searchChange', newVal);
    })

    watch(sortQuery, async (newVal, oldVal) => {
        emit('sortChange', newVal);
    })
</script>
<template>
    <div class="w-full sm:w-full bg-white rounded-lg mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain">
        <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full px-4 py-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
            <div class="md:flex items-center justify-between xl:gap-x-2 items-center">
                <div class=" inline-flex items-center sm:justify-center gap-5 text-center text-main-color max-sm:w-full">
                    <img src="/android-chrome-512x512.png" width="40" alt="">
                    <img src="/bongo-cat/slap-cat-unscreen.gif" width="70" alt="">                     
                </div>
                <div class="flex self-center max-sm:flex-wrap ">
                    <div class="flex sm:mr-5 max-sm:mb-2 items-center max-sm:w-full max-sm:flex-wrap" v-if="route.path != '/members'">
                        <p for="" class="text-black text-sm mr-1 w-full sm:w-20 text-center max-sm:mb-2">Sort By</p>
                        <select v-model="sortQuery" class="w-full block text-sm text-gray-600 border font-semibold border-gray-300 rounded-full bg-white focus:ring-main-color focus:secondary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="latest">Latest</option>
                            <option value="abc">Alphabetical</option>
                        </select>
                    </div>
                    <div class="sm:mr-5 max-sm:mb-2 right-0 max-sm:w-full" :class="route.path !== '/members' ? 'md:w-[300px]' : 'md:w-[500px]'">
                        <form>   
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <input v-model="searchQuery" type="search" id="default-search" class="block w-full py-3 px-4 pr-10 text-sm text-gray-900 font-semibold border border-gray-300 rounded-full bg-white focus:ring-main-color focus:border-secondary-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="route.path === '/members' ? 'Explore Search Tools...' : 'Search generated card...'" required>
                                <div class="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                            </div>
                        </form>
                    </div>               
                    <slot name="generate-btn max-xs:w-full max-sm:mb-2">
                        <button type="button" size="lg" v-if="route.path != '/members' && route.path != '/members/resources'" class="max-sm:w-full bg-main-color sm:mr-5 focus:outline-none hover:bg-secondary-color rounded-full border-0 text-sm lg:text-[0.775rem] xl:text-base font-semibold">
                            Generate
                        </button>
                    </slot>
                </div>
            </div>
        </div> <!--end inner-grid--> 
    </div>
</template>