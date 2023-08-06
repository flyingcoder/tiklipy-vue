<template>
  <nav>
    <router-link class="px-2" to="/">Home</router-link>
    <router-link class="px-2" to="/register">Register</router-link>
    <router-link class="px-2" to="/login">Login</router-link>
    <router-link class="px-2" to="/dashboard">Dashboard</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <router-view />
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

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
    router.push('/');
  })
};
</script>