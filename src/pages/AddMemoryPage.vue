<template>
    <arrow-base-layout page-title="Add Item" page-default-back-link="/tabs/tab1">
<create-memory-form @save-memory="saveMemory"></create-memory-form>
    </arrow-base-layout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue'
export default {
  components: { 
      CreateMemoryForm
      },
      methods: {
          // this page is where i would handle the data fetching and form submission
          // i would do validation and showing an error message if I had more time
          saveMemory(memoryData) {
            this.$store.dispatch('addMemory', memoryData);
            this.$router.replace('/tabs/tab2');
          }
      }
    
}
</script>