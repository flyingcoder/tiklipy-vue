<script setup>
  import Header from './views/Header.vue'
  
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