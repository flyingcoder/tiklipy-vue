<script setup>
  import { onMounted, ref } from 'vue';
  import Header from './layouts/Header.vue';
  import Footer from './layouts/Footer.vue';
  import SignIn from './sign/In.vue';
  import Preloader from '../components/Preloader.vue';
  import { getCurrentUser } from '../plugins/firebase';

  const showLogin = ref(false);
  const loading = ref(true);

  onMounted(() => {
    user();
  });

  const user = async () => {
    await getCurrentUser()
      .then((res) => {
        loading.value = false;
      })
      .catch((error) => {
        loading.value = false;
      });
  };

</script>
<template>
  <Preloader v-if="loading" />
  <Header @login-is-click="showLogin = !showLogin" />
<<<<<<< HEAD:src/views/members/Index.vue
  <section class="min-h-screen midlg:px-10">
    <HeaderTitle v-if="$route.name !== 'visuals'"/>
=======
  <section class="min-h-screen">
>>>>>>> a71deb77c7d0e6d0ac12fb8338f10f8e7b9b5c82:src/views/GuestIndex.vue
    <router-view class="lg:container md:mx-auto"/>
  </section>
  <Footer class="bg-white" />
  <SignIn v-if="showLogin" />
</template>