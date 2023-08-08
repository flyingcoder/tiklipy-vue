<script setup>
    import { ref, defineProps, watch } from "vue";
    import { useRouter } from 'vue-router';
    import { Modal } from 'flowbite-vue';
    import { Auth } from './../../plugins/firebase';
    import { addDoc,
        getFirestore,
        collection,
        onSnapshot, 
    } from "firebase/firestore";
    import { getAuth, 
        createUserWithEmailAndPassword,
        GoogleAuthProvider,
        FacebookAuthProvider,
        signInWithPopup,
    } from "firebase/auth";

    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const isLoading = ref(false);

    const props = defineProps({
      selectedPrice: String,
      showModal: Boolean,
    });
    
    const signUp = () => {
      isLoading.value = true;
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email.value, password.value)
          .then(() => {
              subscribeCustomer();
          })
          .catch((err) => {
              console.log(err.message)
          })
    };

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

    const signInWithGoogle = () => {
        
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) => {
                subscribeCustomer();
            })
            .catch((error) => {
                console.log(error.message)
            })
    };

    const signInWithFacebook = () => {
        props.showModal = false;
        const provider =  new FacebookAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) =>  {
              subscribeCustomer();
            })
    };
</script>

<template>
  <Modal size="lg" v-if="showModal" @close="showModal = !showModal" persistent>
    <template #header>
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
        <p class="text-sm text-center">Register with Emal and Password</p>
        <div class="my-2">
          <label for="email" class="block mb-2 text-sm font-medium">
            Email</label>
          <input v-model="email" type="email" id="email" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Enter a valid email">
        </div>
        <div class="mb-2">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password</label>
          <input v-model="password" type="password" id="password" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Enter a password">
        </div>
        <button :disabled="!email || !password" :class="(!email || !password) || isLoading ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'" @click="signUp" class="w-full py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
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
      <div class="grid grid-cols-2 gap-4">
        <button  @click="signInWithFacebook" class="flex text-black items-center justify-center w-full py-2 my-3 bg-transparent border-gray-300">
          <img src="/facebook-logo.svg" class="w-5" alt="">
          <b class="ml-2">Facebook</b>
        </button>
        <button @click="signInWithGoogle" class="flex text-black items-center justify-center w-full py-2 my-3 bg-transparent border-gray-300 ">
          <img src="/google-logo.svg" class="w-5 " alt="">
          <b class="ml-2">Google</b>
        </button>
      </div>
    </template>
  </Modal>
</template>