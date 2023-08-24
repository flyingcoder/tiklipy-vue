<script setup>
    import 'sweetalert2/dist/sweetalert2.min.css';
    import Swal from 'sweetalert2';
    import { ref } from "vue";
    import { Modal } from 'flowbite-vue';
    import { useAuthStore } from "../../stores/auth";
    import { useLoaderStore } from "../../stores/loader";
    import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
    import { useUserStore } from "../../stores/user";
    import { onSnapshot } from "firebase/firestore";
    import { useRouter } from "vue-router"

    const router = useRouter();

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
    const userStore = useUserStore();

    const getPaymentUrl = async () => {
        const doc = await userStore.stripePay(props.selectedPrice)
        onSnapshot(doc, (snap) => {
            const { error, url } = snap.data();
            if(error) {
              console.error("Stripe pay snapshot error:", error);
            }
            if(url) location.assign(url);
        });
        setTimeout(() => {
          loaderStore.isLoading = false
        }, 10000);
    }

    const register = async () => {
        loaderStore.isLoading = true;
        const success = await authStore.register(email.value, password.value);
        if(success) {
          if(success === 'email-already-in-use') {
            //alert jr email is already in use add button want to login?
            emailTaken();
            loaderStore.isLoading = false;
          } else {
            await getPaymentUrl();
          }
        } else {
          //alert jr error message
          wrongEmailPassword();
          loaderStore.isLoading = false;
        }
    }

    const registerVia = async (provider) => {
        loaderStore.isLoading = true;
        const success = await authStore.loginVia(provider);
        if(success) {
          await getPaymentUrl();
        } else {
          //alert jr error message
          googleRegesterFail();
          console.log("Error in registration");
          loaderStore.toggle();
        }
    }

    const googleRegesterFail = () => {
        Swal.fire({
            html: `
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <img src="/Invalid-error-bongo-cat.gif" width="" height="" alt="Image 2">
                    </div>
                </div>

                <h2 class="swal2-title !p-0 text-black text-xl text-red-500" id="swal2-title" style="display: block;">Nya-oh! We've encountered a slight hiccup</h2> 
                <p class="swal2-title !p-0 text-black text-sm text-black" id="swal2-title" style="display: block;">We've encountered a problem in verifying your email and password, meow. Please bear with us or give a little meow for assistance.</p> 
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
    const emailTaken = () => {
        Swal.fire({
            html: `
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <img src="/Invalid-error-bongo-cat.gif" width="" height="" alt="Image 2">
                    </div>
                </div>

                <h2 class="swal2-title !p-0 text-black text-xl text-red-500" id="swal2-title" style="display: block;">Nya-oh! Email Already Taken</h2> 
                <p class="swal2-title !py-0 px-7 text-black text-sm text-black" id="swal2-title" style="display: block;">Meow, that email's already claimed by someone. Want to log in with it, meow?</p> 
            `,
            width: 600,
            padding: '',
            color: '#716add',
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonText: 'Log in',
            backdrop: `
                rgba(0, 0, 123, 0.4)
                left top
                no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                router.push({ name: 'login' })
            }
        });
    };

    const wrongEmailPassword = () => {
        Swal.fire({
            html: `
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <img src="/Invalid-error-bongo-cat.gif" width="" height="" alt="Image 2">
                    </div>
                </div>

                <h2 class="swal2-title !p-0 text-black text-xl text-red-500" id="swal2-title" style="display: block;">Nya-oh! Email and Password Hiccups</h2> 
                <p class="swal2-title !py-0 px-7 text-black text-sm text-black" id="swal2-title" style="display: block;">Your email seems a bit fishy or your password is a smidge too short, please take a moment to make sure everything is in order, nya!</p> 
            `,
            width: 600,
            padding: '',
            color: '#716add',
            allowOutsideClick: false,
            confirmButtonText:'Okay',
            backdrop: `
                rgba(0, 0, 123, 0.4)
                left top
                no-repeat
            `
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
      <!-- <div class="items-center justify-center w-full text-black">
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
      </div> -->
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