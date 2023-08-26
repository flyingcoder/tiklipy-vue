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
    <div class="bg-white p-6 rounded-lg text-black">
        <h1 class="text-center text-black text-3xl font-semibold">
            Create Post
        </h1>
        <div class="w-3/4 mx-auto">
            <div class="grid grid-cols-2 gap-4 mt-5 ">
                <FileInput label="Author Image" class="" v-model="profile"></FileInput>
                <Input size="md" label="Title" v-model="title" class="" />
                <Input size="md" label="Author" v-model="author" class="" />
                <Input size="md" label="Time Read" v-model="readTime" class="" />
            </div>
            <div class="mt-5">
                <label class="font-lg font-semibold">Content</label>
                <QuillEditor theme="snow" :toolbar="toolbarOptions" v-model:content="blog" contentType="html" class="text-black"/>
            </div>
            <button @click="submitContent" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded font-semibold text-lg">Add Post</button>
        </div>
    </div>
</template>