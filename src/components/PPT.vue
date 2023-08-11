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
            title: 'PowerPoint Presentation Feature',
            text: 'This functionality is currently under development and remains in progress. We will duly inform you as soon as this feature becomes accessible.',
            icon: 'info',
            allowOutsideClick: false,
            confirmButtonText: 'Certainly!'
        })
    };
</script>
<template>
    <div class="generated-lesson-plan">
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 px-16 custom-pulse mb-5">
            <p class="leading-relaxed mb-3 h-14 w-[38rem] mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 h-10 w-[50rem] mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-8/12 h-7 mt-20 bg-gray-400 mr-0 mx-auto rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-1/3 h-7 mt-20 bg-gray-400 rounded-md"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 px-16 custom-pulse mb-5">
            <p class="leading-relaxed mb-3 h-14 w-[38rem] mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 h-10 w-[50rem] mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-8/12 h-7 mt-20 bg-gray-400 mr-0 mx-auto rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-1/3 h-7 mt-20 bg-gray-400 rounded-md"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 px-16 custom-pulse mb-5">
            <p class="leading-relaxed mb-3 h-14 w-[38rem] mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 h-10 w-[50rem] mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-8/12 h-7 mt-20 bg-gray-400 mr-0 mx-auto rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-full h-7 mt-8 bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 w-1/3 h-7 mt-20 bg-gray-400 rounded-md"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 px-16 custom-pulse mb-5">
            <p class="leading-relaxed mb-3 h-14 w-[38rem] mt-8 mx-auto bg-gray-400 rounded-md"></p>
            <p class="leading-relaxed mb-3 h-10 w-[50rem] mt-8 mx-auto bg-gray-400 rounded-md"></p>
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