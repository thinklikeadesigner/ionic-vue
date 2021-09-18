
<template>
<base-layout page-title="Sea Creatures">
<template v-slot:actions-end>
    <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="add" ></ion-icon>
    </ion-button>
</template>

<memories-list :memories="memories" ></memories-list>
<things-list :things="things"></things-list>


    </base-layout>
 
</template>

<script>
import {IonButton, IonIcon} from '@ionic/vue';
import { add } from 'ionicons/icons';
import MemoriesList from '../components/memories/MemoriesList.vue';
import ThingsList from '../components/things/ThingsList.vue';
export default ({ 
    components: {
   MemoriesList,
   ThingsList,
   IonButton, 
   IonIcon
  
    },
    data() {
        return { add }
    },
computed: {
    memories() {
            return this.$store.getters.memories;
},
  things() {
    return this.$store.getters.things
    }
},
  mounted() {
    this.$store.dispatch("getThings");
  }
 
})
</script>


