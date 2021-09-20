
<template>
<base-layout :page-title="creature ? creature['file-name'] : 'Loading...'" page-default-back-link="/memories">
<h2 v-if="!creature">Could not find a memory for the given id.</h2>
<thing-overview v-else :title="creature['file-name']" :image="creature.image_uri" :description="creature['catch-phrase']"></thing-overview>
    </base-layout>
</template>

<script>
import {BaseLayout} from '@ionic/vue'
import ThingOverview from '../components/things/ThingOverview.vue'
export default ({
    components: {
        BaseLayout,
        ThingOverview
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
