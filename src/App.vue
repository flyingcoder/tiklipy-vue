<script setup>
  import { ref } from 'vue';
  import Header from './views/layouts/Header.vue';
  import Footer from './views/layouts/Footer.vue';
  import SignIn from './views/sign/In.vue';

  const showLogin = ref(false);

</script>
<template>
  <Header @login="showLogin = !showLogin" />
  <section class="min-h-screen">
    <router-view class="lg:container md:mx-auto"/>
  </section>
  <Footer />
  <SignIn :show-modal="showLogin" />
</template>