<script setup>
    import { ref } from 'vue';

    const activeDiv = ref(1);
    const content = ref('');

    const setActiveDiv = (divNumber) => {
        activeDiv.value = divNumber;
    };

    const editableText1 = ref('Initial text for paragraph 1');
    const editableText2 = ref('Initial text for paragraph 2');
    // Add more editableText properties for other divs as needed

    // Method to handle dropping content into the drop area
    const handleDrop = (event) => {
        event.preventDefault();
        const draggedElementId = event.dataTransfer.getData('text/plain');
        const targetElement = document.getElementById(draggedElementId);

        if (targetElement) {
            // Get the active div number
            const activeDivNumber = activeDiv.value;

            // Update the content based on the active div
            if (activeDivNumber === 1) {
                content.value = editableText1.value;
            } else if (activeDivNumber === 2) {
                content.value = editableText2.value;
            }
            // Add similar conditions for other divs as needed
        }
    };
</script>
<template>
    <div class="flex flex-wrap bg-white mt-7 rounded-xl max-lg:flex-col-reverse">
        <div class="block justify-between w-full lg:w-1/5 xs:py-5">
            <div class="flex py-2 pr-2" @click="setActiveDiv(1)" :class="{ 'bg-indigo-100': activeDiv === 1 }">
                <h2 class="w-6 h-6 ml-2 text-black">1</h2>
                <div class="flex bg-gray-300 h-40 md:w-[40%] lg:w-full object-cover object-center rounded-lg">
                    <p>{{ editableText1 }}</p>
                </div>
            </div>
            <div class="flex py-2 pr-2" @click="setActiveDiv(2)" :class="{ 'bg-indigo-100': activeDiv === 2 }">
                <h2 class="w-6 h-6 ml-2 text-black">2</h2>
                <div class="flex bg-gray-300 h-40 md:w-[40%] lg:w-full object-cover object-center rounded-lg">
                    <p>{{ editableText2 }}</p>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-3/4 xs:p-5">
            <div
                class="h-[40rem] bg-gray-300 w-full block object-cover object-center rounded-lg p-4 xs:px-16"
                id="contentDisplay"
            >
                <div>{{ content}}</div>
            </div>
        </div>
    </div>
</template>
