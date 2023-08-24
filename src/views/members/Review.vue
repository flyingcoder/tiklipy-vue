<script setup>
    import { ref } from 'vue';
    import { Textarea, Button, Input } from 'flowbite-vue'


    const name = ref('');
    const email = ref('');
    const selectedRating = ref(0);
    const star = ref(null);
    const hoverRating = ref(0);
    const ratings = [1, 2, 3, 4, 5];
    const message = ref('')

    function highlightStars(rating) {
        hoverRating.value = rating;
    }

    function setRating(rating) {
        selectedRating.value = rating;
        hoverRating.value = 0;
    }
</script>
<template>
    <div class="w-1/3 p-6 bg-white rounded-lg shadow-md">
        <div class="text-black mb-2">
            <h2 class="text-md text-gray-700">Stars Rating</h2>
            <div class="star-rating">
                <input :id="'star-' + star" type="radio" name="rating" :value="star" v-model="selectedRating" class="hidden" />
                <label v-for="star in ratings" :key="star" :for="'star-' + star" :title="star + ' stars'" @mouseover="highlightStars(star)" @click="setRating(star)">
                <i :class="['active', star <= hoverRating ? 'text-yellow-300' : 'text-gray-300', 'ti ti-star-filled', 'text-2xl']" aria-hidden="true"></i>
                </label>
            </div>
        </div>
        <Input size="md" label="Your Name" v-model="name" class="mb-2" />
        <Input size="md" label="Your Email" placeholder="name@gmail.com" v-model="email" type="email" class="mb-2" />
        <Textarea rows="4" placeholder="Your review" v-model="message" label="Your Review" class="mb-4" />
        <div class="flex justify-center">
            <Button type="submit" size="lg" class="w-80 bg-main-color text-center hover:bg-secondary-color mt-4 border-0 text-sm font-semibold">Submit</Button>
        </div>
    </div>
</template>
