<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        type: String,
        content: String,
    });

</script>
<template>
    <div class="flex flex-wrap justify-between">
        <div class="w-full col-span-4">
            <div class="generated-lesson-plan">
                <header class="uppercase">{{ props.type }}</header>
                <br><br><br>
                <span v-html="props.content"></span>
            </div>
        </div>
    </div>
</template>