<script setup>

</script>

<template>
    <div class="flex items-center justify-center pt-20 max-md:px-3  m-auto mb-10">
        <div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  text-center max-md:px-3">
            <img src="Thank-you.gif" alt="" class=" m-auto mt-10">\
            <div class="max-w-[40rem] m-auto mb-10">
                <div class="mb-10">
                    <h1 class="text-main-color max-xs:text-2xl text-4xl  lg:text-5xl text-black font-bold mb-5">Best decession ever!</h1>
                    <p class="text-black">Dear valued customer,</p>
                    <p class="text-black ">We want to express our sincere gratitude for your recent payment. Your support is crucial to our business, and we are delighted to have you as a customer.</p>
                </div>
                <div class="relative overflow-x-auto mb-10">
                    <div class="max-sm:px-2 py-4">
                    <h2 class="font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800 text-black font-bold text-xl">Transaction Details:</h2>
                    </div>
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md shadow-[#646cff17] border border-[#646cff17] rounded-md">
                        <thead class="max-sm:hidden text-xs text-gray-700 uppercase bg-[#646cff17] dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Order Number:
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Payment Amount:
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Payment Date
                                </th>
                            </tr>
                        </thead>
                        <tbody class="max-sm:hidden">
                            <tr class="bg-white border-b border-[#646cff17] dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4">
                                    #123456
                                </td>
                                <td class="px-6 py-4">
                                    $50.00
                                </td>
                                <td class="px-6 py-4">
                                    August 15, 2023
                                </td>
                            </tr>
                        </tbody>
                        <tbody class="sm:hidden">
                            <tr class="bg-white border-b border-[#646cff17] dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4">
                                    Order Number:
                                </td>
                                <td class="px-6 py-4">
                                    #123456	
                                </td>
                            </tr>
                        </tbody>
                        <tbody class="sm:hidden">
                            <tr class="bg-white border-b border-[#646cff17] dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4">
                                    Payment Amount:
                                </td>
                                <td class="px-6 py-4">
                                    $50.00
                                </td>
                            </tr>
                        </tbody>
                        <tbody class="sm:hidden">
                            <tr class="bg-white border-b border-[#646cff17] dark:bg-gray-800 dark:border-gray-700">
                                <td class="px-6 py-4">
                                    Payment Date:
                                </td>
                                <td class="px-6 py-4">
                                    August 15, 2023
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-black text-start">
                    <p>Your payment has been successfully processed, and your order is now confirmed. You can expect the following:</p>
                    <ul class="list-disc ml-[1.5rem] mb-5">
                        <li>An email confirmation will be sent to you shortly.</li>
                        <li>Your purchased items will be shipped within the next 2 business days.</li>
                        <li>If you have any questions or concerns, please feel free to <a href="/contact">contact us</a>.</li>
                    </ul>
                    <p >Once again, Thank nya for choosing our products/services. We look forward to serving you in the future.</p>
                </div>
                <router-link :to="{name:'dashboard'}">
                    <button type="button" class="transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-medium rounded-lg text-lg px-5 py-2.5 inline-flex justify-center text-center">
                        Go to Dashboard 
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>