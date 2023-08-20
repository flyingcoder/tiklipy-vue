<script setup>
    import expressModel from "../../models/express";
    import GeneratedResourceModel from "../../models/generatedResources";
    import { useFormStore } from '../../stores/form';
    import { onMounted, ref, watch, defineProps  } from 'vue'
    import { Input } from 'flowbite-vue';
    import { Select } from 'flowbite-vue';
    import { Alert } from 'flowbite-vue';
    import { Textarea } from 'flowbite-vue';
    import { Button } from 'flowbite-vue';
    import { useRouter } from 'vue-router';
    import 'animate.css';

    const router = useRouter();
    const formStore = useFormStore();
    const backEndModel = new expressModel();
    const generateResource = new GeneratedResourceModel();

    const generatedResource = ref();
    const copyContent = ref(false);
    const isGenerating = ref(false);

    const saveToFireBase = (rawContent) => {
        generateResource.addGeneratedResource(rawContent, 'lessonPlan');
    }

    onMounted(() => {
        console.log(formStore.description)
        if(formStore.category === '')
            router.push({ name: 'dashboard' })
    })

    const generate = async () => {
        console.log(formStore.inputs)
        isGenerating.value = true;
        const instruc = formStore.processInstruction();
        console.log(instruc);
        //await backEndModel.generateResource(instruc)
        //    .then((completion) => {
        //        saveToFireBase(completion?.data?.message?.content);
        //        generatedResource.value = completion?.data?.message?.content?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') });
        isGenerating.value = false;
    }

    const copyGeneratedTopic = () => {
        const range = document.createRange();
        range.selectNode(document.querySelector(".generated-value"));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        copyContent.value = !copyContent.value
        setTimeout(() => {
            copyContent.value = !copyContent.value;
        }, 3000);
    };
</script>
<template>
    <div class="fixed top-0 left-0" v-if="copyContent">
        <Alert type="success">Copied</Alert>
    </div>
    <div class="container px-3 mx-auto text-black mt-7">
        <div class="bg-white shadow-md rounded-t-3xl">
            <div class="flex py-4 bg-indigo-500 px-9 rounded-t-3xl">
                <div>
                    <div class="inline-flex items-center p-1.5 text-xl font-medium text-center bg-gray-100 border rounded-full text-main-color bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-secondary-color dark:hover:text-white hover:border-transparent">
                        <i :class="formStore.icon" class="text-4xl text-white ti dark:text-white"></i>
                    </div>
                </div>
                <h1 class="self-center pl-4 text-2xl font-bold text-white">
                    {{ formStore.title }}
                </h1>
            </div>
            <div class="flex flex-wrap gap-4 p-3 sm:p-9">
                <div class="w-full lg:w-[68%] col-span-4">
                    <div class="w-full py-4 generated-value" v-if="!generatedResource">
                        <h2 class="mb-6 text-2xl font-semibold">
                            {{ formStore.description }}
                        </h2>
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-xl">
                                    Step 1: Choose Lesson: Select grade, subject, topic.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="w-full py-4 generated-value" v-if="generatedResource" v-html="generatedResource">
                        
                    </div>
                    <div class="block" v-if="generatedResource">
                        <div class="flex">
                            <Button color="default" @click="copyGeneratedTopic" class="py-3 pr-5 mr-3 font-semibold uppercase border-0 bg-main-color hover:bg-secondary-color">
                                <i class="mr-2 text-2xl align-middle ti ti-printer"></i>
                                Print
                            </Button>
                            <Button color="default" class="py-3 pr-5 mr-3 font-semibold uppercase border-0 bg-main-color hover:bg-secondary-color">
                                <i class="mr-2 text-2xl align-middle ti ti-bookmark"></i>
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-[30%] col-span-2">
                    <div class="p-6 bg-gray-100 rounded-3xl animate__animated animate__fadeInUp">
                        <h3 class="mb-6 text-xl font-bold leading-snug text-black">
                            Enhance results with more details.
                        </h3>
                        <div v-for="(input, index) in formStore.inputs" :key="index + '-generate-form-input'" class="mb-4 font-semibold generate-form-section">
                            <Textarea :rows="input.rows" :placeholder="input.placeholder" v-model="formStore.inputs[index].value" v-if="input.inputType === 'textarea'" class="font-semibold" :label="input.label" />
                            <Input :placeholder="input.placeholder" v-model="formStore.inputs[index].value" v-else type="text" :label="input.label" class="font-semibold"/>
                        </div>
                        <Button @click.prevent="generate" type="submit" size="lg" class="mt-5 w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">
                           Tiklipy Go!
                        </Button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>