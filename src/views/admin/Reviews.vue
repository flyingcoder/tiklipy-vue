<script setup>
    import { ref, onMounted } from 'vue';
    import expressModel from "../../models/express";
    import { Button } from 'flowbite-vue';

    const backEndModel = new expressModel();
    const reviews = ref([]);

    const getReviews = () => {
        backEndModel.getReviews().then((data) => {
            reviews.value = data.data.reviews;
        }).catch((error) => {
            console.error("Error fetching reviews:", error);
        });
    };

    const addToTestimonials = async (data) => {
        const updatedTestimonial = { ...data, status: 'Approved' };
        try {
            await backEndModel.updateTestimonial(updatedTestimonial);
            await getReviews();
        } catch (error) {
        console.error("Error updating testimonial:", error);
        }
    };

    onMounted(() => {
        getReviews();
    });
</script>
<template>
    <div class="lg:container md:mx-auto">
        <div class="bg-white">
            <div class="p-5 text-center">
                <h1 class="text-center text-black text-3xl font-semibold">
                    Reviews
                </h1>
                
                <div class="grid mb-8  dark:border-gray-700 md:mb-12 md:grid-cols-3 gap-4">
                    <figure v-for="(testimonial, index) in reviews" :key="index + '-review-cards'" class="flex shadow-lg rounded-lg flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-t-lg md:rounded-tl-lg dark:bg-gray-800">
                        <blockquote class="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-2 dark:text-gray-400">
                            <span :class="testimonial.status == 'Pending' ? ' bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'" class="inline-flex items-center  text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">
                                <span :class="testimonial.status == 'Pending' ? 'bg-red-500' : 'bg-green-500'" class="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                                {{testimonial.status}}
                            </span>
                            <h3 class="text-lg font-semibold mt-2 text-gray-900 dark:text-white">{{ testimonial.role }}</h3>
                            <p class="my-3"> {{ testimonial.message }}</p>
                            <div class="text-black mb-2">
                                <div class="star-rating">
                                <label v-for="star in testimonial.star" :key="star" :title="star + ' stars'">
                                    <i class="text-yellow-300 ti ti-star-filled text-2xl"
                                    aria-hidden="true"
                                    ></i>
                                </label>
                                </div>
                            </div>
                        </blockquote>
                        <figcaption class="flex items-center justify-center space-x-3">
                            <img class="rounded-full w-9 h-9" :src="testimonial.profile" alt="profile picture">
                            <div class="space-y-0.5 font-medium dark:text-white text-left text-black">
                                <div>{{ testimonial.name }}</div>
                            </div>
                        </figcaption> 
                        <div class="flex justify-center" v-if="testimonial.status == 'Pending'">
                            <Button type="submit" size="lg" @click="addToTestimonials(testimonial)" class="w-full bg-main-color text-center hover:bg-secondary-color mt-6 p-3 rounded-lg border-0 text-sm font-semibold">Add To Testimonials</Button>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>