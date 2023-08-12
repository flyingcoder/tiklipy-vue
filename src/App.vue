<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from './stores/auth';

  const router = useRouter();
  const authStore = useAuthStore();

  const removeListener = authStore.$onAction((args) => {
    args.after((result) => {
      if(args.name === 'loginVia') {
        args.store.fetchSubscription();
        console.log(args.store.authUser);
        //authStore.subscribe();
        //removeListener();
      }

      if(args.name === 'fetchSubscription') {
        if(args.store.authSubscription) {
          console.log(args.store.authSubscription)
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