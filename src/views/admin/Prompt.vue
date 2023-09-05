<script setup>
    import { ref } from 'vue';
    import AddPrompt from '../../components/AddPrompt.vue';
    import PromptCardsVue from '../../components/PromptCards.vue';
    import { Tabs, Tab } from 'flowbite-vue';

    const activeTab = ref('first');
</script>

<template>
    <div class="bg-white">
        <Tabs v-model="activeTab" class="px-5 pt-5 text-center text-2xl font-semibold">
            <Tab name="first" title="Add Prompt" class="text-black">
                Add Prompt
            </Tab>
            <Tab name="second" title="Prompt Cards" class="text-black">
                Prompt Cards
            </Tab>
        </Tabs>
        <AddPrompt v-if="activeTab === 'first'" />
        <PromptCardsVue v-if="activeTab === 'second'" />
    </div>
</template>
