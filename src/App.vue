<script setup>
  import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import Header from './views/Header.vue'

  const router = useRouter();
  const isLoggedIn = ref(false);

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      isLoggedIn.value =  (user) ? true : false; 
    });
  });

  const handleSignOut =  () => {
    signOut(auth).then(() => {
      router.push('sign-in');
    })
  };
</script>
<template>
  <!--nav>
    <router-link class="px-2" to="/">Home</router-link>
    <router-link class="px-2" to="/sign-up">Sign up</router-link>
    <router-link class="px-2" to="/sign-in">Sign in</router-link>
    <router-link class="px-2" to="/dashboard">Dashboard</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </!nav-->
  <Header />
  <router-view />
</template>