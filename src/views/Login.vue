<script setup>
    import 'sweetalert2/dist/sweetalert2.min.css';
    import Swal from 'sweetalert2';
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";
    import { useLoaderStore } from "../stores/loader";
    import { useAuthStore } from "../stores/auth";
    import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const isLoading = ref(false);
    const hasError = ref(false);
    const wrongCred = ref(false);
    const loaderStore = useLoaderStore();

    const authStore = useAuthStore();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider =  new FacebookAuthProvider();

    onMounted(() => {
        
    });

    const loginVia = async (provider) => {
        loaderStore.toggle();
        const success = await authStore.loginVia(provider);
        if (!success) googleLoginFailed(); else router.push({ name: 'dashboard' });
        loaderStore.toggle();
    }

    const login = async () => {
        loaderStore.toggle();
        const success = await authStore.login(email.value, password.value);
        if (!success) loginFail(); else router.push({ name: 'dashboard' });
        loaderStore.toggle();
    }

    const loginFail = () => {
        Swal.fire({
            html: `
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <img src="/Invalid-error-bongo-cat.gif" width="" height="" alt="Image 2">
                    </div>
                </div>
                <h2 class="swal2-title !p-0 text-black text-lg text-red-500" id="swal2-title" style="display: block;">Nya-oh! Make sure your email and password are right, meow.</h2> 
            `,
            width: 600,
            padding: '',
            margin:'',
            color: '#716add',
            allowOutsideClick: false,
            confirmButtonText: 'Okay',
            backdrop: `
                rgba(0, 0, 123, 0.4)
                left top
                no-repeat
            `
        })
    };

    const googleLoginFailed = () => {
        Swal.fire({
            html: `
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <img src="Invalid-error-bongo-cat.gif" width="" height="" alt="Image 2">
                    </div>
                </div>

                <h2 class="swal2-title !p-0 text-black text-lg text-red-500" id="swal2-title" style="display: block;">Nya-oh! We've encountered a slight hiccup in verifying your email and password, meow. Please bear with us or give a little meow for assistance.</h2> 
            `,
            width: 600,
            padding: '',
            margin:'',
            color: '#716add',
            allowOutsideClick: false,
            confirmButtonText: 'Okay',
            backdrop: `
                rgba(0, 0, 123, 0.4)
                left top
                no-repeat
            `
        })
    };
</script>

<template>
    <div class="flex items-center justify-center pt-20">
        <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:w-2/5 sm:w-96">
            <div class="w-full px-8 py-6 text-gray-200 bg-gray-800 rounded-t-lg">
                <router-link :to="{ name: 'home' }">
                    <img class="w-32 mx-auto mb-4" src="tiklipy-logo-indigo.png" alt="tiklipy logo indigo color">
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
                        <input type="email" v-model="email" id="email" :class="hasError||wrongCred ? 'border-red-500':''"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color" placeholder="Enter a valid email">
                    </div>
                </div>
                <div class="mb-2">
                    <div>
                        <label for="password" class="block mb-1 text-sm font-semibold text-gray-700 dark:text-white">Password</label>
                        <input type="password" v-model="password" id="password" :class="hasError||wrongCred ? 'border-red-500':''" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main-color focus:border-main-color block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-main-color dark:focus:border-main-color" placeholder="Enter a password">
                    </div>
                </div>
                <button @click="login"  :disabled="!email || !password" :class="[(!email || !password) || isLoading ? 'cursor-not-allowed !bg-gray-500 hover:bg-gray-500' : 'bg-main-color hover:bg-secondary-color border-0', hasError?'animate__hinge z-10':'']" class="w-full px-4 py-2 mt-2 font-bold text-white rounded bg-main-color hover:bg-secondary-color">
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
                <button v-if="false" class="hover:!border-secondary-color flex items-center justify-center w-full py-2 mt-3 bg-transparent border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="facebook-logo.svg" class="w-5" alt="">
                    <b class="ml-2">Facebook</b>
                </button>
            </div>
            <div class="flex px-6 pb-6 text-black">
                <button @click="loginVia(googleProvider)" class="hover:!border-secondary-color flex items-center justify-center w-full py-2 mt-3 bg-transparent border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="google-logo.svg" class="w-5" alt="">
                    <b class="ml-2">Google</b>
                </button>
            </div>

           
        </div>
    </div>

</template>