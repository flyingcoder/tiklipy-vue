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
                        <img src="Invalid-error-bongo-cat.gif" width="" height="" alt="Image 2">
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
            <h1 class="text-9xl">Do you want a discount?</h1>
        </div>
    </div>
</template>