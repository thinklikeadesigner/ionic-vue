
<template>
<base-layout :page-title="loadedThing ? loadedThing[file-name] : 'Loading...'" page-default-back-link="/memories">
<h2 v-if="!loadedThing">Could not find a memory for the given id.</h2>
<thing-overview v-else :title="loadedThing[file-name]" :image="loadedThing.image_uri" :description="loadedThing.speed"></thing-overview>
    </base-layout>
</template>

<script>
import {BaseLayout} from '@ionic/vue'
import ThingOverview from '../components/things/ThingOverview.vue';
export default ({
    components: {
        BaseLayout,
        ThingOverview
    },
    data() {
        return {
            thingId: this.$route.params.id,
        }
    },
    computed: {
        loadedThing() {
            return this.$store.getters.thing(this.thingId);
        }
    },
})
</script>
