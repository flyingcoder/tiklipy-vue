<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        Type: String,
    });
</script>
<template>
    <div class="w-full">
        <div class="bg-gray-100 p-6 rounded-3xl">
        <h2 class="text-2xl font-bold text-gray-800 leading-snug mb-10">Enter Your Upcoming Lesson</h2>
            <div class="mb-4">
            <label class="text-gray-700 font-semibold mb-1 block">Select Grade level</label>
            <div class="mb-7 bg-transparent-input">
                <select class="w-full text-sm bg-gray-50 border-[1px] border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5">
                <option disabled="" value="">Please select Grade level</option>
                <option value="1">Grade 1</option>
                <option value="2">Grade 2</option>
                </select>
            </div>
            </div>

            <div class="mb-4">
            <label class="text-gray-700 font-semibold mb-1 block">Select Subject</label>
            <div class="mb-7 bg-transparent-input">
                <select class="w-full text-sm bg-gray-50 border-[1px] border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5">
                <option disabled="" value="">Please select Subject</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                </select>
            </div>
            </div>

            <!-- Topic Input -->
            <div class="mb-4">
            <label for="" class="text-gray-700 font-semibold mb-1 block">Topic</label>
            <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Lesson Topic" required="">
            </div>

            <div class="mb-4">
            <div class="flex items-center mb-6">
                <label class="mr-3 text-gray-700 font-semibold">Assessment</label>
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" value="">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-secondary-color dark:peer-focus:ring-secondary-color dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-main-color"></div>
                </label>
            </div>
            </div>

            <div class="mb-6">
            <div class="flex items-center mb-6">
                <label class="mr-3 text-gray-700 font-semibold">Homework</label>
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" value="">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-secondary-color dark:peer-focus:ring-secondary-color dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-main-color"></div>
                </label>
            </div>
            </div>

            <div class="mb-6">
            <label>
                <div class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</div>
                <div class="">
                <textarea rows="4" class="border p-2.5 w-full text-sm bg-gray-50 rounded-lg border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Additional instruction..."></textarea>
                </div>
            </label>
            </div>

            <button class="text-white bg-blue-700 focus:ring-4 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 px-5 py-2.5 w-full border-0 lg:text-[0.775rem] xl:text-lg text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 text-base px-5 py-2.5 w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold" type="submit">Generate Topic with Tiklipy!</button>
        </div>
    </div>
</template>