<script setup>
    import { ref, defineProps } from 'vue';
    import { Input } from 'flowbite-vue';
    import { Select } from 'flowbite-vue';
    import { Button } from 'flowbite-vue';
    import 'animate.css';

    const gradelevel = ref('');
    const subjectFilter = ref('');

    defineProps({
        filterTitle: String,
    })

    const program = ref([
        { value: 'Math', name: 'Math' },
        { value: 'Science', name: 'Science' },
        { value: 'PE', name: 'Physical Education' },
        { value: 'English', name: 'English' },
        { value: 'AralPan', name: 'Araling Panlipunan' },
        { value: 'TLE', name: 'Technology and Livelihood Education' },
        { value: 'ESP', name: 'Edukasyon sa Pagpapakatao' },
        { value: 'History', name: 'History' },
        { value: 'Biology', name: 'Biology' },
        { value: 'Geography', name: 'Geography' },
        { value: 'Physics', name: 'Physics' },
        { value: 'Chemistry', name: 'Chemistry' },
        { value: 'Art', name: 'Art' },
        { value: 'Socialstudies', name: 'Social studies' },
        { value: 'Music', name: 'Music' },
        { value: 'Psychology', name: 'Psychology' },
        { value: 'Economics', name: 'Economics' },
        { value: 'ComSci', name: 'Computer Science' },
        { value: 'Algebra', name: 'Algebra' },
        { value: 'Geometry', name: 'Geometry' },
        { value: 'Drama', name: 'Drama' },
        { value: 'Language', name: 'Language' },
        { value: 'Social science', name: 'Social science' },
        { value: 'Philosophy', name: 'Philosophy' },
        { value: 'Reading', name: 'Reading' },
        { value: 'Education', name: 'Education' },
        { value: 'Literature', name: 'Literature' },
        { value: 'Music', name: 'Music' },
    ]);
</script>
<template>
    <form class="bg-white rounded-lg  p-5 animate__animated  animate__fadeInUp">
        <h1 class="text-main-color text-2xl font-semibold mb-3">{{filterTitle}} Filter</h1>
        <div class="mb-4">
            <label for="" class="text-gray-700 font-semibold mb-1 block">Subject</label>
            <input v-model="subjectFilter" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Example: Math" required>
        </div>
        <div class="mb-4">
            <label for="" class="text-gray-700 font-semibold mb-1 block">Grade level</label>
            <input v-model="gradelevel" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Example: Grade 5" required>
        </div>
        <div class="mb-4">
            <label class="text-gray-700 font-semibold mb-1 block" >Program</label>
            <Select v-model="selectSubject" placeholder="Please Select Program " class="mb-7 text-black bg-gray-input" :options="program" />
        </div>
        <Button type="submit" size="lg" class="w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">Filter</Button>
    </form>
</template>

<!-- <script>

</script>
<template>
    <form class="bg-white rounded-lg  p-5">
        <h1 class="text-main-color text-3xl font-semibold mb-3">Filter</h1>
        <div class="mb-4">
            <label for="" class="text-gray-700 font-semibold mb-1 block">Subject</label>
            <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Subject" required>
        </div>
        <div class="mb-4">
            <label for="" class="text-gray-700 font-semibold mb-1 block">Grade level</label>
            <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color dark:shadow-sm-light" placeholder="Grade level" required>
        </div>
        <div class="mb-4">
            <label class="text-gray-700 font-semibold mb-1 block" >Program</label>
            <select class="w-full text-black text-sm bg-gray-50 border-[1px] border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5">
            <option disabled="" value="">Please select Subject</option>
            <option value="Math">ALS</option>
            <option value="Science">Science</option>
            </select>
        </div>
        <button size="lg" class="w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">Filter</button>
    </form>
</template> -->