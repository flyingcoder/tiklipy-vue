<script setup>
  import { onMounted, ref } from 'vue';
  import Header from './layouts/Header.vue';
  import Footer from './layouts/Footer.vue';

  const showLogin = ref(false);
  const loading = ref(true);

  onMounted(() => {
    //user();
  });

  //const user = async () => {
  //  await getCurrentUser()
  //    .then((res) => {
  //      loading.value = false;
  //    })
  //    .catch((error) => {
  //      loading.value = false;
  //   });
  //};
    const anakNiHeader = () => { console.log('this is click') }
</script>
<template>
  <Header @login-is-click="anakNiHeader" />
  <section class="min-h-screen midlg:px-10">
    <div class="lg:container md:mx-auto">
      <router-view />
    </div>
  </section>
  <Footer class="bg-white" />
</template>