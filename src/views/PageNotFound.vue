<script setup>
    import { useRouter } from "vue-router";

    const router = useRouter();
    const goBack = () => {
        router.go(-1)
    }
</script>
<template>
    <div class="text-black">
        <h1></h1>
        <p></p>
    </div>
    <div class="flex items-center justify-center pt-20 max-md:px-3  m-auto mb-10">
        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  text-center max-md:px-3">
            <img src="/404.gif" alt="" class=" m-auto mt-10">
            <div class="max-w-[40rem] m-auto mb-10">
                <div class="mb-10">
                    <h1 class="text-main-color max-xs:text-2xl text-4xl  lg:text-5xl text-black font-bold mb-5">Page Not Found</h1>
                    <p class="text-black">The page you're looking for doesn't exist.</p>
                </div>
                <button @click="goBack" type="button" class="transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                    Go back 
                </button>
            </div>
        </div>
    </div>
</template>