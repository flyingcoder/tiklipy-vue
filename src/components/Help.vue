<script setup>
    import { Avatar } from 'flowbite-vue';
    import { onMounted, ref } from 'vue';
    import expressModel from "../models/express";
    import { useRoute } from 'vue-router';
    import { useLoaderStore } from '../stores/loader';
        
    const loaderStore = useLoaderStore();
    const backEndModel = new expressModel();
    const ethics = ref({});
    const route = useRoute();

    onMounted(() => {
        loaderStore.isLoading = true;
        getData();
    });

    const getData = () => {
        const path = route.path.substring(route.path.lastIndexOf('/') + 1);

        backEndModel.getHelpData(path).then((data) => {
            ethics.value = data.data.data[0];
            loaderStore.isLoading = false;
        }).catch((error) => {
            console.error("Error fetching data:", error);
            loaderStore.isLoading = false;
        });
    };
</script>
<template>
<div class="container mx-auto py-8 my-10 text-black">
    <div class="max-w-3xl mx-auto p-4">
        <div class="text-gray-800 text-2xl midlg:text-5xl font-semibold text-center">{{ ethics.title }}</div>
        <Avatar status="online" class="flex justify-center my-10" size="lg" rounded img="/tiklipy-logo-icon.png" />
        <!-- <div class="text-center mb-12">
            <span class="font-semibold text-gray-700 text-lg">Emmanuel</span>
        </div> -->
        <div class="text-xl text-gray-700 font-medium" v-html="ethics.content"></div>
    </div>
</div>
</template>
