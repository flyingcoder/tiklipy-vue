<script setup>
import { ref, computed } from 'vue';
import expressModel from "../../models/express";
import { QuillEditor } from '@vueup/vue-quill';
import { Textarea, Button, Input, FileInput, Select } from 'flowbite-vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import dayjs from "dayjs";

const title = ref('');
const description = ref('');
const category = ref('');
const icon = ref('');
const promptExample = ref('');
const systemPrompt = ref('');
const tags = ref([]);
const tagInput = ref('');
const type = ref('');
const inputs = ref([]);
const objInputs = ref({});
const backEndModel = new expressModel();

const addNewInput = () => {
    // Check if the current input object is valid
    if (
        inputs.value.every(input => {
            return input.objectName.trim() !== '' && input.hint.trim() !== '' && input.inputType.trim() !== '' && input.label.trim() !== '';
        })
    ) {
        const newInput = {
            objectName: '',
            hint: '',
            inputType: '',
            label: '',
            value: ''
        };
        
        inputs.value.push(newInput);
    }
};


const objKey = (data, index) => {
    const newInput = {
        hint: data.hint,
        inputType: data.inputType,
        label: data.label,
        value: data.value,
        processed: false
    };

    const objectName = data.objectName;

    objInputs.value[objectName] = newInput;
    inputs.value[index].processed = true;
    
};

const removeRow = (objectName, index) => {
    delete objInputs.value[objectName];
    inputs.value.splice(index, 1);
};



const handleTagInput = () => {
    if (tagInput.value.trim() !== '') {
        const newTags = tagInput.value.split(',').map(tag => tag.trim());
        tags.value = newTags;
    }
};


const transformedType = computed(() => type.value.toLowerCase().replace(/\s+/g, '_'));


const submitContent = () => {
    const filteredInputs = inputs.value.filter(input => input.processed);

    const objInputsValue = {};
    filteredInputs.forEach((input, index) => {
        const objectName = input.objectName;
        objInputsValue[objectName] = {
            hint: input.hint,
            inputType: input.inputType,
            label: input.label,
            value: input.value,
        };
    });

    const data = {
        title: title.value,
        description: description.value,
        category: category.value,
        icon: icon.value,
        promptExample: promptExample.value,
        systemPrompt: systemPrompt.value,
        tag: tags.value,
        type: transformedType.value,
        inputs: objInputsValue
    };

    backEndModel.addPrompt(data);
};

</script>

<template>
<div class="bg-white p-6 rounded-lg text-black">
    <h1 class="text-center text-black text-3xl font-semibold">
        Add Prompt
    </h1>
    <div class="w-3/4 mx-auto">
        <div class="grid grid-cols-2 gap-4 mt-5 ">
            <Input size="md" label="Title" v-model="title" class="" />
            <Input size="md" label="Tags" v-model="tagInput" @input="handleTagInput" class="" />
            <Input size="md" label="Category" v-model="category" class="" />
            <Input size="md" label="Type" v-model.trim="type" class="" />
            <Input size="md" label="Icon" v-model="icon" class="" />
            <Textarea rows="4" label="Prompt Example" v-model="promptExample" class=""></Textarea>
            <Textarea rows="4" label="System Prompt" v-model="systemPrompt" class=""></Textarea>
            <Textarea rows="4" label="Description" v-model="description" class=""></Textarea>
        </div>
        <div class="my-4">
            <div class="text-lg font-semibold pb-1">Inputs</div>
            <div class="px-5">
                <div v-for="(input, index) in inputs" :key="index" class="flex items-center w-full gap-4 pt-3">
                    <div class="w-[50px] flex  items-center text-lg font-semibold">{{ index + 1 }}.</div>
                    <Input size="md" label="Object Name" v-model="input.objectName" class="w-full" />
                    <Input size="md" label="Placeholder" v-model="input.hint" class="w-full" />
                    <Input size="md" label="Input Type" v-model="input.inputType" class="w-full" />
                    <Input size="md" label="Label" v-model="input.label" class="w-full" />
                    <Input size="md" label="Slug" v-model="input.value" hidden class="" />
                    <Button color="white" pill square class="h-10 w-10" @click="removeRow(input.objectName, index)">
                        <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                        </svg>
                    </Button>
                    <Button color="white" pill square class="h-10 w-10" @click="objKey(input, index)" v-if="!input.processed">
                        <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </Button>
                </div>
                <Button color="default" class="mt-4" @click="addNewInput">
                    Add
                    <template #suffix>
                        <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </template>
                </Button>
            </div>
        </div>
        <button @click="submitContent" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded font-semibold text-lg">Add Prompt</button>
    </div>
</div>
</template>
