<script setup>
    import { ref } from "vue"
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
    
    const email = ref("");
    const password = ref("");
    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    };

    const signInWithGoogle = () => {

    };

    const signInWithFacebook = () => {

    };
</script>

<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
        <div class="p-8 bg-white rounded shadow-md w-96">
            <h1 class="mb-4 text-2xl font-semibold">Register</h1>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input v-model="email" type="email" id="email" name="email" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input v-model="password" type="password" id="password" name="password" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <button @click="register" type="submit" class="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">
                    Register
                </button>
            <div class="mt-4">
                <p class="text-sm text-center text-gray-600">Or sign up using:</p>
                <div class="flex justify-center mt-2 space-x-2">
                    <button @click="signInWithFacebook" class="flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50">
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
            </div>
        </div>
    </div>
</template>