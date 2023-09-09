<script setup>
    import { ref, onMounted } from 'vue';
    import expressModel from "../../models/express";
    import { Button } from 'flowbite-vue';
    import { Modal } from 'flowbite-vue';
    import EditBlog from '../../components/EditBlog.vue';

    const backEndModel = new expressModel();
    const blogs = ref([]);
    const blog = ref(null);
    const size = ref('5xl');
    const isCardClicked = ref(false);
    const isEditing = ref(false);
    const showFullContent = ref(false);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    const getBlogs = () => {
        backEndModel.getPosts().then((data) => {
            blogs.value = data.data.blogs;
        }).catch((error) => {
            console.error("Error fetching reviews:", error);
        });
    };

    const truncateText = (text, maxLength) => {
        if (!showFullContent.value && text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    }

    const closeModal = () => {
        isEditing.value = false
        document.body.classList.remove('overflow-hidden');
    }

    const editBlog = (data) => {
        blog.value = data;
        const isBodyOverflowHidden = document.body.classList.contains('overflow-hidden');

        if (!isBodyOverflowHidden) {
            document.body.classList.add('overflow-hidden');
        }

        isEditing.value = true;
    }

    onMounted(() => {
        getBlogs();
    });
</script>
<style>
.desciption-style h1 {
    font-size: 20px;
}
.desciption-style p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
</style>
<template>
    <div class="lg:container md:mx-auto">
        <Modal :size="size" v-if="isEditing" @close="closeModal"  id="edit-blog-modal">
            <template #header>
                <div class="flex items-center text-xl text-black font-semibold">
                Edit Post
                </div>
            </template>
            <template #body>
                <EditBlog :blog="blog" class="text-black"/>  
            </template>
        </Modal>    
        <div class="bg-white">
            <div class="p-5 ">
                <h1 class="text-center text-black text-3xl font-semibold mb-10">
                    Blogs
                </h1>
                <div class="grid mb-8  dark:border-gray-700 md:mb-12 md:grid-cols-3 gap-4">
                    <div v-for="(blog, index) in blogs" :key="index + '-features-cards'" @click="editBlog(blog)" class="border-[1px] border-color-main-color cursor-pointer w-full mb-5 bg-white  p-5 2xl:p-10  content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm">
                        <div class="">
                            <h1 class="text-main-color font-semibold text-2xl">{{ blog.title }}</h1>
                            <div class="text-black flex w-full mb-7"><span>Read Time:&nbsp;</span> <span>{{ blog.readTime }}</span></div>
                            <div v-html="truncateText(blog.content, 80)" class="text-black desciption-style"></div>
                            <div class="flex flex-wrap items-center gap-5 mt-5">
                                <img :src="blog.authorImage" alt="hero" class="w-16 rounded-full">
                                <div class="">
                                    <h5 class="mb-1 text-lg font-bold leading-3 text-black ">{{ blog.author }}</h5>
                                    <p class="text-sm font-light leading-3 text-black">{{ formatDate(blog.dateCreated) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
