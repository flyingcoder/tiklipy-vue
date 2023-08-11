<script setup>
  import { onMounted, ref } from 'vue';
  import Header from '../layouts/MembersHeader.vue';
  import Footer from '../layouts/MembersFooter.vue';
  import Preloader from '../../components/Preloader.vue';
  import HeaderTitle from '../layouts/HeaderTitle.vue';
  import { getCurrentUser } from '../../plugins/firebase';
  import { useRouter } from "vue-router"
  
  const showLogin = ref(false);
  const loading = ref(true);
  const router = useRouter();
  const userDoc = ref(null);

  onMounted(() => {
    user();
    router.push({ name: 'dashboard' });
  });

  const user = async () => {
    await getCurrentUser()
      .then((res) => {
        userDoc.value = res;
        loading.value = false;
        
      }).catch((error) => {
        loading.value = false;
      });
  };

</script>
<template>
  <Preloader v-if="loading" />
  <Header @login-is-click="showLogin = !showLogin" />
  <section class="min-h-screen">
    <HeaderTitle v-if="$route.name !== 'visuals'"/>
    <div class="lg:container md:mx-auto">
      <router-view />
    </div>
  </section>
  <Footer class="bg-white" />
</template>