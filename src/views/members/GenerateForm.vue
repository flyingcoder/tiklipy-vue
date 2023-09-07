<script setup>
    import expressModel from "../../models/express";
    import GeneratedResourceModel from "../../models/generatedResources.js";
    import { useFormStore } from '../../stores/form';
    import SwalCheckIcon from '../../components/SwalCheckIcon.vue'
    import Swal from 'sweetalert2';
    import { onMounted, ref, computed  } from 'vue'
    import { Input } from 'flowbite-vue';
    import { Alert } from 'flowbite-vue';
    import { Textarea } from 'flowbite-vue';
    import { Button } from 'flowbite-vue';
    import { useRouter } from 'vue-router';
    import { useLoaderStore } from "../../stores/loader";
    
    const router = useRouter();
    const formStore = useFormStore();
    const loaderStore = useLoaderStore();
    const backEndModel = new expressModel();
    const generateResource = new GeneratedResourceModel();

    const generatedResource = ref();
    const copyContent = ref(false);
    const isGenerating = ref(false);
    const catDoneTyping = ref(true);
    const resourceObject = ref();
    const resourceSaved = ref(false);
    const assessmentSaved = ref(false);
    const tooltipValue = ref(false);

    const toolt = computed(() => {
        return tooltipValue.value;
    });

    const tooltip = (index, value) => {
        formStore.inputs[index].tooltipValue = value;
    };

    const notSaveModal = () => {
        Swal.fire({
            title: "Reminder",
            text:
                "Before generating, make sure to save the document.",
            icon: "warning",
            confirmButtonText: 'Save',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                saveToFireBase();
            }
        });
    };

    const generateAssessments = () => {
        if(resourceSaved == true) {
            console.log("it is already save");
        } else {
            notSaveModal();
        }
    };

    const saveToFireBase = () => {
        if(resourceObject.value)
            generateResource.addGeneratedResource(resourceObject.value);

        resourceSaved.value = true
    }

    onMounted(() => {
        if(formStore.category === '')
            router.push({ name: 'dashboard' })
    })

    const generate = async () => {
        isGenerating.value = true;
        catDoneTyping.value = false;
        const instruc = formStore.processInstruction();
        await backEndModel.generateResource(instruc)
            .then((completion) => {
                const choice = completion?.data?.choices?.pop();
                resourceObject.value = {
                    choice: choice,
                    usage: completion?.data?.usage
                };
                generatedResource.value = choice?.message?.content?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') 
                loaderStore.startConfetti();
            });
        catDoneTyping.value = true;
    }

    const regenerate = () => {
        isGenerating.value = false;
        generatedResource.value = '';
        resourceSaved.value = false;
        resourceObject.value = null;
    }

    const printResource = (divId) => {
        const content = `
        <html>
        <head>
          <title>Tiklipy - The Best Teacher AI Assistant</title>
        </head>
        <body>
          ${document.getElementById(divId).innerHTML}
        </body>
        </html>
      `;
      const printWindow = window.open('', '_blank');
      printWindow.document.write(content);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
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
    <div class="container text-black px-3 mx-auto mt-7">
        <div>
            <div id="generated-resources">
            </div>
        </div>
        <div class="">
            
            <div class="flex flex-wrap gap-4 p-3 sm:p-9">
                <div class="w-full lg:w-[68%] col-span-4 mx-auto animate__fadeInUp animate__animated">
                    <div class="flex py-4 bg-indigo-500 shadow-md px-9 rounded-3xl mb-4">
                        <div>
                            <div class="inline-flex items-center p-1.5 text-xl font-medium text-center bg-gray-100 border rounded-full text-main-color bg-opacity-30 focus:ring-4 focus:outline-none focus:ring-secondary-color dark:hover:text-white hover:border-transparent">
                                <i :class="formStore.icon" class="text-4xl text-white ti dark:text-white"></i>
                            </div>
                        </div>
                        <h1 class="self-center pl-4 text-2xl font-bold text-white">
                            {{ formStore.title }}
                        </h1>
                    </div>
                    <div v-if="isGenerating" :class="{'animate__fadeOutUp' : !isGenerating, 'animate__fadeInDown' : isGenerating  }" class="p-6 bg-white rounded-3xl animate__animated">
                        <div v-if="!catDoneTyping" class="text-center">
                            <img src="/bongo-cat/coding-bongo-cat.gif" class="mx-auto" width="200" alt="">
                            <p class="text-2xl font-bold text-secondary-color animate-bounce">
                                GENERATING!
                            </p>
                        </div>
                        <div v-if="catDoneTyping" class="text-center">
                            <p class="text-2xl font-bold uppercase text-secondary-color">
                                document is ready!
                            </p>
                        </div>
                    </div>
                    <div v-if="!isGenerating" :class="{'animate__fadeOutDown' : isGenerating, 'animate__fadeInUp' : !isGenerating  }" class="p-6 bg-white rounded-3xl animate__animated">
                        <!-- <Button @click.prevent="generate" type="submit" size="lg" class="mt-5 w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">
                           Generate Now!
                        </Button>
                        <div class="inline-flex items-center justify-center w-full px-6">
                            <hr class="w-64 h-px my-8 bg-gray-900 border-0 dark:bg-gray-700">
                            <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                            or
                            </span>
                        </div> -->
                        <h3 class="mb-6 text-xl font-bold leading-snug text-center text-black capitalize">
                            Enhance results with more details.
                        </h3>
                        <div v-for="(input, index) in formStore.inputs" :key="index + '-generate-form-input'" class="mb-4 font-semibold generate-form-section">
                            <div class="relative d-flex" v-if="input.inputType === 'textarea'">
                                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{input.label}}</label>
                                <div class="flex">
                                    <textarea id="message" :rows="input.rows" v-model="formStore.inputs[index].value" placeholder="Write here" @blur="tooltip(index, false)" @focus="tooltip(index, true)" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                                    <div :class="!formStore.inputs[index].tooltipValue ? 'hidden' : ''" class="w-full border-[1px] border-gray-300 bg-white max-w-[14rem] right-[-15rem] absolute text-black z-10 px-2 py-2 text-sm font-medium rounded-lg shadow-sm tooltip flex">
                                        <i class="ti ti-bulb-filled text-xl text-yellow-300"></i>&nbsp;<br>
                                        <span class="pl-[4px] pt-[3px] break-all"> 
                                            {{ input.hint }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="relative" v-if="input.inputType === 'text'">
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{input.label}}</label>
                                <div class="flex">
                                    <input type="text" id="first_name" v-model="formStore.inputs[index].value" @blur="tooltip(index, false)" @focus="tooltip(index, true)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write here">
                                    <div :class="!formStore.inputs[index].tooltipValue ? 'hidden' : ''" class="w-full border-[1px] border-gray-300 bg-white max-w-[14rem] right-[-15rem] absolute text-black z-10 px-2 py-2 text-sm font-medium rounded-lg shadow-sm tooltip flex">
                                        <i class="ti ti-bulb-filled text-xl text-yellow-300"></i>&nbsp;<br>
                                        <span class="pl-[4px] pt-[3px] break-all"> 
                                            {{ input.hint }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button @click.prevent="generate" type="submit" size="lg" class="mt-5 w-full bg-main-color hover:bg-secondary-color border-0 text-sm lg:text-[0.775rem] xl:text-lg font-semibold">
                           Tiklipy Go!
                        </Button>
                    </div>
                    <!-- <div class="px-10 py-6 bg-white">
                        <div class="w-full py-4 animate__animated generated-value" v-if="!generatedResource">
                            <h2 class="mb-6 text-2xl font-semibold">
                                {{ formStore.description }}
                            </h2>
                            <p class="p-2 mb-4 text-center bg-blue-200">We offer hints and examples to enhance the accuracy of your generation process.</p>
                            <div class="space-y-6">
                                <div v-for="(input, index) in formStore.inputs" :key="index + '-generate-form-hints'">
                                    <div class="">
                                        <h2 class="text-xl font-bold">{{ input.label }}: </h2>
                                        <p class="text-xl">{{ input.hint }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full py-4 animate__animated generated-value" id="generated-resources" v-if="generatedResource" v-html="generatedResource">
                            
                        </div>
                    </div> -->
                    <!-- <div class="block" v-if="generatedResource">
                        <div class="flex mt-8">
                            <Button color="default" @click="generateAssessments()" class="p-2 mr-3 font-semibold uppercase border-0 bg-main-color hover:bg-secondary-color">
                                <i v-if="!assessmentSaved" class="mr-2 text-xl align-middle ti ti-playlist-add"></i>
                                Generate Assessments
                                <SwalCheckIcon class="!mt-0 text-[5px]" v-if="assessmentSaved"/>
                            </Button>
                            <Button color="default" class="p-2 mr-3 font-semibold uppercase border-0 bg-main-color hover:bg-secondary-color">
                                <i class="mr-2 text-xl align-middle ti ti-playlist-add"></i>
                                Generate Slides
                            </Button>
                        </div>
                        <div class="flex mt-4">
                            <Button color="default" @click="printResource('generated-resources')" class="p-2 mr-3 font-semibold uppercase border-0 bg-main-color hover:bg-secondary-color">
                                <i class="mr-2 text-xl align-middle ti ti-printer"></i>
                                Print
                            </Button>
                            <Button @click="saveToFireBase" color="default" class="p-4 mr-3 font-semibold uppercase border-0 bg-main-color hover:bg-secondary-color">
                                <span  v-if="!resourceSaved">
                                    <i class="mr-2 text-2xl align-middle ti ti-bookmark"></i>
                                    Save
                                </span>
                                <SwalCheckIcon class="!mt-0 text-[5px]" v-if="resourceSaved"/>
                            </Button>
                            <Button @click="regenerate" color="default" class="p-2 mr-3 font-semibold uppercase border-0 bg-main-color hover:bg-secondary-color">
                                <i class="mr-2 text-xl align-middle ti ti-repeat"></i>
                                Regenerate
                            </Button>
                        </div>
                    </div> -->
                </div>
            </div> 
        </div>
    </div>
</template>