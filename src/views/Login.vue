<script setup>
    import 'animate.css';
    import { ref, defineProps } from "vue"
    import { useRouter } from "vue-router"
    import { getAuth, 
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        FacebookAuthProvider,
        signInWithPopup, 
    } from "firebase/auth"

    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const errMsg = ref();
    const isLoading = ref(false);
    const hasError = ref(false)
    const wrongCred = ref(false)
    
    const signIn = async () => {
        isLoading.value = true;
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                console.log(auth.currentUser)
                router.push({ name: 'dashboard' });
            })
            .catch((error) => {
                console.log(error.message)
                hasError.value = true
                wrongCred.value = true
            }).finally(() => {
                isLoading.value = false ;
                setTimeout(() => {
                    hasError.value = false;
                }, 2000);
            });
    };

    const signInWithGoogle = () => {
        isLoading.value = true;
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) => {
                console.log(res.user);
                router.push({ name: 'dashboard' })
            })
            .catch((error) => {
                console.log(error.message)
            })
            .finally(() => isLoading.value = false )
    };

    const signInWithFacebook = () => {
        isLoading.value = true;
        const provider =  new FacebookAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) =>  {
                console.log(res.user);
                router.push({ name: 'dashboard' })
            }).finally(() => isLoading.value = false )
    };
</script>

<template>
    <div class="flex items-center justify-center pt-20">
        <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:w-2/5 sm:w-96">
            <div class="w-full px-8 py-6 text-gray-200 bg-gray-800 rounded-t-lg">
                <router-link :to="{ name: 'home' }">
                    <img class="w-32 mx-auto mb-4" src="/tiklipy-logo-indigo.png" alt="tiklipy logo indigo color">
                </router-link>
                <h2 class="w-full text-2xl text-center font-semibold">Sign in to Start!</h2>
                <p class="text-lg text-center font-semibold">
                    Start generating fantastic lessons!
                </p>
            </div>

            <div class="items-center justify-center w-full px-6 text-black">
                <p :class="hasError ? 'hidden':'visible'" class="mt-4 text-sm text-center font-semibold">Login with Email & Password</p>
                <p :class="hasError ? 'visible':'hidden'" class="mt-4 text-sm text-center font-semibold text-red-500">Invalid Email or Password</p>
                <div class="my-2">
                    <div>
                        <label for="email" class="block text-sm font-semibold mb-1 text-gray-700 dark:text-white">Email</label>
                        <input type="email" v-model="email" id="email" :class="hasError||wrongCred ? 'border-red-500':''"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a valid email">
                    </div>
                </div>
                <div class="mb-2">
                    <div>
                        <label for="password" class="block text-sm font-semibold mb-1 text-gray-700 dark:text-white">Password</label>
                        <input type="password" v-model="password" id="password" :class="hasError||wrongCred ? 'border-red-500':''" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a password">
                    </div>
                </div>
                <button @click="signIn"  :disabled="!email || !password" :class="[(!email || !password) || isLoading ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : 'bg-blue-500 hover:bg-blue-700', hasError?'animate__hinge z-10':'']" class="w-full px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    {{ isLoading ? "Loading..." : "Login" }}
                </button>
            </div>
            <div class="inline-flex items-center justify-center w-full px-6">
                <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or
                </span>
            </div>
            <p class="text-center text-black font-semibold">Sign in with</p>
            <div class="px-6 flex text-black">
                <button @click="signInWithFacebook" class="flex items-center justify-center w-full py-2 mt-3 bg-transparent focus:border-gray-300 focus:outline-none border-gray-300">
                    <img src="/facebook-logo.svg" class="w-5" alt="">
                    <b class="ml-2">Facebook</b>
                </button>
            </div>
            <div class="px-6 pb-6 flex text-black">
                <button @click="signInWithGoogle" class="flex items-center justify-center w-full py-2 mt-3 bg-transparent focus:border-gray-300 focus:outline-none border-gray-300">
                    <img src="/google-logo.svg" class="w-5" alt="">
                    <b class="ml-2">Google</b>
                </button>
            </div>

           
        </div>
    </div>

</template>