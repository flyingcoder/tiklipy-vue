<script setup>
    import { ref } from "vue";
const hasError = ref(false);

const generateDiscount = () => {
    hasError.value = (true);
    setTimeout(() => {
        hasError.value = (false);
    }, 2000);
    console.log(hasError);
}
</script>

<template>
    <div class="flex items-center justify-center pt-20 m-auto mb-10 max-md:px-3">
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-md:px-3">
            <img src="/thank-you.gif" alt="" class="m-auto mt-10 ">
            <div class="max-w-[40rem] m-auto sm:mx-10 mb-10">
                <div class="text-black">
                    <h2 class="mb-5 text-xl font-bold text-center sm:text-3xl sm:mb-10 text-main-color">Subscription Cancellation Confirmation</h2>

                    <p class="mb-5 text-center">Your satisfaction is our priority, and we're here to ensure a smooth process. We understand that circumstances change, and we appreciate the time you've spent with us.</p>
                    
                    <p class="mb-5 text-center">As a token of our appreciation for considering our service, we're delighted to offer you an exclusive 10% discount on any future subscription you may choose.</p>

                    <h3 class="text-xl font-bold text-md">Why Did You Decide to Cancel?</h3>

                    <p class="mb-5">Your feedback is incredibly valuable to us. If you're open to sharing your reasons for canceling, we're all ears. Your insights will help us improve and provide a better experience for all our users.</p>

                    <div class="flex items-center mb-10">
                        <button @click="generateDiscount" class="flex items-center !py-1 !px-3  transition duration-240 rounded-md bg-main-color hover:shadow-md hover:shadow-[#969cf9] hover:bg-secondary-color border-0 w-fit bg-main-color text-white focus:ring-4 focus:outline-none focus:ring-secondary-color dark:focus:ring-main-color font-medium rounded-lg text-lg px-5 py-2.5 "> 
                            <svg class="w-[1.5rem] mr-2 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13.583 5.445h.01M8.86 16.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 10.31 1l5.734.007A1.968 1.968 0 0 1 18 2.983v5.5a.994.994 0 0 1-.316.727l-7.439 7.5a.975.975 0 0 1-1.385.001Z"/>
                            </svg>
                            Get discount
                        </button>
                        <p :class="hasError?'visible':'hidden'" class="ml-5 text-black">Discount Code Copied!</p>
                    </div>
                    
                    <h3 class="mb-1 text-xl font-bold text-md">Next Steps</h3>
                    <ul class="mb-5 ml-5 list-disc">
                        <li><strong>Personalized Assistance:</strong> Have questions or need assistance? Our friendly support team is ready to help. Contact us at [provide contact details] for any guidance you may need.</li>
                        <li><strong>Reconsider with a Discount:</strong> Should you decide to give us another try, your 10% discount awaits, making your subscription even more rewarding.</li>
                        <li><strong>Explore More:</strong> While you're here, consider exploring the array of features and benefits we offer. We're continually enhancing our services to meet your needs.</li>
                    </ul>

                    <p class="mb-5">We truly value your time and consideration. Your contentment is of utmost importance, and we're committed to making your experience with us exceptional.</p>

                    <p class="text-center">Thank you for considering us, and we hope to have the opportunity to serve you again.</p>
                </div>
            </div>
        </div>
    </div>
</template>