<script setup>
  import { onMounted, ref } from 'vue';
  import Header from './views/layouts/Header.vue';
  import Footer from './views/layouts/Footer.vue';
  import SignIn from './views/sign/In.vue';
  import { getCurrentUser } from './plugins/firebase';
  import Preloader from './components/Preloader.vue';

  const showLogin = ref(false);
  const loading = ref(true);

  onMounted(() => {
    user();
  });

  const user = async () => {
    await getCurrentUser()
      .then((res) => {
        loading.value = false;
        removePreloaderClass(); // Call the function to remove the class
      })
      .catch((error) => {
        loading.value = false;
      });
  };

  // Function to remove the class from the Preloader element
  const removePreloaderClass = () => {
    const preloaderElement = document.getElementById('preloader');
    if (preloaderElement) {
      preloaderElement.classList.remove('show-preloader');
    }
  };
</script>
<template>
  <Preloader id="preloader"/>
  <Header @login-is-click="showLogin = !showLogin" />
  <section class="min-h-screen">
    <router-view class="lg:container md:mx-auto"/>
  </section>
  <Footer class="bg-white" />
  <SignIn :is-show-login="showLogin" />
</template>