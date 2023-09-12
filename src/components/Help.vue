<script setup>
    import { Avatar } from 'flowbite-vue';
    import { onMounted, ref } from 'vue';
    import expressModel from "../models/express";
    import { useRoute } from 'vue-router';
    import { useLoaderStore } from '../stores/loader';
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-vue'
        
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
<div class="container mx-auto pb-8 my-10 text-black">
    <div class="max-w-3xl mx-auto p-4">
        <Breadcrumb class="text-black">
            <BreadcrumbItem href="/helps" class="no-icon ">
                Help
            </BreadcrumbItem>
            <BreadcrumbItem>
                {{ethics.title}}
            </BreadcrumbItem>
        </Breadcrumb>
        <div class="bg-white px-5 py-5 mt-5 rounded-lg">
            <div class="text-gray-800 text-4xl font-semibold mb-5">{{ ethics.title }}</div>
            <div class="text-xl text-gray-700 font-medium" v-html="ethics.content"></div>
        </div>
    </div>
</div>
</template>
