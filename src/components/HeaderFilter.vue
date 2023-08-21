<script setup>
</script>
<template>
    <div class="w-full sm:w-full bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain">
        <div class="bg-white dark:bg-slate-800 shadow  rounded-md w-full p-4 relative overflow-hidden bg-[url('/p-1.png')] bg-no-repeat bg-contain">
            <div class="flex justify-between xl:gap-x-2 items-cente">
                <div class="absolute inline-flex items-center justify-center text-center text-main-color ">
                    <img src="/android-chrome-512x512.png" width="50" alt="">                       
                </div>
                <div class="self-center ml-auto text-right flex">
                    <div class="flex w-full mr-5">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="US">Alphabetical</option>
                            <option value="CA">Grade Level</option>
                            <option value="FR">Date Created</option>
                        </select>
                    </div>
                    <Button type="submit" size="lg" class="w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-base font-semibold">Generate</Button>                      
                    <!-- <h3 class="my-1 text-2xl font-semibold text-main-color">Lesson Plan</h3>
                    <p class="p-0 mb-0 text-lg font-light text-gray-700 bg-transparent hover:border-transparent focus:outline-none">Effective and Engaging Lesson Plans</p> -->
                </div>
            </div>
        </div> <!--end inner-grid--> 
    </div>
</template>