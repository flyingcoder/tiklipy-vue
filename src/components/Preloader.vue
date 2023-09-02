<script setup>
    import { useLoaderStore } from '../stores/loader';
    const loaderStore = useLoaderStore();
</script>
<template>
    <div v-if="loaderStore.loading" class="bg-[#f3f4f6] fixed w-full h-screen flex justify-center z-50 items-center" :style="{ backgroundImage: 'url(/bg-body.png)' }">
        <img src="/output-onlinegiftools.gif" width="70" height="70" alt="">
    </div>
</template>