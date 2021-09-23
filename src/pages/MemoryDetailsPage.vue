
<template>
<arrow-base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'" page-default-back-link="/tabs/tab1">
<div class="flex">
<h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
<memory-overview v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description"></memory-overview>
<ion-button @click="deleteMem">delete</ion-button>
</div>
    </arrow-base-layout>
</template>

<script>
import ArrowBaseLayout from '../components/base/ArrowBaseLayout.vue'
import MemoryOverview from '../components/memories/MemoryOverview'
import {   IonButton } from '@ionic/vue'
export default ({
    components: {
        ArrowBaseLayout,
        MemoryOverview,
        IonButton 
     
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
        },

    },
    methods: {
                         deleteMem() {
          // I could do form validation here if I had more time
      console.log("delete here", this.memoryId)
           this.$store.dispatch('deleteMemory', this.memoryId);
             this.$router.replace('/tabs/tab1');
      },
    }

})
</script>
<style>
.flex {
  display: flex;
}
</style>