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
  <section class="min-h-screen midlg:px-10">
    <HeaderTitle v-if="$route.name !== 'visuals'"/>
    <div class="lg:container md:mx-auto">
      <router-view />
    </div>
  </section>
  <Footer class="bg-white" />
  <SignIn v-if="showLogin" />
</template>