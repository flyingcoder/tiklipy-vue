<script setup>
  import { ref } from 'vue';
  import Header from './views/Header.vue';
  import Footer from './views/Footer.vue';
  import SignIn from './views/sign/In.vue';

  const showLogin = ref(false);

</script>
<template>
  <Header @login="showLogin = !showLogin" />
  <router-view class="lg:container md:mx-auto "/>
  <Footer />
  <SignIn :show-modal="showLogin" />
</template>