<script setup>
    import { onMounted, ref } from "vue";
    import expressModel from "../../models/express";

    const backEndModel = new expressModel();
    const emails = ref([]);

    const getNewsletters = async () => {
        emails.value = await backEndModel.getNewsletter().then((data) => data.data.emails );
    } 
    onMounted(() => {
        getNewsletters();
    });

    console.log(emails)
</script>
<template>
    <div class="relative overflow-x-auto bg-white w-[50vw] mx-auto mt-20 rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Email Address
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(email, index) in emails" :key="index + '-reviews-cards'" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ index + 1 }}. {{ email.email }}
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>