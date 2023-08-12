<script setup>

</script>
<template>
    <div class="text-black pb-7 px-4">
        <div class="text-3xl color-black font-semibold pb-2">Address</div>
        <div class="text-base flex pl-2 pb-1">
            <div class="font-semibold">Billing Address: &nbsp;&nbsp;</div>
            <div class="font-light">123, Main St, San Francisco, CA, 66801</div>
        </div>
        <div class="text-base flex pl-2 pb-1">
            <div class="font-semibold">Mailing Address: &nbsp;&nbsp;</div>
            <div class="font-light">Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678</div>
        </div>
        <a href="#" class="pl-2 text-mail-color text-lg font-light">Change address</a>
    </div>
    <div class="relative overflow-x-auto shadow-md mx-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                <h2 class="text-xl">Transactions</h2>
                <p class="mt-1 text-md font-normal text-gray-500 dark:text-gray-400">Effortlessly Track and Manage Transactions with Our Intuitive System.</p>
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                <tr class="bg-white dark:bg-gray-800">
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

</template>