<script setup>
    import { ref, computed, onMounted } from 'vue';
    import expressModel from "../models/express.js";
    import { QuillEditor } from '@vueup/vue-quill';
    import { Textarea, Button, Input, FileInput, Select } from 'flowbite-vue';
    import '@vueup/vue-quill/dist/vue-quill.snow.css';
    import dayjs from "dayjs";
    import { useFormStore } from '../stores/form';

    const title = ref('');
    const description = ref('');
    const category = ref('');
    const icon = ref('');
    const promptExample = ref('');
    const systemPrompt = ref('You are a helpful assistant.');
    const tags = ref([]);
    const tagInput = ref('');
    const type = ref('');
    const inputs = ref([]);
    const objInputs = ref({});
    const error = ref('');
    const loading = ref(false);
    const formStore = useFormStore();
    const tagsList = formStore.tags;
    const showTagDropdown = ref(false);
    const backEndModel = new expressModel();

    const filteredTags = computed(() => {
        return (tagsList ?? []).filter(tag =>
            tag.name.toLowerCase().includes(tagInput.value.toLowerCase())
        );
    });


    const closeDropdown = () => {
        showTagDropdown.value = false;
    }

    const addTag = (tag) => {
        if (!tags.value.includes(tag)) {
            tags.value.push(tag);
            tagInput.value = '';
            closeDropdown();
        }
    };


    const removeTag = (index) => {
        if (tags.value) {
            tags.value.splice(index, 1);
        }
    };

    const selectNext = () => {

    }

    const selectPrevious = () => {

    }

    const checkPrompt = () => {
        return title.value !== '' &&
               description.value !== '' &&
               category.value !== '' &&
               icon.value !== '' &&
               systemPrompt !== '' &&
               tagInput.value !== '' &&
               type.value !== ''
    }

    const addNewInput = () => {
        if (
            inputs.value.every(input => {
                return input.objectName.trim() !== '' && input.hint.trim() !== '' && input.inputType.trim() !== '' && input.label.trim() !== '';
            })
        ) {
            if(inputs.value.length > 0) {
                inputs.value.forEach((input, index) => {
                    console.log(input.objectName);
                    objKey(input, index);
                });
            }
            const newInput={objectName: '', hint: '',inputType: '',label:'', value: ''};
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

    const transformedType = computed(() => type.value.toLowerCase().replace(/\s+/g, '_'));

    const submitContent = async () => {
        if(!checkPrompt()) {
            error.value = "Fill in all required inputs";
        } else {
            loading.value = true;
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

            await backEndModel.addPrompt(data);

            loading.value = false;
        }
    };

    const saveTag = () => {
        if(tagInput.value !== '')
            formStore.addTag(tagInput.value);
    }

    const selectTag = (tag) => {
        tagInput.value = tag.name;
        addTag(tag.name); // Add the selected tag to the tags array
    };

    const filterTags = () => {
        showTagDropdown.value = true;
    }
</script>

<template>
<div class="bg-white p-6 rounded-lg text-black">
    <p class="text-red-500 my-2" v-if="error">{{ error }}</p>
    <div class="w-3/4 mx-auto">
        <div class="grid grid-cols-2 gap-4 mt-5 ">
            <Input size="md" label="Title *" v-model="title" class="" />
            <div class="relative">
                <Input
                    @input="filterTags"
                    @keydown.down="selectNext"
                    @keydown.up="selectPrevious"
                    @keydown.enter="addTag(filteredTags[0])"
                    @keydown.esc="closeDropdown"
                    size="md"
                    label="Tags *"
                    v-model="tagInput"
                    class=""
                />
                <div v-if="showTagDropdown" class="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg z-10">
                    <ul>
                        <li
                            v-for="(tag, index) in filteredTags"
                            :key="index"
                            @click="addTag(tag)"
                            class="cursor-pointer px-4 py-2 hover:bg-blue-100"
                        >
                            {{ tag.name }}
                        </li>
                    </ul>
                </div>
                <div
                    v-for="(tag, index) in tags"
                    :key="tag.id"
                    class="px-2 py-1 bg-blue-500 text-white rounded-full mr-2 mb-2"
                >
                    {{ tag.name }}
                    <button
                    @click="removeTag(index)"
                    class="ml-1 focus:outline-none hover:text-red-500"
                    >
                    x
                    </button>
                </div>
            </div>

            <Input size="md" label="Category *" v-model="category" class="" />
            <Input size="md" label="Type *" v-model.trim="type" class="" />
            <Input size="md" label="Icon *" v-model="icon" class="" />
            <Textarea rows="4" label="Prompt Example" v-model="promptExample" class=""></Textarea>
            <Textarea rows="4" label="System Prompt *" v-model="systemPrompt" class=""></Textarea>
            <Textarea rows="4" label="Description *" v-model="description" class=""></Textarea>
        </div>
        <div class="my-4">
            <div class="text-lg font-semibold pb-1">Inputs</div>
            <div class="px-5">
                <div v-for="(input, index) in inputs" :key="index" class="flex items-center w-full gap-4 pt-3">
                    <div class="w-[50px] flex  items-center text-lg font-semibold">{{ index + 1 }}.</div>
                    <Input size="md" label="Input name" v-model="input.objectName" class="w-full" />
                    <Input size="md" label="Placeholder" v-model="input.hint" class="w-full" />
                    <Input size="md" label="Input Type" v-model="input.inputType" class="w-full" />
                    <Input size="md" label="Label" v-model="input.label" class="w-full" />
                    <Input size="md" label="Default Value" v-model="input.value" class="w-full" />
                    <Button color="white" pill square class="h-10 w-10" v-if="input.processed">
                        <i class="ti ti-check"></i>
                    </Button>
                    <Button color="white" pill square class="h-10 w-10" @click="removeRow(input.objectName, index)">
                        <i class="ti ti-trash"></i>
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
        <Button :disabled="!checkPrompt()" :loading="loading" @click="submitContent" :class="checkPrompt() ? 'bg-blue-700' : 'hover:bg-gray-400 bg-gray-400 cursor-not-allowed' " class="mt-4">
            Save Prompt
            <i class="ti ti-save"></i>
        </Button>
    </div>
</div>
</template>
