<script setup>
    import { ref, computed } from 'vue';
    import { Textarea, Button, Input, Alert } from 'flowbite-vue';
    import dayjs from "dayjs";
    import ExpressModel from '../../models/express';

    const expressModel = new ExpressModel();

    const name = ref('');
    const email = ref('');
    const showReviewAlert = ref(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailErrorMessage = ref('');
    const tool_name = ref('');
    const tool_category = ref('');
    const tool_description = ref('');

    const haveContent = computed(() => {
        return name.value.trim() !== '' &&
            isValidEmail.value &&
            tool_name.value.trim() !== '' &&
            tool_category.value.trim() !== '' &&
            tool_description.value.trim() !== '';
    });

  
    const isValidEmail = computed(() => {
        if (!emailRegex.test(email.value.trim())) {
        emailErrorMessage.value = 'Please enter a valid email address.';
        return false;
        } else {
        emailErrorMessage.value = '';
        return true;
        }
    });

    const submitReview = () => {
        const formData = {
            name: name.value,
            email: email.value,
            tool_name: tool_name.value,
            tool_category: tool_category.value,
            tool_description: tool_description.value,
            dateCreated: dayjs().format(),
        };
        expressModel.suggestTools(formData);

        name.value = '';
        email.value = '';
        tool_name.value = '';
        tool_category.value = '';
        tool_description.value = '';

        showReviewAlert.value = true;

        setTimeout(() => {
            showReviewAlert.value = false;
        }, 8000);
    };
</script>
<template>
    <Alert type="success" v-if="showReviewAlert" closable title="Suggested Tool" :inline="false" :class="showReviewAlert ? 'animate__animated animate__fadeInRightBig' : 'animate__animated animate__fadeOutRightBig'" class="mb-2 fixed bottom-0 right-0 w-[400px]">
        Thank you for submitting your suggested tool. Your input is invaluable in helping us improve and provide the best possible experience for our users
    </Alert>
    <div class="flex flex-wrap max-md:flex-col-reverse">
        <div class="md:w-[48%] lg:w-1/3 p-6 bg-white rounded-lg text-gray-800 shadow-md m-1 lg:mx-3 ">
            <Input size="md" label="Name" v-model="name" class="mb-2" />
            <Input size="md" label="Email" placeholder="name@gmail.com" v-model="email" :error="emailErrorMessage" type="email" class="mb-2" />
            <Input size="md" label="Tool Name" v-model="tool_name" class="mb-2" />
            <Input size="md" label="Tool Category" v-model="tool_category" class="mb-2" />
            <Textarea rows="4" placeholder="Tool Description" v-model="tool_description" label="Tool Description" class="mb-2" />
            <div class="flex justify-center">
                <Button type="submit" @click="submitReview" :disabled="!haveContent" size="lg" class="w-fit bg-main-color text-center hover:bg-secondary-color mt-4 border-0 text-sm font-semibold">Submit</Button>
            </div>
        </div>
        <div class="md:w-[48%] lg:w-[60%] p-6 bg-[#fbfbfb] rounded-lg shadow-md m-1 lg:mx-3 ">
            <img src="/bongo-cat/slap-cat.gif" alt="" class="m-auto w-40 md:w-fit">
        </div>
    </div>
</template>

