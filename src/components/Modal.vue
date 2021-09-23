<template>
<add-memory-page></add-memory-page>
</template>
<script>

import AddMemoryPage from '../pages/AddMemoryPage.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  components: { AddMemoryPage}
});
</script>