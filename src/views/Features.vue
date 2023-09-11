<script setup>
    import Swal from "sweetalert2";
import { onMounted, ref } from "vue";
    import expressModel from "../models/express";

    const backEndModel = new expressModel();
    const features = ref();
    onMounted(() => {
        getFeatures();
    });
    const getFeatures = async () => {
        features.value = await backEndModel.getFeatures().then((data) => data.data );
    }

    const colorClasses = [
        "red",
        "green",
        "blue",
        "yellow",
        "teal",
        
    ];


    const getColorClass = (index) => {
        return colorClasses[index % colorClasses.length];
    };
    const tutorial = (featureTitle) => {{
        Swal.fire({
            html: `
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <img src="bongo-cat/coding-bongo-cat.gif" width="" height="" alt="cat">
                        </div>
                    </div>
                    <h2 class="swal2-title !p-0 text-black text-xl" id="swal2-title" style="display: block;">${featureTitle}</h2>
                `,
                width: 600,
                padding: '',
                color: '#716add',
                allowOutsideClick: false,
                confirmButtonText:'Close',
                backdrop: `
                    rgba(0, 0, 123, 0.4)
                    left top
                    no-repeat
                `
        })
    }}
</script>
<template>
    <div class="flex flex-wrap justify-center mt-10 sm:justify-between max-midlg:px-4">
        <div @click="tutorial(feature.title)" v-for="(feature, index) in features" :key="index + '-features-cards'" :class="'hover:bg-'+getColorClass(index)+'-100 hover:shadow-'+getColorClass(index)+'-200'" class="cursor-pointer border-[1px] border-color-main-color w-full sm:w-[49%] midlg:w-[32%] mb-5 bg-white  p-5 2xl:p-10  content-between rounded-xl hover:scale-105 ease-linear duration-200 shadow-sm">
            <div class="overflow-hidden  w-full mb-[4rem]">
                <div class="rounded-[8px]  bg-main-color text-4xl py-1 px-2 w-fit">
                    <i class="ti text-white" :class="feature.icon" alt=""></i>
                </div>
            </div>
            <div class="">
                <h2 class="text-[1.2rem] mb-2 sm:text-2xl text-main-color font-bold dark:text-white">{{ $filters.capitalizeFirstLetterSentence(feature.title) }}</h2>
                <div class="text-black">{{ $filters.capitalizeSentencesInParagraph(feature.description) }}</div>
            </div>
        </div>
    </div>
</template>