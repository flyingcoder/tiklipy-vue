<script setup>
    import { onMounted, ref } from 'vue';
    import { TheCard } from 'flowbite-vue';
    import expressModel from "../models/express";

    const backEndModel = new expressModel();
    const initiation = ref([]);

    onMounted(() => {
        getData();
    });

    const getData = () => {
        backEndModel.getInitiation().then((data) => {
            initiation.value = data.data.initiation;
        }).catch((error) => {
            console.error("Error fetching reviews:", error);
        });
    };
</script>
<template>
    <div class="flex flex-wrap text-black mt-16 gap-[1%] px-3 ">
        <router-link v-for="(data, index) in initiation" :key="index + '-initiate'" class="flex w-full md:w-[47%] lg:w-[32%] xl:w-[24%] justify-center " :to="{ name: 'helps', params: { slug: data.slug } }">
            <the-card href="#" class="!max-w-[100%] bg-white rounded-lg mb-5 flex border-none rounded-lg shadow-none hover:bg-white hover:shadow-md bg-[url('/p-1.png')] bg-no-repeat bg-contain" style="">
                <div class="p-4  dark:bg-gray-800 dark:border-gray-700">
                    <img src="/tiklipy-logo-icon.png" class="" width="70" alt="">
                    <div class="flex flex-col justify-between leading-normal">
                        <h5 class="line-clamp-2 mb-2 text-2xl font-bold tracking-tight  dark:text-white">{{ data.title }}</h5>
                        <p class="line-clamp-2 font-normal text-gray-500 text-md dark:text-gray-400">{{ data.shortDesc }}</p>
                    </div>
                </div>
            </the-card>
        </router-link>
    </div>
</template>