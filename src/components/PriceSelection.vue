<script setup>
    import { onMounted, ref } from "vue";
    import SignUp from './../views/sign/Up.vue';
    import { useRouter } from 'vue-router';
    import expressModel from "../models/express";
    import Swal from 'sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';
    import { useAuthStore } from "../stores/auth";


    const router = useRouter();
    const products = ref([]);
    const isLoading = ref(false);
    const showRegister = ref(false);
    const backEndModel = new expressModel();
    const selectedPrice = ref();
    const email = ref('');
    const user = ref();
    const authStore = useAuthStore();

    onMounted(async () => {
        await fetchProducts();
    });

    const createSub = (price_id) => {
        if(user.value) {
            router.push({ name: 'account' })
        } else {
            isLoading.value = true;
            showRegister.value = true;
            selectedPrice.value = price_id;
        }
    };

    const fetchProducts = async () => {
        const productsRes = await backEndModel.getStripeProduct();
        products.value = productsRes.data;
    };

    const emailLogin = () => {
       if (!authStore.user) {
            Swal.fire({
                title: 'Email Address',
                input: 'email',
                inputPlaceholder: 'Example@email.xxx',
                customClass: {
                    title: 'text-main-color',
                    input: 'text-gray-900 font-semibold border border-gray-300 rounded-full bg-white focus:ring-transparent focus:border-main-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-transparent'
                }, 
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: (email) => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                        if (email === 'example@email.com') {
                            Swal.fire.showValidationError(
                            'This email is already taken.'
                            )
                        }
                        resolve()
                        }, 2000)
                    })
                },
                allowOutsideClick: false
            }).then((result) => {
                if (result.value) {
                    Swal.fire({
                    icon: 'success',
                    title: 'Thank You',
                    html: 'Email: ' + result.value
                    })
                    email.value = result.value
                    backEndModel.addNewsletter(email.value);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    console.log('User canceled the action');
                }
            });
        } else {
            router.push({ name: 'dashboard' });
        }
    }
</script>

<template>
    <SignUp :show-modal="showRegister" :selected-price="selectedPrice"/>
    <div class="mt-10 text-center">
        <h2 class="mb-3 text-3xl font-semibold text-center uppercase md:mb-10 md:text-5xl text-main-color">Easy & Very Affordable Pricing</h2>
        <p class="mx-4 mt-8 text-xl text-center text-gray-700 mb-11">At a wallet-friendly cost, become the teacher every student deserve - without breaking the bank.</p>
        
        <div v-for="(product, index) in products" :key="index + '-product'" 
            class="flex flex-wrap items-stretch justify-center mx-auto my-3 md:my-10 ">
            <div v-for="(price, priceIndex) in product.prices"
                :key="priceIndex + '-price'"
                class="w-full max-w-sm p-4 mx-4 my-3 bg-white border border-gray-200 rounded-lg shadow max-midlg:mb-10 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-gray-500 capitalize dark:text-gray-400">
                    Basic Plan
                </h5>
                <p class="relative -m-3 text-xl top-2 left-7">399</p>
                <div class="flex items-baseline justify-center text-grey-600 dark:text-white">
                    <span class="text-2xl font-semibold text-gray-500">
                        ₱
                    </span>
                    <span class="text-5xl font-extrabold tracking-tight text-red-500 line-through">
                        {{ price.unit_amount - 501 }}
                    </span>
                    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                        /{{ price.interval }}ly
                    </span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="items-center text-lg text-gray-500 max-xs:text-base">
                        After 7-Day Free Trial
                    </li>
                    <li class="flex items-center py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            Get a whole month access for free
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            50+ more teaching tools
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            Unlimited content generation
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            Save, print and manage your work
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            Secure banking/No hidden fees
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            Cancel anytime
                        </span>
                    </li>
                </ul>
                <button type="button" @click="emailLogin()" class="uppercase transition uppercase duration-240 hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-semibold rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                    {{ authStore.user ? 'GO TO PORTAL' : 'REQUEST EARLY ACCESS' }}
                </button>
            </div>
        </div>
    </div>
</template>