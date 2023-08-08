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

    defineProps({
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

            //if(url) window.location.assign(url);

            router.push('dashboard');
        });
    }

    const signInWithGoogle = () => {
        props.showModal = false;
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) => {
                console.log(res.user);
                router.push('dashboard')
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
                console.log(res.user);
                router.push('dashboard')
            })
    };
</script>

<template>
    <Modal size="lg" v-if="showModal" @close="showModal = !showModal">
      <template #header>
        <div class="w-full">
          <h2 class="w-full text-2xl text-center">Account Registration</h2>
          <p class="text-lg text-center">
            Just a few more step to greatness...
          </p>
        </div>
      </template>
      <template #body>
        <div class="items-center justify-center w-full">
          <p class="mt-4 text-sm text-center">Register with Emal and Password</p>
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
          <button :disabled="!email || !password" :class="(!email || !password) || isLoading ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'" @click="signUp" class="w-full px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            {{ isLoading ? "Loading..." : "Register" }}
          </button>
        </div>
        <div class="inline-flex items-center justify-center w-full">
            <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
            <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
        </div>
        <div class="flex justify-center mt-2 space-x-2">
            <button disabled @click="signInWithFacebook" class="flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded cursor-not-allowed hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50">
                <span class="sr-only">Facebook</span>
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v3h-2V4c0-.6.4-1 1-1h2V0h-3c-2.2 0-4 1.8-4 4v3H6v3h2v8h4V10h2l1-3h-3V4h2z"/></svg>
                Facebook
            </button>
            <button @click="signInWithGoogle" class="flex items-center justify-center px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-opacity-50">
                <span class="sr-only">Google</span>
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm5.7 10.7h-2.6V8.1h-2V10.7h-2.6v2.1h2.6v2.6h2v-2.6h2.6V10.7z"/></svg>
                Google
            </button>
        </div>
      </template>
    </Modal>
</template>