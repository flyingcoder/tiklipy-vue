<script setup>

</script>
<template>
    <!-- bg-[#646cff17] -->
    <div class="bg-white rounded-lg sm:px-4 py-6">
        <div class="text-black mb-10 px-4">
            <div class="text-3xl color-black font-semibold pb-2 w-fit">Address</div>
            <div class="text-base sm:flex pb-1">
                <div class="font-semibold ">Billing Address: &nbsp;&nbsp;</div>
                <div class="font-light w-fit">123, Main St, San Francisco, CA, 66801</div>
            </div>
            <div class="text-base sm:flex pb-4">
                <div class="font-semibold">Mailing Address: &nbsp;&nbsp;</div>
                <div class="font-light">Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</div>
            </div>
            <button class="transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#646cffa6] hover:bg-secondary-color border-0 py-1 px-3">
                <a href="#" class=" !text-white text-sm font-regular ">Change address</a>
            </button>
           
        </div>
        <div class="shadow-md shadow-[#646cff17] border border-[#646cff17] rounded-md mx-4">
            <div class="px-2 sm:px-6 py-4">
                <h2 class="font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 text-black font-bold text-xl">Transactions</h2>
                <p class="mt-1 text-md font-normal text-gray-500 dark:text-gray-400">Effortlessly Track and Manage Transactions with Our Intuitive System.</p>
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
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Expense
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b border-[#646cff17] dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Monthly Payment
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                08/14/2023
                            </td>
                            <td class="px-6 py-4">
                                Active
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b border-[#646cff17] dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Monthly Payment
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                09/14/2023
                            </td>
                            <td class="px-6 py-4">
                                Active
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800 border-[#646cff17]">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Monthly Payment
                            </th>
                            <td class="px-6 py-4">
                                010/14/2023
                            </td>
                            <td class="px-6 py-4">
                                Active
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>