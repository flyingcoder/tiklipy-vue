<script setup>
    import { onMounted, ref } from "vue";
    import SignUp from './../views/sign/Up.vue';
    import { useRouter } from 'vue-router';
    import { getFirestore, getDocs, where, query, collection, orderBy,} from "firebase/firestore";

    const router = useRouter();
    const products = ref([]);
    const isLoading = ref(false);
    const showRegister = ref(false);
    const selectedPrice = ref();
    const user = ref();

    onMounted(async () => {
        fetchProducts();
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
        const productsRes = await getDocs(
            query(
                collection(
                    getFirestore(), 
                    "products"
                ), 
                where("active", "==", true)
            )
        );

        productsRes.forEach( async (product) => {
            const priceRes = await getDocs(
                query(
                    collection(
                        getFirestore(),
                        "products",
                        product.id,
                        "prices"
                    ),
                    orderBy("interval", "asc")
                )
            );

            products.value.push({
                id: product.id,
                ...product.data(),
                prices: priceRes.docs.map( (price) => {
                    return {
                        id: price.id,
                        ...price.data(),
                    };
                })
            });
        });
    };
</script>

<template>
    <SignUp :show-modal="showRegister" :selected-price="selectedPrice"/>
    <div class="mt-10 text-center">
        <h2 class="text-4xl font-semibold text-center text-main-color">Teacher-Friendly Pricing</h2>
        <p class="mt-8 text-xl text-center text-black text-gray-700 mb-11 mx-4">Elevate efficiency and enhance work quality, all for the price of two cokes</p>
        
        <div v-for="(product, index) in products" :key="index + '-product'" 
            class="flex flex-wrap items-stretch justify-center mx-auto sm:my-3 md:my-10 ">
            <div v-for="(price, priceIndex) in product.prices"
                :key="priceIndex + '-price'"
                class="w-full max-w-sm p-4 mx-4 bg-white border border-gray-200 rounded-lg shadow max-midlg:mb-10 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-gray-500 capitalize dark:text-gray-400">
                    {{ price.interval }}ly Plan
                </h5>
                <div class="flex items-baseline justify-center text-gray-900 dark:text-white">
                    <span class="text-3xl font-semibold">
                        $
                    </span>
                    <span class="text-5xl font-extrabold tracking-tight">
                        {{ price.unit_amount / 100 }}
                    </span>
                    <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                        /{{ price.interval }}ly
                    </span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="items-center text-lg text-gray-500 max-xs:text-base">
                        Start with a Free Month
                    </li>
                    <li class="flex items-center py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            Effortless Lesson Planning
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            Dynamic Assessment Generation
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
                            Dedicated Customer Support
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-main-color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 max-xs:text-sm dark:text-gray-400">
                            Cancel Anytime
                        </span>
                    </li>
                </ul>
                <button :class="isLoading ? 'bg-gray-500 hover:bg-gra-500 cursor-not-allowed' : ' hover:bg-secondary-color border-0'" 
                    :disabled="!price.id || isLoading" @click="createSub(price.id)" type="button" 
                    class="transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#646cffa6] text-white focus:ring-4 focus:outline-none focus:ring-main-color dark:focus:ring-main-color font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center w-full text-center">
                    {{ isLoading ? "Loading..." : "Get 1 Month Free Now!" }}
                </button>
            </div>
        </div>
    </div>
</template>