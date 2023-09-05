<script setup>
import { ref, onMounted, computed } from 'vue';
import expressModel from '../models/express';

const rawCards = ref([]);
const backEndModel = new expressModel();
const searchQuery = ref('');

const getToolsData = async () => {
  try {
    const response = await backEndModel.getTools();
    rawCards.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const cards = computed(() => {
  if (rawCards.value) {
    return rawCards.value.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
});

const deleteTool = () => {
  
}

const editTool = () => {
  console.log('edit');
}

onMounted(() => {
  getToolsData(); // Call the data fetching function
});
</script>

<template>
  <div class="p-5 text-center">
    <div class="grid grid-cols-4 gap-4 justify-center max-lg:justify-center">
      <div
        v-for="(card, index) in cards"
        :key="index + '-card-generate-filtered'"
        class="flex justify-center max-sm:w-full"
        >
        <a class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div class="flex justify-end">
            <i class="ti ti-trash text-2xl mr-2 cursor-pointer hover:scale-[1.2]" @click="deleteTool"></i>
            <i class="ti ti-pencil text-2xl cursor-pointer hover:scale-[1.2]" @click="editTool"></i>
          </div>
          <span class="text-2 text-black font-semibold">{{ $filters.capitalizeSentencesInParagraph(card.category) }}</span>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $filters.capitalizeSentencesInParagraph(card.title) }}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
              {{ $filters.capitalizeSentencesInParagraph(card.description) }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
