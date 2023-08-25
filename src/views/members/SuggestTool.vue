<script setup>
    import { ref } from 'vue';
    import { Textarea, Button, Input } from 'flowbite-vue';
    import dayjs from "dayjs";
    import ExpressModel from '../../models/express';

    const expressModel = new ExpressModel();

    const name = ref('');
    const email = ref('');
    const tool_name = ref('');
    const tool_category = ref('');
    const tool_description = ref('');

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
    };
</script>
<template>
    <div class="flex flex-wrap max-md:flex-col-reverse">
        <div class="md:w-[48%] lg:w-1/3 p-6 bg-white rounded-lg text-gray-800 shadow-md m-1 lg:mx-3 ">
            <Input size="md" label="Name" v-model="name" class="mb-2" />
            <Input size="md" label="Email" placeholder="name@gmail.com" v-model="email" type="email" class="mb-2" />
            <Input size="md" label="Tool Name" v-model="tool_name" class="mb-2" />
            <Input size="md" label="Tool Category" v-model="tool_category" class="mb-2" />
            <Textarea rows="4" placeholder="Tool Description" v-model="tool_description" label="Tool Description" class="mb-2" />
            <div class="flex justify-center">
                <Button type="submit" @click="submitReview" size="lg" class="w-fit bg-main-color text-center hover:bg-secondary-color mt-4 border-0 text-sm font-semibold">Submit</Button>
            </div>
        </div>
        <div class="md:w-[48%] lg:w-[60%] p-6 bg-[#fbfbfb] rounded-lg shadow-md m-1 lg:mx-3 ">
            <img src="/bongo-cat/slap-cat.gif" alt="" class="m-auto w-40 md:w-fit">
        </div>
    </div>
</template>
