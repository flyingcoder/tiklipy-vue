<script setup>
import { Avatar } from 'flowbite-vue';
import { onMounted, ref } from 'vue';
import expressModel from "../models/express";
import { useRoute } from 'vue-router';
import dayjs from "dayjs";

const backEndModel = new expressModel();
const blog = ref({});
const route = useRoute();

onMounted(() => {
    getData();
});

const getData = () => {
    const path = route.path.substring(route.path.lastIndexOf('/') + 1);

    backEndModel.getPostBySlug(path).then((data) => {
        blog.value = data.data.data[0];
    }).catch((error) => {
        console.error("Error fetching data:", error);
    });
};
</script>
<template>
    
<section :style="{ backgroundImage: `url(${blog.featuredImage})` }" class="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply">

<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
   
</div>
</section>

<div class="container mx-auto py-8 my-10 text-black">
    <div class="container mx-auto py-8 my-10 text-black">
        <div class="max-w-3xl mx-auto p-4">
            <div class="text-gray-800 text-2xl midlg:text-5xl font-semibold text-center">{{ blog.title }}</div>
            <Avatar status="online" class="flex justify-center my-10" size="lg" rounded :img="blog.authorImage" />
            <div class="text-center mb-12">
                <span class="font-semibold text-gray-700 text-lg">{{blog.author}}</span>
                <div class="flex justify-center mt-2 text-sm text-gray-700">
                    <div class="pr-4">{{ dayjs(blog.dateCreated).format("MMMM D, YYYY") }}</div>
                    <div class="pl-4">{{blog.readTime}}</div>
                </div>
            </div>

            <div v-html="blog.content"></div>

        </div>
    </div>
</div>
</template>
