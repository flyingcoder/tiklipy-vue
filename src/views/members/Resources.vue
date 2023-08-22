<script setup>
    import { onMounted, ref } from 'vue';
    import GeneratedResourceModel from "../../models/generatedResources";
    import { useAuthStore } from '../../stores/auth';
    import { useFormStore } from '../../stores/form';
    import HeaderFilter from '../../components/HeaderFilter.vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const formStore = useFormStore();
    const authStore = useAuthStore();
    const resources = ref([]);
    const resourceModel = new GeneratedResourceModel();



    onMounted(async () => {
        resources.value = await resourceModel.getGeneratedResources();
    });


</script>
<template>
    <div class="flex flex-wrap justify-between px-3 mt-7">
        <div class="flex w-full gap-5">
            <div class="flex flex-wrap w-full max-lg:justify-center lg h-fit">
                <div class="w-full">
                    <HeaderFilter/>
                    <div class="flex -mx-2">
                        <div v-for="resource in resources" :key="resource.data.teacherId + '-resource-card'" class="cursor-pointer w-1/5 m-2 bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain hover:shadow-lg">
                            <router-link :to="{ name: 'resource', params:{ id: resource.id } }" class="">
                                <div class="p-4 max-xs:!p-2 ">
                                    <div class="flex justify-between mb-3">
                                        <div class="flex items-center justify-start">
                                            <i :class="resource.data.icon" class="text-xl ti"></i>
                                        </div>
                                        <div class="px-4 text-white uppercase bg-green-500 border rounded-md text-md">
                                            {{ resource.data.type }}
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-between leading-normal">
                                        <h5 class="text-lg font-bold tracking-tight text-right line-clamp-2 wh lg:text-xl text-main-color dark:text-white">
                                            {{ resource.data.title }}
                                        </h5>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>