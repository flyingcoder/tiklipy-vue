<script setup>
    import 'sweetalert2/dist/sweetalert2.min.css';
    import Swal from 'sweetalert2';
    import { onMounted } from "vue";
 

    onMounted(() => {
        loading();
    });

    const loading = () => {
        Swal.fire({
            html: `
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <img src="/Invalid-error-bongo-cat.gif" width="" height="" alt="Image 2">
                    </div>
                </div>
                <h2 class="swal2-title !p-0 text-black text-lg text-red-500" id="swal2-title" style="display: block;">Nya-oh! Make sure your email and password are right, meow.</h2> 
            `,
            width: 600,
            padding: '',
            margin:'',
            color: '#716add',
            allowOutsideClick: false,
            confirmButtonText: 'Okay',
            backdrop: `
                rgba(0, 0, 123, 0.4)
                left top
                no-repeat
            `
        })
    };
</script>

<template>
    <div class="flex items-center justify-center pt-20">
        <div class="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:w-2/5 sm:w-96">
            <h1 class="text-9xl">Best decession ever!</h1>
            <p>Dear valued customer,</p>
    
            <p>We want to express our sincere gratitude for your recent payment. Your support is crucial to our business, and we are delighted to have you as a customer.</p>
            
            <p>Transaction Details:</p>
            <ul>
            <li>Order Number: <strong>#123456</strong></li>
            <li>Payment Amount: <strong>$50.00</strong></li>
            <li>Payment Date: <strong>August 15, 2023</strong></li>
            <!-- Add more details here if needed -->
            </ul>
            
            <p>Your payment has been successfully processed, and your order is now confirmed. You can expect the following:</p>
            
            <ol>
            <li>An email confirmation will be sent to you shortly.</li>
            <li>Your purchased items will be shipped within the next 2 business days.</li>
            <li>If you have any questions or concerns, please feel free to <a href="/contact">contact us</a>.</li>
            </ol>
            
            <p>Once again, thank you for choosing our products/services. We look forward to serving you again in the future.</p>
        </div>
    </div>
</template>