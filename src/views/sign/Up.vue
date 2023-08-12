<script setup>
    import { ref, onMounted } from "vue";
    import { Modal } from 'flowbite-vue';
    import { useAuthStore } from "../../stores/auth";
    import { useLoaderStore } from "../../stores/loader";
    import { Auth } from './../../plugins/firebase';
    import { addDoc,
        getFirestore,
        collection,
        onSnapshot, 
    } from "firebase/firestore";
    import { 
        GoogleAuthProvider,
        FacebookAuthProvider,
    } from "firebase/auth";

    const email = ref("");
    const password = ref("");
    const isLoading = ref(false);
    const hasError = ref(false);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const props = defineProps({
      selectedPrice: String,
      showModal: Boolean,
    });

    const authStore = useAuthStore();
    const loaderStore = useLoaderStore();

    onMounted(() => {
      authStore.selectedPlan(props.selectedPrice);
    })

    const register = () => {
        authStore.register(email.value, password.value);
    }

    const registerVia = (provider) => {
        loaderStore.toggle();
        console.log(loaderStore.loading);
        authStore.loginVia(provider)
              .then(() => {
                loaderStore.toggle();
                console.log(loaderStore.loading);
              });
    }

    const subscribeCustomer = async () => {
      const params = {
            price: props.selectedPrice,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        };

        const subDoc = await addDoc(
            collection(
                getFirestore(),
                "customers",
                Auth.currentUser.uid,
                "checkout_sessions"
            ), params
        );

        onSnapshot(subDoc, (snap) => {
            const { error, url } = snap.data();

            if(error) {
                console.error('An error occored: ${error.message}');
                isLoading.value = false
            }

            if(url) window.location.assign(url);
        });
    }
</script>

<template>
  <Modal size="lg" v-if="showModal" @close="showModal = !showModal" persistent>
    <template #header>
      {{ loaderStore.loading }}
      <div class="w-full text-black">
        <img class="w-32 m-auto" src="/tiklipy-logo-indigo.png" alt="tiklipy logo indigo color">
        <h2 class="text-2xl text-center">Account Registration</h2>
        <p class="text-lg text-center">
          Just a few more step to greatness...
        </p>
      </div>
    </template>
    <template #body>
      <div class="items-center justify-center w-full text-black">
        <p :class="hasError ? 'visible':'hidden'" class="mt-4 text-sm font-semibold text-center text-red-500">Please Enter a Valid Email Address</p>
        <div class="my-2">
          <label for="email" class="block mb-1 text-sm font-semibold text-gray-700 dark:text-white">Email</label>
          <input type="email" v-model="email" id="email" :class="hasError ? 'border-red-500':''"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color" placeholder="Enter a valid email">
        </div>
        <div class="mb-2">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input v-model="password" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color" 
            placeholder="Enter a password">
        </div>
        <button  @click="register" :disabled="!email || !password" :class="(!email || !password) || isLoading ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : 'bg-main-color hover:bg-secondary-color '" class="w-full py-2 mt-2 font-bold text-white border-0 rounded bg-main-color hover:bg-secondary-color">
          {{ isLoading ? "Loading..." : "Register" }}
        </button>
      </div>
      <div class="inline-flex items-center justify-center w-full text-black">
          <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
          <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
            or
          </span>
      </div>
      <p class="text-center text-black">Sign up with</p>
      <div class="">
        <button @click="registerVia(googleProvider)" class="hover:!border-secondary-color flex items-center justify-center w-full py-2 my-3 text-black bg-transparent border-gray-300 ">
          <img src="/google-logo.svg" class="w-5 " alt="">
          <b class="ml-2">Google</b>
        </button>
        <button v-if="false" class="hover:!border-secondary-color flex items-center justify-center w-full py-2 my-3 text-black bg-transparent border-gray-300">
          <img src="/facebook-logo.svg" class="w-5" alt="">
          <b class="ml-2">Facebook</b>
        </button>
      </div>
    </template>
  </Modal>
</template>