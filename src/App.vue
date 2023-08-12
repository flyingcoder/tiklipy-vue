<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from './stores/auth';
  import Swal from "sweetalert2";

  const router = useRouter();
  const authStore = useAuthStore();

  const removeListener = authStore.$onAction((args) => {
    console.log(args.name)
    args.after((result) => {
      if(args.name === 'loginVia') {
        args.store.fetchSubscription();
      }

      if(args.name === 'fetchSubscription') {
        if(!args.store.authSubscription) {
          if(args.store.price) {
            args.store.subscribe();
          } else {
            args.store.logout();
          }
        }
      }
    })
    
  });

  onMounted(() => {
    
  });


</script>
<template>
  <router-view></router-view>
</template>