
<template>
<arrow-base-layout :page-title="creature ? creature.name : 'Loading...'" page-default-back-link="/tabs/tab2">
<div class="flex"> 
<h2 v-if="!creature">Could not find a memory for the given id.</h2>
<creature-overview v-else :title="creature.name" :image="creature.image" :description="creature.catchPhrase"></creature-overview>
</div>
    </arrow-base-layout>
</template>

<script>
import ArrowBaseLayout from '../components/base/ArrowBaseLayout.vue'
import CreatureOverview from '../components/creatures/CreatureOverview.vue'
export default ({
    components: {
        ArrowBaseLayout,
        CreatureOverview
    },
    data() {
        return {
          /**
           * gets the creature id from the route
           */
            creatureId: this.$route.params.id,
        }
    },
  computed: {
    /**
     * returns the creature to display
     */
  creature() {
    return this.$store.getters.creature
    }
},
/**
 * dispatches an action to get a creature that matches the route params
 */
  mounted() {
    this.$store.dispatch("getCreature", this.$route.params.id);
    
  }
 
})
</script>
<style>
.flex {
  display: flex;
}
</style>