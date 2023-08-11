<script setup>
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";
    import { getCurrentUser, Auth } from "../plugins/firebase";
    import {
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        FacebookAuthProvider,
        signInWithPopup,
        signOut
    } from "firebase/auth"

    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const errMsg = ref();
    const isLoading = ref(false);
    const hasError = ref(false);
    const wrongCred = ref(false);

    onMounted(async () => {
        await getCurrentUser()
                .then((user) => {
                    if(user) {
                        router.push({ name: 'dashboard'})
                    } else {
                        signOut(user);
                    }
                });
    })
    
    const signIn = async () => {
        isLoading.value = true;
        await signInWithEmailAndPassword(Auth, email.value, password.value)
            .then((res) => {
                if(res.user.subscription) {
                    router.push({ name: 'dashboard' })
                } else {
                    signOut(Auth).then(() => {
                        router.push({ name: 'pricing' });
                    });
                }   
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
        signInWithPopup(Auth, provider)
            .then((res) => {
                router.go({name: 'dashboard'})
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
                <h2 class="w-full text-2xl font-semibold text-center">Sign in to Start!</h2>
                <p class="text-lg font-semibold text-center">
                    Start generating fantastic lessons!
                </p>
            </div>

            <div class="items-center justify-center w-full px-6 text-black">
                <p :class="hasError ? 'hidden':'visible'" class="mt-4 text-sm font-semibold text-center">Login with Email & Password</p>
                <p :class="hasError ? 'visible':'hidden'" class="mt-4 text-sm font-semibold text-center text-red-500">Invalid Email or Password</p>
                <div class="my-2">
                    <div>
                        <label for="email" class="block mb-1 text-sm font-semibold text-gray-700 dark:text-white">Email</label>
                        <input type="email" v-model="email" id="email" :class="hasError||wrongCred ? 'border-red-500':''"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a valid email">
                    </div>
                </div>
                <div class="mb-2">
                    <div>
                        <label for="password" class="block mb-1 text-sm font-semibold text-gray-700 dark:text-white">Password</label>
                        <input type="password" v-model="password" id="password" :class="hasError||wrongCred ? 'border-red-500':''" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a password">
                    </div>
                </div>
                <button @click="signIn"  :disabled="!email || !password" :class="[(!email || !password) || isLoading ? 'cursor-not-allowed !bg-gray-500 hover:bg-gray-500' : 'bg-main-color hover:bg-secondary-color', hasError?'animate__hinge z-10':'']" class="w-full px-4 py-2 mt-2 font-bold text-white rounded bg-main-color hover:bg-secondary-color">
                    {{ isLoading ? "Loading..." : "Login" }}
                </button>
            </div>
            <div class="inline-flex items-center justify-center w-full px-6">
                <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                or
                </span>
            </div>
            <p class="font-semibold text-center text-black">Sign in with</p>
            <div class="flex px-6 text-black">
                <button v-if="false" class="flex items-center justify-center w-full py-2 mt-3 bg-transparent border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="/facebook-logo.svg" class="w-5" alt="">
                    <b class="ml-2">Facebook</b>
                </button>
            </div>
            <div class="flex px-6 pb-6 text-black">
                <button @click="signInWithGoogle" class="flex items-center justify-center w-full py-2 mt-3 bg-transparent border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="/google-logo.svg" class="w-5" alt="">
                    <b class="ml-2">Google</b>
                </button>
            </div>

           
        </div>
    </div>

</template>