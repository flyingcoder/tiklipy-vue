<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { getCurrentUser, Auth  } from './plugins/firebase';
  import { signOut } from "firebase/auth";

  const router = useRouter();
  
  onMounted(async () => {
    await getCurrentUser()
            .then((user) => {
              if(user) {
                if(!user.subscription) {
                  signOut(Auth)
                }
              }
            })
  });

  //const serverHello = ref({});

  //fetch('/api/v1/hello')
  //  .then((r) => r.json())
  //  .then(({ message }) => {
  //    serverHello.value = message
  //  })
</script>
<template>
  <router-view></router-view>
</template>