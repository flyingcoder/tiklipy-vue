<script setup>
    import { ref } from 'vue';
    import { Textarea, Button, Input } from 'flowbite-vue'


    const name = ref('');
    const email = ref('');
    const message = ref('')
</script>
<template>
    <div class="flex flex-wrap flex-reverse">
        <div class="md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md mx-3 ">
            <Input size="md" label="Name" v-model="name" class="mb-2" />
            <Input size="md" label="Email" placeholder="name@gmail.com" v-model="email" type="email" class="mb-2" />
            <Input size="md" label="Tool Name" v-model="tool_name" class="mb-2" />
            <Input size="md" label="Tool Category" v-model="tool_category" class="mb-2" />
            <Textarea rows="4" placeholder="Tool Description" v-model="tool_description" label="Tool Description" class="mb-2" />
            <div class="flex justify-center">
                <Button type="submit" size="lg" class="w-80 bg-main-color text-center hover:bg-secondary-color mt-4 border-0 text-sm font-semibold">Submit</Button>
            </div>
        </div>
        <div class="md:w-1/2 lg:w-[60%] p-6 bg-white rounded-lg shadow-md mx-3">
            <img src="/bongo-cat/slap-cat.gif" alt="" class="m-auto w-fit">
        </div>
    </div>
</template>
