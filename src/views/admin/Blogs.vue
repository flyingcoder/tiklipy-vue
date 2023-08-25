<script setup>
    import { ref } from 'vue';
    import expressModel from "../../models/express";
    import { QuillEditor } from '@vueup/vue-quill';
    import { Textarea, Button, Input, FileInput } from 'flowbite-vue';
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import dayjs from "dayjs";

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
    const blog = ref('');
    const title =  ref('');
    const author = ref('');
    const readTime = ref('');
    const profile = ref('');
    const backEndModel = new expressModel();

    const submitContent = () => {
        const post = {
            blog: blog.value,
            title: title.value,
            author: author.value,
            profile: profile.value.name,
            readTime: readTime.value,
            dateCreated: dayjs().format(),
        }
        backEndModel.addBlog(post);
    }

</script>
<template>
    <div class="mt-8 w-3/5 mx-auto bg-white p-6 rounded-lg text-black">
        <div class="text-4xl font-semibold text-center pb-4">
            Create Post
        </div>
        <FileInput label="Author Image" class="mb-4" v-model="profile"></FileInput>
        <Input size="md" label="Title" v-model="title" class="mb-2" />
        <Input size="md" label="Author" v-model="author" class="mb-2" />
        <Input size="md" label="Time Read" v-model="readTime" class="mb-2" />
        <div>
            <label class="font-lg font-semibold">Content</label>
            <QuillEditor theme="snow" :toolbar="toolbarOptions" v-model:content="blog" contentType="html" class="text-black"/>
        </div>
        
        <button @click="submitContent" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </div>
</template>