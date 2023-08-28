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
    const backEndModel = new expressModel();

    const slug = ref('');
    const content = ref('');
    const title = ref('');
    const author = ref('');
    const readTime = ref('');
    const shortDesc = ref('');
    const featuredImageFile = ref(null);
    const authorImageFile = ref(null);

    const submitContent = () => {
    const formData = new FormData();

    formData.append('title', title.value);
    formData.append('author', author.value);
    formData.append('readTime', readTime.value);
    formData.append('shortDesc', shortDesc.value);
    formData.append('content', content.value);
    formData.append('dateCreated', dayjs().format());
    formData.append('slug', slug.value);

    if (featuredImageFile.value) {
        formData.append('featuredImage', featuredImageFile.value);
    }

    if (authorImageFile.value) {
        formData.append('authorImage', authorImageFile.value);
    }

    backEndModel.addBlog(formData);
}
</script>

<template>
<div class="bg-white p-6 rounded-lg text-black">
    <h1 class="text-center text-black text-3xl font-semibold">
        Create Post
    </h1>
    <div class="w-3/4 mx-auto">
        <div class="grid grid-cols-2 gap-4 mt-5 ">
            <!-- <FileInput label="Featured Image" v-model="featuredImageFile" @change="handleFeaturedImageChange" class=""></FileInput>
            <FileInput label="Author Image" v-model="authorImageFile" @change="handleAuthorImageChange" class=""></FileInput> -->
            <FileInput label="Featured Image" v-model="featuredImageFile" class=""></FileInput>
            <FileInput label="Author Image" v-model="authorImageFile" class=""></FileInput>
            <Input size="md" label="Title" v-model="title" class="" />
            <Input size="md" label="Author" v-model="author" class="" />
            <Input size="md" label="Time Read" v-model="readTime" class="" />
            <Input size="md" label="Slug" v-model="slug" class="" />
            <Textarea rows="4" label="Short Description" v-model="shortDesc" class=""></Textarea>
        </div>
        <div class="mt-5">
            <label class="font-lg font-semibold">Content</label>
            <QuillEditor theme="snow" :toolbar="toolbarOptions" v-model:content="content" contentType="html" class="text-black"/>
        </div>
        <button @click="submitContent" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded font-semibold text-lg">Add Post</button>
    </div>
</div>
</template>