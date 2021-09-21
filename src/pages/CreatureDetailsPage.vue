
<template>
<base-layout :page-title="creature ? creature['file-name'] : 'Loading...'" page-default-back-link="/tabs/tab2">
<h2 v-if="!creature">Could not find a memory for the given id.</h2>
<creature-overview v-else :title="creature['file-name']" :image="creature.image_uri" :description="creature['catch-phrase']"></creature-overview>
    </base-layout>
</template>

<script>
import {BaseLayout} from '@ionic/vue'
import CreatureOverview from '../components/creatures/CreatureOverview.vue'
export default ({
    components: {
        BaseLayout,
        CreatureOverview
    },
    data() {
        return {
            creatureId: this.$route.params.id,
        }
    },
  computed: {
  creature() {
    return this.$store.getters.creature
    }
},
  mounted() {
    this.$store.dispatch("getCreature", this.$route.params.id);
  }
 
})
</script>
