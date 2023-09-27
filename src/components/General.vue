<script setup>
    import { ref, onMounted } from 'vue';  
    import { Input, Button } from 'flowbite-vue'
    import ExpressModel from '../models/express.js';

    const expressModel = new ExpressModel();
    const api = ref('');

    const saveAPI = () => {
        expressModel.postChatGPTAPI(api.value);
    }

    const getAPI = () => {
        expressModel.getChatGPTAPI();
    }

    onMounted(() => {
        getAPI();
    });
</script>
<template>
    <div class="text-black">
        <Input v-model="api" label="Chat GPT API" />
    </div>
    <div class="mt-4">
        <Button class="bg-main-color" @click="saveAPI()">Save</Button>
    </div>
</template>