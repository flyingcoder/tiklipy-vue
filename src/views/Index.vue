<script setup>
  import { ref } from 'vue';
  import Header from './layouts/Header.vue';
  import Footer from './layouts/Footer.vue';
  import SignIn from './sign/In.vue';

  const showLogin = ref(false);

</script>
<template>
  <Header @login-is-click="showLogin = !showLogin" />
  <section class="min-h-screen">
    <router-view />
  </section>
  <Footer />
  <SignIn :is-show-login="showLogin" />
</template>