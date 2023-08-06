<script setup>
  import Header from './views/Header.vue';
  import Footer from './views/Footer.vue';
</script>
<template>
  <Header/>
  <main>
    <router-view class="mx-16 px-4 "/>
  </main>
  <Footer />
</template>