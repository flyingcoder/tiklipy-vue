<script setup>
    import { ref } from 'vue';
    import expressModel from "../../models/express";
    import { QuillEditor } from '@vueup/vue-quill';
    import { Textarea, Button, Input, FileInput, Select } from 'flowbite-vue';
    import dayjs from "dayjs";

    const title = ref('');
    const shortDesc = ref('');
    const content = ref('');
    const category = ref('');
    const slug = ref('');
    const available_category = [
        { value: 'initiation', name: 'Initiation' },
        { value: 'knowhow', name: 'KnowHow' },
        { value: 'ethics', name: 'Ethics' },
        { value: 'applications', name: 'Applications' },
        { value: 'accountancy', name: 'Accountancy' },
        { value: 'assistance', name: 'Assistance' },
        { value: 'visuals', name: 'Visuals' },
    ];
    const toolbarOptions = [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],   
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
    ];
    const backEndModel = new expressModel();


    const submitContent = () => {
        const data = {
            title: title.value,
            shortDesc: shortDesc.value,
            content: content.value,
            slug: slug.value,
            category: category.value,
            dateCreated: dayjs().format(),
        }
        backEndModel.addHelp(data);

        title.value = '';
        shortDesc.value = '';
        content.value = '';
        slug.value = '';
        category.value = '';
    };
</script>
<template>
    <div class="p-6 text-black bg-white rounded-lg">
        <h1 class="text-3xl font-semibold text-center text-black">
            Create Help
        </h1>
        <div class="w-3/4 mx-auto">
            <div class="grid grid-cols-2 gap-4 mt-5 ">
                <Input size="md" label="Title" v-model="title" class="" />
                <Input size="md" label="Short Description" v-model="shortDesc" class="" />
                <Input size="md" label="Slug" v-model="slug" class="" />
                <Select v-model="category" :options="available_category" label="Category"/>
            </div>
            <div class="mt-5">
                <label class="font-semibold font-lg">Content</label>
                <QuillEditor theme="snow" :toolbar="toolbarOptions" v-model:content="content" contentType="html" class="text-black"/>
            </div>
            <button @click="submitContent" class="px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded">Add Post</button>
        </div>
    </div>
</template>