<script setup>
  import { onMounted } from 'vue';
  import Preloader from './components/Preloader.vue';
  import { useLoaderStore } from './stores/loader';

  const loaderStore = useLoaderStore();

  onMounted(() => {
    document.addEventListener('click', handleGlobalClick);
  })

  const handleGlobalClick = (event) => {
    loaderStore.forceClose();
  }
  
</script>
<template>
  <Preloader />
  <router-view></router-view>
</template>