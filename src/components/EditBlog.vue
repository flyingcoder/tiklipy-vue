<script setup>
    import { ref, defineProps, onMounted } from 'vue';
    import expressModel from "../models/express";
    import { QuillEditor } from '@vueup/vue-quill';
    import { Textarea, Button, Input, FileInput } from 'flowbite-vue';
    import dayjs from "dayjs";

    const props = defineProps({
        blog: Object,
    });

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
        const formData = {
            title: title.value,
            author: author.value,
            readTime: readTime.value,
            shortDesc: shortDesc.value,
            content: content.value,
            dateCreated: dayjs().format(),
            slug: slug.value,
            featuredImage: featuredImageFile.value ? '/' + featuredImageFile.value.name :  props.blog.featuredImage,
            authorImage: authorImageFile.value ? '/' + authorImageFile.value.name :  props.blog.authorImage,
        };

        backEndModel.updateBlog(formData, props.blog.id);
        window.location.reload();
    }

    const deleteBlog = (id) => {
        const data = {
            id: id,
        }
        backEndModel.deleteBlog(data);
        window.location.reload();
    }

    onMounted(() => {
        slug.value = props.blog.slug,
        content.value = props.blog.content,
        title.value = props.blog.title,
        author.value = props.blog.author,
        readTime.value = props.blog.readTime,
        shortDesc.value = props.blog.shortDesc,
        featuredImageFile.value = props.blog.featuredImageFile,
        authorImageFile.value = props.blog.authorImageFile
    });
</script>

<template>
<div class="px-6 pb-6 text-black bg-white rounded-lg">
    <div class="mx-auto">
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
            <label class="font-semibold font-lg">Content</label>
            <QuillEditor theme="snow" :toolbar="toolbarOptions" v-model:content="content" contentType="html" class="text-black"/>
        </div>
        <button @click="submitContent" class="px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded">Add Post</button>
        <button @click="deleteBlog(props.blog.id)" class="px-4 ml-3 py-2 mt-4 text-lg font-semibold text-white bg-blue-500 rounded">Delete</button>
    </div>
</div>
</template>