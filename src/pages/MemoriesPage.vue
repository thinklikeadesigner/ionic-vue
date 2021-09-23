<template>
  <memories-list :memories="memories" ></memories-list>
</template>

<script>
import { add, logOutOutline } from 'ionicons/icons';
import MemoriesList from '../components/memories/MemoriesList.vue';
export default ({ 
    components: {
   MemoriesList,
  
  
    },
    data() {
        return { add, logOutOutline }
    },
computed: {
    memories() {
            return this.$store.getters.memories;
},
  creatures() {
    return this.$store.getters.creatures
    },
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    
},
  mounted() {
    this.$store.dispatch("getCreatures");
  }
 
})
</script>


