<script setup>
 import { onMounted, ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import SignUp from './sign/Up.vue';
  import SignIn from './sign/In.vue';
  

  const router = useRouter();
  const isLoggedIn = ref(false);

  let auth;
  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      isLoggedIn.value = (user) ? true : false; 
    });
  });

  const handleSignOut =  () => {
    signOut(auth).then(() => {
      router.push('sign-in');
    })
  };
</script>

<template>
    
    <header>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 mx-14">
          <div class="flex flex-wrap items-center justify-between mx-auto px-4 py-6">
              <div class="flex items-center md:order-3">
                <a class="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">&nbsp;</a>
                <a data-modal-target="signin-modal" data-modal-toggle="signin-modal" class="cursor-pointer text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
                <a data-modal-target="signup-modal" data-modal-toggle="signup-modal" class="cursor-pointer text-white bg-main-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
                <a href="#" class="text-white bg-main-color focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="handleSignOut" v-if="isLoggedIn">Logout</a>
                <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
              </div>
              
              <div class="md:order-2">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src="/public/tiklipy-logo-indigo.png" class="h-12 mr-3" alt="Flowbite Logo" />
                </a>
              </div>
              
              <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                  <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-12 md:mt-0 text-lg">
                      <li>
                          <a href="#" class="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Features</a>
                      </li>
                      <li>
                          <a href="/pricing" class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                      </li>
                      <li>
                          <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center bg-transparent justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                              About <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
                          </button>
                          <div id="mega-menu-dropdown" class="absolute z-10 hidden w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                              <div class="p-4">
                                  <ul class="space-y-4">
                                      <li>
                                          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                              Blog
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                              Post
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                              About
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  </header>
  <SignUp />
    <SignIn />
</template>