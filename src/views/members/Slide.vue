<script setup>
    import { ref, computed } from 'vue';
    import { QuillEditor } from '@vueup/vue-quill';

    const activeDiv = ref(1);
    const content = ref('');

    const setActiveDiv = (divNumber) => {
        activeDiv.value = divNumber;
    };

    const activeCard = computed(() => {
        return cards.value.find((card) => card.id === activeDiv.value);
    });

    const toolbarOptions = [
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],   
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
    ];

    const cards = ref([
        {
            id: 1,
            text: '',
        },
        {
            id: 2,
            text: '',
        },
        {
            id: 3,
            text: '',
        },
        {
            id: 4,
            text: '',
        },
    ]);

</script>

<template>
    <div class="flex flex-wrap bg-white mt-7 rounded-xl max-lg:flex-col-reverse">
        <div class="block justify-between w-full lg:w-1/5 xs:py-5">
            <div v-for="card in cards" :key="card.id" class="flex py-2 pr-2" @click="setActiveDiv(card.id)" :class="{ 'bg-indigo-100': activeDiv === card.id }">
                <h2 class="w-6 h-6 ml-2 text-black">{{ card.id }}</h2>
                <div class="flex bg-gray-300 h-40 md:w-[40%] lg:w-full object-cover object-center rounded-lg">
                    <p>{{ card.text }}</p>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-3/4 xs:p-5">
            <div
                class="h-[40rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16"
                id="contentDisplay"
            >
                <QuillEditor v-if="activeCard" theme="snow" :toolbar="toolbarOptions" v-model="activeCard.text" contentType="html" class="text-black !border-none" />
            </div>
        </div>
    </div>
</template>
