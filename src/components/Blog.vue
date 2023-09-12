<script setup>
import { Avatar } from 'flowbite-vue';
import { onMounted, ref } from 'vue';
import expressModel from "../models/express";
import { useLoaderStore } from '../stores/loader';
import { useRoute } from 'vue-router';
import dayjs from "dayjs";

const backEndModel = new expressModel();
const blog = ref({});
const loaderStore = useLoaderStore();
const route = useRoute();

onMounted(() => {
    loaderStore.isLoading = true;
    getData();
});

const getData = () => {
    const path = route.path.substring(route.path.lastIndexOf('/') + 1);

    backEndModel.getPostBySlug(path).then((data) => {
        blog.value = data.data.data[0];
        loaderStore.isLoading = true;
    }).catch((error) => {
        console.error("Error fetching data:", error);
        loaderStore.isLoading = false;
    }).finally(() => {
        loaderStore.isLoading = false;
    });
};
</script>
<template>
<div class="container mx-auto text-black sm:px-8">
    <div class="container mx-auto text-black">
        <div class="max-w-3xl mx-auto mx-3 max-xs:p-3 max-md:p-10 p-24 pt-8 my-10 bg-white rounded-2xl">
            <img class="w-[40rem] m-auto pb-3 xs:pb-8" :src="blog.featuredImage" alt="">
            <div class="font-bold text-gray-700 text-xl text-center mb-5" >{{ blog.title }}</div>
            <div class="text-center ">
                <div class=" justify-center mt-2 text-sm text-gray-700 mb-3">
                    <div class="">Published: {{ dayjs(blog.dateCreated).format("MMMM D, YYYY") }}</div>
                    <div class="">Duration: {{blog.readTime}}</div>
                </div>
            </div>
            <div class="flex align-center content-center justify-center mb-12">
                <Avatar status="online" class="flex justify-center" size="md" rounded :img="blog.authorImage" />
                <div class="grid ml-3">
                    <span class="font-semibold text-gray-700 text-lg">{{blog.author}}</span>
                    <span class="text-black text-xs -mt-2"> Author </span>
                </div>
            </div>

            <div v-html="blog.content"></div>

        </div>
    </div>
</div>
</template>
