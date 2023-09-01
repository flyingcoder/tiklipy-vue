<script setup>
    import { ref, onMounted } from 'vue';
    import Swal from 'sweetalert2';
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

                <h2 class="text-black swal2-title" id="swal2-title" style="display: block;">Power Point Feature</h2>
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
            <p class="w-8/12 mx-auto mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-14"></p>
            <p class="w-full h-10 mx-auto mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md"></p>
            <p class="w-8/12 mx-auto mt-20 mb-3 mr-0 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-1/3 mt-20 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16 custom-pulse mb-5">
            <p class="w-8/12 mx-auto mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-14"></p>
            <p class="w-full h-10 mx-auto mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md"></p>
            <p class="w-8/12 mx-auto mt-20 mb-3 mr-0 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-1/3 mt-20 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16 custom-pulse mb-5">
            <p class="w-8/12 mx-auto mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-14"></p>
            <p class="w-full h-10 mx-auto mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md"></p>
            <p class="w-8/12 mx-auto mt-20 mb-3 mr-0 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-1/3 mt-20 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
        </div>
        <div class="h-[51rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16 custom-pulse mb-5">
            <p class="w-8/12 mx-auto mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-14"></p>
            <p class="w-full h-10 mx-auto mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md"></p>
            <p class="w-8/12 mx-auto mt-20 mb-3 mr-0 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-full mt-8 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
            <p class="w-1/3 mt-20 mb-3 leading-relaxed bg-gray-400 rounded-md h-7"></p>
        </div>
    </div>
</template>