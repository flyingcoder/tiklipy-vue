<script setup></script>

<template>
  <nav>
    <router-link class="px-2" to="/">Home</router-link>
    <router-link class="px-2" to="/register">Register</router-link>
    <router-link class="px-2" to="/login">Login</router-link>
    <router-link class="px-2" to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view />
</template>

<style scoped></style>
