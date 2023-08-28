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
    const blog = ref('');
    const title =  ref('');
    const author = ref('');
    const readTime = ref('');
    const profile = ref('');
    const shortDesc = ref('');
    const fileInput = ref(null);
    const featuredImage = ref(null);

    const handleFileChange = () => {
        
        console.log('image:', fileInput.value.file[0]);  
        // const file = fileInput.value.files[0]; 
    };

    // const submitContent = async () => {
    //     const file = fileInput.value.files[0];
    //     console.log('image:', file); 
    //     const formData = new FormData();
    //     formData.append('image', file);
    //     formData.append('title', title.value);
    //     formData.append('author', author.value);
    //     formData.append('profile', profile.value);
    //     formData.append('readTime', readTime.value);
    //     formData.append('dateCreated', dayjs().format());
    //     formData.append('slug', slug.value);
    //     backEndModel.addBlog(formData);
    // };
    const submitContent = () => {
        const formData = {
            title: title.value,
            author: author.value,
            profile: profile.value.name,
            profile: profile.value.name,    
            readTime: readTime.value,
            shortDesc: shortDesc.value,
            dateCreated: dayjs().format(),
            slug: slug.value,
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
                <FileInput ref="featuredImage" label="Featured Image" @change="handleFileChange" class=""></FileInput>
                <FileInput ref="fileInput" label="Author Image" @change="handleFileChange" class=""></FileInput>
                <Input size="md" label="Title" v-model="title" class="" />
                <Input size="md" label="Author" v-model="author" class="" />
                <Input size="md" label="Time Read" v-model="readTime" class="" />
                <Input size="md" label="Slug" v-model="slug" class="" />
                <Textarea rows="4" v-model="shortDesc" class=""></Textarea>
            </div>
            <div class="mt-5">
                <label class="font-lg font-semibold">Content</label>
                <QuillEditor theme="snow" :toolbar="toolbarOptions" v-model:content="blog" contentType="html" class="text-black"/>
            </div>
            <button @click="submitContent" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded font-semibold text-lg">Add Post</button>
        </div>
    </div>
</template>