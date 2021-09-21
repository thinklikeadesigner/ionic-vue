
<template>
<base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'" page-default-back-link="/tabs/tab1">
<h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
<memory-overview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"></memory-overview>

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
            memoryId: this.$route.params.id,
        }
    },
    computed: {
        loadedMemory() {
            return this.$store.getters.memory(this.memoryId);
        }
    },

})
</script>
