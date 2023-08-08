<script setup>
    import { ref, defineProps, onMounted } from "vue"
    import { Modal } from "flowbite"
    import { useRouter } from "vue-router"
    import { getAuth, 
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        FacebookAuthProvider,
        signInWithPopup, 
    } from "firebase/auth";

    const $targetEl = document.getElementById('modalEl');

    // options with default values
    const options = {
        placement: 'bottom-right',
        backdrop: 'dynamic',
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        closable: true,
        onHide: () => {
            console.log('modal is hidden');
        },
        onShow: () => {
            console.log('modal is shown');
        },
        onToggle: () => {
            console.log('modal has been toggled');
        }
    };

    const modal = new Modal($targetEl, options)
    modal.show();

    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const errMsg = ref();
    const isLoading = ref(false);
    
    const signIn = async () => {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                console.log(auth.currentUser)
                router.push('dashboard')
            })
            .catch(() => {
                errMsg.value = "Email or password was incorrect."
            }).finally(() => isLoading.value = false );
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) => {
                console.log(res.user);
                router.push('dashboard')
            })
            .catch((error) => {
                console.log(error.message)
            }).finally(() => isLoading.value = false );
    };

    const signInWithFacebook = () => {
        const provider =  new FacebookAuthProvider();
        signInWithPopup(getAuth(), provider)
            .then((res) =>  {
                console.log(res.user);
                router.push('dashboard')
            }).finally(() => isLoading.value = false );
    };
</script>

<template>
    <div id="modalEl" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <img class="w-32 m-auto" src="/tiklipy-logo-indigo.png" alt="tiklipy logo indigo color">
                    <h2 class="text-2xl text-center">Sign in to Start!</h2>
                    <p class="text-lg text-center">
                        Start generating fantastic lessons!
                    </p>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <div class="items-center justify-center w-full">
                        <p class="text-sm text-center">Login with Emal & Password</p>
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
                    <button  @click="signIn" :disabled="!email || !password" :class="(!email || !password) || isLoading ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'" class="w-full py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                        {{ isLoading ? "Loading..." : "Login" }}
                    </button>
                </div>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                        or
                    </span>
                </div>
                <p class="text-center">Sign in with</p>
                <button  @click="signInWithFacebook" class="flex items-center justify-center w-full py-2 my-3 bg-transparent border-gray-300 hover:bg-indigo-200 hover:border-s-gray-100">
                    <img src="/facebook-logo.svg" class="w-5" alt="">
                    <b class="ml-2">Facebook</b>
                </button>
                <button @click="signInWithGoogle" class="flex items-center justify-center w-full py-2 bg-transparent border-gray-300 hover:bg-indigo-200 hover:border-s-gray-100">
                    <img src="/google-logo.svg" class="w-5 " alt="">
                    <b class="ml-2">Google</b>
                </button>
                </div>
            </div>
        </div>
    </div>
</template>