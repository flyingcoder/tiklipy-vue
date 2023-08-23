<script setup>
    import { useAuthStore } from '../../stores/auth';
    import { onMounted } from "vue"

    const authStore = useAuthStore();
    
    const buyStar = (amount) => {

    }

    const fetchStarTransaction = () => {

    }

    onMounted(() => {

    })
</script>
<template>
    <!-- bg-[#646cff17] -->
    <div class="bg-white rounded-lg sm:px-4 py-6">
        <div class="text-black mb-3 px-4">
            <div class="capitalize text-3xl color-black font-semibold pb-2 w-fit">
                {{ authStore.displayName }}
            </div>
            <!-- <div class="text-base sm:flex pb-1">
                Get more stars.
            </div>
            <div class="text-base sm:flex pb-4">
                <button @click="buyStar(10)" class="bg-purple-500 text-white m-1">
                    Buy 10 ⭐
                </button>
                <button @click="buyStar(50)" class="bg-purple-500 text-white m-1">
                    Buy 50 ⭐
                </button>
                <button @click="buyStar(150)" class="bg-purple-500 text-white m-1">
                    Buy 150 ⭐
                </button>
                <button @click="buyStar(500)" class="bg-purple-500 text-white m-1">
                    Buy 500 ⭐
                </button>
            </div> -->
        </div>
        <div class="shadow-md shadow-[#646cff17] border border-[#646cff17] rounded-md mx-4">
            <div class="px-2 sm:px-6 py-4">
                <h2 class="text-left bg-white dark:text-white dark:bg-gray-800 text-black font-bold text-xl">
                    Transactions
                </h2>
                <p class="mt-1 text-md font-normal text-gray-500 dark:text-gray-400">
                    <!-- Where did your stars go? -->
                </p>
            </div>
            <div class="relative overflow-x-auto ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-[#646cff17] dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Time Record
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Expense
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Balance
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b border-[#646cff17] dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Generated lesson
                            </th>
                            <td class="px-6 py-4">
                                08/14/2023
                            </td>
                            <td class="px-6 py-4">
                                <!-- -40 <span class="animate__rotateOut">⭐</span> -->
                            </td>
                            <td class="px-6 py-4">
                                <!-- 100 ⭐ -->
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>