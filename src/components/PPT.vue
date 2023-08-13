<script setup>
    import { ref, onMounted } from 'vue';
    import Swal from 'sweetalert2';
    import 'sweetalert2/dist/sweetalert2.min.css';
    import { useRouter } from "vue-router"

    const router = useRouter();

    onMounted(() => {
        showAlert();
    });

    const showAlert = () => {
        Swal.fire({
            html: `
                <div>
                    <img src="../../hazard.gif" width="" height="" alt="Image 1">
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <img src="../../bongo-cat.gif" width="" height="" alt="Image 2">
                    </div>
                </div>

                <h2 class="swal2-title text-black" id="swal2-title" style="display: block;">Power Point Feature</h2>
                <p style="margin-top: 1em;" class="text-black">This functionality is currently under development and remains in progress. We will duly inform you as soon as this feature becomes accessible.</p>
                
            `,
            width: 600,
            padding: '',
            margin:'',
            color: '#716add',
            allowOutsideClick: false,
            confirmButtonText: 'Go Back',
            backdrop: `
                rgba(0, 0, 123, 0.4)
                left top
                no-repeat
            `
        }).then((result) => {
            if (result.isConfirmed) {
                router.push({ name: 'dashboard' })
            }
        });
    };
</script>
<template>
    <div class="generated-lesson-plan">
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16 custom-pulse mb-5">
            <p class="leading-relaxed mb-3 h-14 w-8/12 mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 h-10 w-full mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-8/12 h-7 mt-20 bg-gray-400 mr-0 mx-auto rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-1/3 h-7 mt-20 bg-gray-400 rounded-md"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16 custom-pulse mb-5">
            <p class="leading-relaxed mb-3 h-14 w-8/12 mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 h-10 w-full mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-8/12 h-7 mt-20 bg-gray-400 mr-0 mx-auto rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-1/3 h-7 mt-20 bg-gray-400 rounded-md"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16 custom-pulse mb-5">
            <p class="leading-relaxed mb-3 h-14 w-8/12 mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 h-10 w-full mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-8/12 h-7 mt-20 bg-gray-400 mr-0 mx-auto rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-1/3 h-7 mt-20 bg-gray-400 rounded-md"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16 custom-pulse mb-5">
            <p class="leading-relaxed mb-3 h-14 w-8/12 mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 h-10 w-full mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-8/12 h-7 mt-20 bg-gray-400 mr-0 mx-auto rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-1/3 h-7 mt-20 bg-gray-400 rounded-md"></p>
        </div>
    </div>
</template>