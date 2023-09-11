<script setup>
    import { ref, computed } from 'vue';
    import { Textarea, Button, Input, Alert } from 'flowbite-vue';
    import { useAuthStore } from '../../stores/auth';
    import expressModel from "../../models/express";
    import dayjs from "dayjs";

    const authStore = useAuthStore();
    const backEndModel = new expressModel();
    const name = ref('');
    const role = ref('');
    const selectedRating = ref(0);
    const showReviewAlert = ref(false);
    const star = ref(0);
    const hoverRating = ref(0);
    const ratings = [1, 2, 3, 4, 5];
    const message = ref('');

    function highlightStars(rating) {
        hoverRating.value = rating;
    }

    function setRating(rating) {
        selectedRating.value = rating;
        star.value = rating;
    }

    function clearHover() {
        hoverRating.value = 0;
    }
    
    const haveContent = computed(() => {
        return selectedRating.value > 0 &&
            name.value.trim() !== '' &&
            role.value.trim() !== '' &&
            message.value.trim() !== '';
    });


    const submitReview = () => {
        const review = {
            name: name.value,
            role: role.value,
            star: star.value,
            message: message.value,
            status: 'Pending',
            profile: authStore.user.photoURL,
            dateCreated: dayjs().format(),
        }

        backEndModel.addReviews(review);

        name.value = '';
        role.value = '';
        star.value = 0;
        selectedRating.value = 0;
        message.value = '';

        showReviewAlert.value = true;

        setTimeout(() => {
            showReviewAlert.value = false;
        }, 8000);
    }
</script>
<template>
    <Alert type="success" v-if="showReviewAlert" closable title="Thankyou for Your Feedback" :inline="false" :class="showReviewAlert ? 'animate__animated animate__fadeInRightBig' : 'animate__animated animate__fadeOutRightBig'" class="mb-2 fixed bottom-0 right-0 w-[400px]">
        Thank you so much for taking the time to leave a review! Your feedback is greatly appreciated, and it means a lot to us.
    </Alert>
    <div class="flex flex-wrap max-md:flex-col-reverse">
        <div class="md:w-[48%] lg:w-1/3 p-6 bg-white text-gray-800 rounded-lg shadow-md m-1 lg:mx-3 ">
            <div class="text-black mb-2">
                <h2 class="text-md text-gray-700">Stars Rating</h2>
                <div class="star-rating">
                    <input :id="'star-' + star" type="radio" name="rating" :value="star" v-model="selectedRating" class="hidden" />
                    <label v-for="star in ratings" :key="star" :for="'star-' + star" :title="star + ' stars'" @mouseover="highlightStars(star)" @mouseout="clearHover" @click="setRating(star)">
                    <i :class="['active', star <= (hoverRating || selectedRating) ? 'text-yellow-300' : 'text-gray-300', 'ti ti-star-filled', 'text-2xl']" aria-hidden="true"></i>
                    </label>
                </div>
            </div>
            <Input size="md" label="Name" v-model="name" class="mb-2" required/>
            <Input size="md" label="Role" v-model="role" class="mb-2" required />
            <Textarea rows="4" placeholder="Review" v-model="message" required label="Your Review" class="mb-4" />
            <div class="flex justify-center">
                <Button type="submit" size="lg" @click="submitReview" :disabled="!haveContent" impo class="w-full bg-main-color text-center hover:bg-secondary-color mt-4 border-0 text-sm font-semibold">Submit</Button>
            </div>
        </div>
        <div class="md:w-[48%] lg:w-[60%] p-6 bg-[#fbfbfb] rounded-lg shadow-md m-1 lg:mx-3 ">
            <img src="/bongo-cat/slap-cat.gif" alt="" class="m-auto w-40 md:w-fit">
        </div>
    </div>
</template>
