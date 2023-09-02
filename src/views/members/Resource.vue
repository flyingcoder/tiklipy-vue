<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import ResourceContent from '../../components/ResourceContent.vue';
  import ResourceModel from '../../models/generatedResources.js';

  const resourceModel = new ResourceModel();
  const route = useRoute();
  const type = ref('');
  const content = ref();


  onMounted(() => {
    if(route?.params?.id)
      getResource(route.params.id);
  })

  const getResource = async (docId) => {
    await resourceModel.getGeneratedDoc(docId).then((res) => {
      content.value = res.data?.content?.choice?.message?.content?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') ?? '';
      type.value = res.data?.type ?? '';
    })
  } 
</script>

<template>
    <div class="mt-10">
        <div class="max-w-[210mm] max-h-[297mm] my-0 mx-auto p-4 bg-white overflow-hidden shadow-md break-inside-avoid-column print:page-break-after print:m-0">
            <div class="p-[20px] text-black">
                <ResourceContent :content="content" :type="type"/>
            </div>
        </div>
    </div>
</template>