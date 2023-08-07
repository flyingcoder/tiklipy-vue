<script setup>
    import { onMounted, ref } from "vue";
    import {
        getFirestore,
        getDocs,
        where,
        query,
        collection,
        orderBy,
    } from "firebase/firestore";
    
    const products = ref([]);

    onMounted(() => {
        fetchProducts();
    });

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
            
            console.log(products);
        });
    };
</script>

<template>
    <div class="mt-10 text-center">
        <h2 class="my-4 text-4xl font-bold">Teacher-Friendly Pricing</h2>
        <p class="text-lg">Elevate efficiency and enhance work quality, all for the price of two cokes</p>
        
        <div v-for="(product, index) in products" :key="index + '-product'" 
            class="flex items-stretch w-4/6 mx-auto mt-10">
            <div v-for="(price, priceIndex) in product.prices"
                :key="priceIndex + '-price'"
                class="w-full max-w-sm p-4 mx-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-gray-500 capitalize dark:text-gray-400">
                    {{ price.interval }}ly Plan
                </h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
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
                    <li class="items-center text-lg text-gray-500">
                        After 7-Day Free Trial
                    </li>
                    <li class="flex items-center py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
                            Effortless Lesson Planning
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
                            Dynamic Assessment Generation
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
                            50+ more teaching tools
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
                            Dedicated Customer Support
                        </span>
                    </li>
                    <li class="flex py-2 space-x-3">
                        <svg class="flex-shrink-0 w-5 h-5 text-main-color dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        <span class="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
                            Cancel Anytime
                        </span>
                    </li>
                </ul>
                <button type="button" class="text-white bg-main-color hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center w-full text-center">Try Free for 7 Days!</button>
            </div>
        </div>
    </div>
    
</template>