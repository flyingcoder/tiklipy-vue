<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
<<<<<<< HEAD
  import ResourceContent from '../../components/ResourceContent';
=======
  import ResourceContent from '../../components/ResourceContent.vue';
>>>>>>> 0e78819 (Single resource display feature completed)
  import ResourceModel from '../../models/generatedResources.js';

  const resourceModel = new ResourceModel();
  const route = useRoute();
  const type = ref('');
<<<<<<< HEAD
  const title = ref('');
  const content = ref('');
=======
  const content = ref();
>>>>>>> 0e78819 (Single resource display feature completed)

  onMounted(() => {
    if(route?.params?.id)
      getResource(route.params.id);
    console.log(content.value);
  })

  const getResource = async (docId) => {
    await resourceModel.getGeneratedDoc(docId).then((res) => {
      content.value = res.data?.content?.choice?.message?.content?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') ?? '';
      type.value = res.data?.type ?? '';
<<<<<<< HEAD
      title.value = res.data?.title ?? '';
=======
>>>>>>> 0e78819 (Single resource display feature completed)
    })
  } 
</script>

<template>
    <div class="mt-10">
        <div class="p-4 text-black bg-white shadow-md page print:page-break-after">
            <div class="content">
<<<<<<< HEAD
                <ResourceContent :content="content" :title="title" :type="type"/>
=======
                <ResourceContent :content="content" :type="type"/>
>>>>>>> 0e78819 (Single resource display feature completed)
            </div>
        </div>
    </div>
</template>

<style scoped>
.page {
  width: 210mm; /* A4 width */
  height: 297mm; /* A4 height */
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  page-break-inside: avoid;
}

.content {
  padding: 20px;
}

/* Page break styles */
@media print {
  .page {
    page-break-after: always;
    margin: 0;
    border-top: none;
  }

  .content {
    padding: 20px;
  }
}
</style>