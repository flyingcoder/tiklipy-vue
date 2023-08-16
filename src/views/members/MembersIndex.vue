<script setup>
  import { onMounted, ref } from 'vue';
  import Header from '../layouts/MembersHeader.vue';
  import Footer from '../layouts/MembersFooter.vue';
  import HeaderTitle from '../layouts/HeaderTitle.vue';

  onMounted(() => {

  });
</script>
<template>
  <Header />
  <section class="min-h-screen">
    <HeaderTitle v-if="$route.meta.displayName"/>
    <div class="lg:container md:mx-auto">
      <router-view />
    </div>
  </section>
  <Footer class="bg-white" />
</template>