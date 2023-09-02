<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        type: String,
        content: String,
    });

</script>
<template>
    <div class="flex flex-wrap justify-between asda">
        <div class="w-full col-span-4">
            <div class="generated-lesson-plan">
                <header class="text-lg font-semibold text-center uppercase text-main-color">{{ props.type }}</header>
                <span class="flex justify-center mt-3 text-4xl font-semibold">{{ props.title }}</span>
                <br><br>
                <div class="flex justify-center">
                    <span v-html="props.content"></span>
                </div>
            </div>
        </div>
    </div>
</template>