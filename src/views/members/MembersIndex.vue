<script setup>
  import { onMounted, ref } from 'vue';
  import Header from '../layouts/MembersHeader.vue';
  import Footer from '../layouts/MembersFooter.vue';
  import Preloader from '../../components/Preloader.vue';
  import HeaderTitle from '../layouts/HeaderTitle.vue';
  import { getCurrentUser, fetchSubscription } from '../../plugins/firebase';
  import { useRouter } from "vue-router"
  
  const showLogin = ref(false);
  const loading = ref(true);
  const router = useRouter();
  const subscription = ref(null);
  const userDoc = ref(null);

  onMounted(() => {
    user();
    router.push({ name: 'dashboard' });
  });

  const user = async () => {
    await getCurrentUser()
      .then(async (res) => {

        userDoc.value = res;

        await fetchSubscription(res.uid)
            .then((sub) => {
              subscription.value = sub.docs.length > 0 ? sub.docs[0].data() : null
            });
        
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
    <router-view class="lg:container md:mx-auto"/>
  </section>
  <Footer class="bg-white" />
</template>