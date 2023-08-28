<script setup>
    import { ref } from 'vue';
    import expressModel from "../../models/express";
    import { QuillEditor } from '@vueup/vue-quill';
    import { Textarea, Button, Input, FileInput, Select } from 'flowbite-vue';
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import dayjs from "dayjs";

    const title = ref('');
    const shortDesc = ref('');
    const content = ref('');
    const category = ref('')
    const available_category = [
        { value: 'initiation', name: 'Initiation' },
        { value: 'knowhow', name: 'KnowHow' },
        { value: 'ethics', name: 'Ethics' },
        { value: 'applications', name: 'Applications' },
        { value: 'accountancy', name: 'Accountancy' },
        { value: 'assistance', name: 'Assistance' },
        { value: 'visuals', name: 'Visuals' },
    ]
    const backEndModel = new expressModel();


    const submitContent = () => {
        const data = {
            title: title.value,
            shortDesc: shortDesc.value,
            content: content.value,
            category: category.value,
            dateCreated: dayjs().format(),
        }
        backEndModel.addHelp(data);
    };
</script>
<template>
    <div class="bg-white p-6 rounded-lg text-black">
        <h1 class="text-center text-black text-3xl font-semibold">
            Create Help
        </h1>
        <div class="w-3/4 mx-auto">
            <div class="grid grid-cols-2 gap-4 mt-5 ">
                <Input size="md" label="Title" v-model="title" class="" />
                <Input size="md" label="Short Description" v-model="shortDesc" class="" />
                <Select v-model="category" :options="available_category" label="Category"/>
            </div>
            <div class="mt-5">
                <Textarea rows="4" v-model="content" label="Content" />
            </div>
            <button @click="submitContent" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded font-semibold text-lg">Add Post</button>
        </div>
    </div>
</template>