<script setup>
    import { onMounted, ref, computed } from 'vue';
    import { auth } from "../../plugins/firebase";
    import GeneratedResourceModel from "../../models/generatedResources";
    import { useAuthStore } from '../../stores/auth';
    import { useFormStore } from '../../stores/form';
    import { useLoaderStore } from '../../stores/loader';
    import HeaderFilter from '../../components/HeaderFilter.vue';
    import { useRouter, useRoute } from 'vue-router';
    import { onAuthStateChanged } from 'firebase/auth';

    const router = useRouter();
    const route = useRoute();
    const formStore = useFormStore();
    const authStore = useAuthStore();
    const loaderStore = useLoaderStore();
    const resourcesRaw = ref();
    const resourceModel = new GeneratedResourceModel();
    
    onAuthStateChanged(auth, async (user) => {
        if(user?.accessToken) {
            await getResources();
            loaderStore.isLoading = false;
        }
    });

    onMounted(() => {
        if(resourcesRaw.value == undefined)
            loaderStore.isLoading = true;
    });

    const getResources = async () => {
        resourcesRaw.value = await resourceModel.getGeneratedResources().then((res) => res);
        console.log(resourcesRaw.value);
    }

    const resources = computed(() => {
        if(route.params.type === "all")
            return resourcesRaw.value?.data ?? [];
        else
            return resourcesRaw.value?.data?.filter(item => item.type.toLowerCase().includes(route.params.type.toLowerCase())) ?? [];
    });
</script>
<template>
    <div class="flex flex-wrap justify-between px-3 mt-7">
        <div class="flex w-full gap-5">
            <div class="flex flex-wrap w-full max-lg:justify-center lg h-fit">
                <div class="w-full">
                    <HeaderFilter/>
                    <div class="flex flex-wrap -mx-2">
                        <div v-for="(resource, index) in resources" :key="index*2+1 + '-resource-card-'" class="cursor-pointer w-full sm:1/2 md:w-1/3 lg:w-1/5 m-2 bg-white rounded-lg sm:mr-5 mb-5 bg-[url('/p-1.png')] bg-no-repeat bg-contain hover:shadow-lg">
                            <router-link :to="{ name: 'resource', params:{ id: resource.id } }" class="">
                                <div class="p-4 max-xs:!p-2 ">
                                    <div class="flex justify-between mb-3">
                                        <div class="flex items-center justify-start">
                                            <i :class="resource.icon" class="text-xl ti"></i>
                                        </div>
                                        <div class="px-4 text-white uppercase bg-green-500 border rounded-md text-md">
                                            {{ resource.type }}
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-between leading-normal">
                                        <h5 class="text-lg font-bold tracking-tight text-left line-clamp-2 wh lg:text-xl text-main-color dark:text-white">
                                            {{ resource.title }}
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