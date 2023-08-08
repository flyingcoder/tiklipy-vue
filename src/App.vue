<script setup>
  import { onMounted, ref } from 'vue';
  import Header from './views/layouts/Header.vue';
  import Footer from './views/layouts/Footer.vue';
  import SignIn from './views/sign/In.vue';
  import { getCurrentUser } from './plugins/firebase';

  const showLogin = ref(false);
  const loading = ref(true);

  onMounted(() => {
    user();
  });

  const user = async () => {
    await getCurrentUser()
            .then((res) => {
              loading.value = false
            })
  }


</script>
<template>
  <div class="preloader" v-if="loading">saf ds af dsf</div>
  <Header @login-is-click="showLogin = !showLogin" />
  <section class="min-h-screen">
    <router-view class="lg:container md:mx-auto"/>
  </section>
  <Footer />
  <SignIn :is-show-login="showLogin" />
</template>