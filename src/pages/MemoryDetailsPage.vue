
<template>
<base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'" page-default-back-link="/tabs/tab1">
<div class="flex">
<h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
<memory-overview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"></memory-overview>
</div>
    </base-layout>
</template>

<script>
import {BaseLayout} from '@ionic/vue'
import MemoryOverview from '../components/memories/MemoryOverview'
export default ({
    components: {
        BaseLayout,
        MemoryOverview,
     
    },
    data() {
        return {
            /**
             * gets id to find specific memory from route params
             */
            memoryId: this.$route.params.id,
        }
    },
    computed: {
        /**
         * grabs specific memory using the id from the route params
         */
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    },

})
</script>
<style>
.flex {
  display: flex;
}
</style>