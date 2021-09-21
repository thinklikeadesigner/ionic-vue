
<template>

<creatures-list :creatures="creatures"></creatures-list>



 
</template>

<script>
// import {IonButton, IonIcon} from '@ionic/vue';
import { add } from 'ionicons/icons';
import CreaturesList from '../components/creatures/CreaturesList.vue';
export default ({ 
    components: {
   CreaturesList,
  //  IonButton, 
  //  IonIcon
  
    },
    data() {
        return { add }
    },
computed: {
    memories() {
            return this.$store.getters.memories;
},
  creatures() {
    return this.$store.getters.creatures
    }
},
  mounted() {
    this.$store.dispatch("getCreatures");
  }
 
})
</script>


