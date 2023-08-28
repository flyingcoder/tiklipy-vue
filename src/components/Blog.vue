<script setup>
    import dayjs from 'dayjs';
import { Avatar } from 'flowbite-vue';
    import { defineProps , ref, onMounted } from 'vue';
    import expressModel from "../models/express";
    
    const backEndModel = new expressModel();
    const blogs = ref();

    onMounted(() => {
        getBlogs();
    });

    const getBlogs = async () => {
        blogs.value = await backEndModel.getPosts().then((data) => data.data.blogs );
    } 
    const formatDate = (dateString) => {
        return dayjs(dateString).format('MMMM D, YYYY')
    };
</script>
<template>
    <div class="container mx-auto py-8 my-10 text-black">
        <div v-for="(blog, index ) in blogs" :key="index + 'blog-card'" class="max-w-3xl mx-auto p-4">
            <img :src="FeaturedImage" alt="">
            <div class="text-gray-800 text-2xl midlg:text-5xl font-semibold text-center">{{ blog.title }}</div>
            <Avatar status="online" class="flex justify-center my-10" size="lg" rounded :img="blog.profile" />
            <div class="text-center mb-12">
                <span class="font-semibold text-gray-700 text-lg">{{ blog.author }} </span>
                <div class="flex justify-center mt-2 text-sm text-gray-700">
                    <div class="pr-4">{{ formatDate(blog.dateCreated) }}</div>
                    <div class="pl-4">{{ blog.readTime }}</div>
                </div>
            </div>

            <div v-html="blog.content">
            </div>
        </div>
    </div>
</template>