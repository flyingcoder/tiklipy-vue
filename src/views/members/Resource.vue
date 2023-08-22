<script setup>
    import ResourceContent from '../../components/ResourceContent.vue';
</script>

<template>
    <div class="mt-10">
        <div class="p-4 bg-white shadow-md page print:page-break-after">
            <div class="content">
                <ResourceContent />
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