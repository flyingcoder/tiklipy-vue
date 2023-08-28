<script setup>
    import { ref , onMounted } from 'vue';
    import { TheCard } from 'flowbite-vue';
    import expressModel from "../models/express";
    
    const backEndModel = new expressModel();
    const blogs = ref();

    onMounted(() => {
        getBlogs();
    });

    const getBlogs = async () => {
        blogs.value = await backEndModel.getPosts().then((data) => data.data.blogs );
    } 
</script>

<template>

    <section class="bg-secondary-color dark:bg-gray-900">
        <div class="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl pt-7 font-semibold tracking-tight leading-none text-white md:text-3xl lg:text-5xl dark:text-white">Unleashed Insights: Our Blog</h1>
            <p class="mb-8 mt-7 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Tales of Teaching, Technology, and Education.</p>
        </div>
    </section>

    <div class="max-w-screen-2xl mx-auto mt-5 midlg:mt-5">
        <div class="mx-2 sm:mx-5 flex max-lg:flex-wrap justify-center lg:justify-between justify-items-center">
            <router-link v-for="(blog, index ) in blogs" :key="index + 'blog-card'" class="sm:mx-2 pb-5" :to="{ name: 'blog', params: { slug: blog.slug } }">
                <the-card variant="image" class="m-auto h-full	 mb-5 cursor-pointer pt-5" img-src="/ai.png" img-alt="Desk">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tiklipy and Artificial Intelligence (AI): An Amicable Overview</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                        {{ blog.shortDesc }}
                    </p>
                </the-card>
            </router-link>
        </div>
    </div>
</template>