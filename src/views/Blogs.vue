<script setup>
    import { ref , onMounted } from 'vue';
    import { TheCard } from 'flowbite-vue';
    import { useLoaderStore } from '../stores/loader';
    import expressModel from "../models/express";
    
    const backEndModel = new expressModel();
    const loaderStore = useLoaderStore();
    const blogs = ref();

    onMounted(() => {
        loaderStore.isLoading = true;
        getBlogs();
    });

    const getBlogs = async () => {
        blogs.value = await backEndModel.getPosts()
        .then((data) => data.data.blogs )
        .finally(() => {
            loaderStore.isLoading = false;
        });
    } 
</script>

<template>

    <section class="bg-secondary-color dark:bg-gray-900">
        <div class="py-2 mb-10 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4  pt-7 font-semibold tracking-tight leading-none text-white text-3xl md:text-3xl lg:text-5xl dark:text-white">Unleashed Insights: Our Blogs</h1>
            <p class="mb-8 sm:mt-7 font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Tales of Teaching, Technology, and Education.</p>
        </div>
    </section>
    <div class="max-w-screen-2xl mt-5 midlg:mt-5">
        <div class="max-sm:px-3 flex flex-wrap justify-center justify-between max-midlg:px-10">
            <router-link v-for="(blog, index ) in blogs" :key="index + 'blog-card'" class=" pb-4 md:pb-5 sm:pb-10 w-full md:w-[47%] lg:w-[32%] xl:w-[24%]" :to="{ name: 'blog', params: { slug: blog.slug } }">
                <the-card variant="image" class="!max-w-[100%] m-auto h-full mb-5 cursor-pointer pt-5" :img-src="blog.featuredImage" img-alt="Desk">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $filters.capitalizeSentencesInParagraph(blog.title) }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400 break-words line-clamp-4 fit">
                        {{ $filters.capitalizeSentencesInParagraph(blog.shortDesc) }}
                    </p>
                </the-card>
            </router-link>
        </div>
    </div>
</template>