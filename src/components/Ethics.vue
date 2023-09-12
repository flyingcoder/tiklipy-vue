<script setup>
    import { onMounted, ref } from 'vue';
    import { TheCard } from 'flowbite-vue';
    import expressModel from "../models/express";
    import { useLoaderStore } from '../stores/loader';

    const loaderStore = useLoaderStore();
    const backEndModel = new expressModel();
    const ethics = ref([]);

    onMounted(() => {
        loaderStore.isLoading = true;
        getData();
    });

    const getData = () => {
        backEndModel.getEthics().then((data) => {
            ethics.value = data.data.ethics;
            loaderStore.isLoading = false;
        }).catch((error) => {
            console.error("Error fetching reviews:", error);
            loaderStore.isLoading = false;
        });
    };
</script>
<template>
    <div class="flex flex-wrap text-black mt-16 justify-between px-3 ">
        <router-link v-for="(data, index) in ethics" :key="index + '-ethics'" class="flex w-full md:w-[48%] lg:w-[32%] xl:max-w-[30rem] justify-center " :to="{ name: 'helps', params: { category: data.category, slug: data.slug } }">
            <the-card href="#" class="!max-w-2xl bg-white rounded-lg mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="">
                <div class="p-4  dark:bg-gray-800 dark:border-gray-700">
                    <img src="/tiklipy-logo-icon.png" class="mr-5 mb-7" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="line-clamp-2 mb-2 text-2xl font-bold tracking-tight  dark:text-white">{{ data.title }}</h5>
                        <p class="line-clamp-2 font-normal text-gray-500 text-md dark:text-gray-400">{{data.shortDesc}}</p>
                    </div>
                </div>
            </the-card>
        </router-link>
    </div>
</template>