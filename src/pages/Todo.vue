<template>
<base-layout page-title="Add a Todo" page-default-back-link="/memories">
<h3>Todo</h3>
</base-layout>
</template>


<script>
import {
    // IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonThumbnail, IonIcon,
 BaseLayout} from '@ionic/vue'

export default {
    name: "Todos",
    emits:  ['save-memory'],
  components: {  
      BaseLayout,
//   IonList, 
//   IonItem, 
//   IonLabel, 
//   IonInput, 
//   IonTextarea, 
//   IonButton,
//   IonThumbnail,
//   IonIcon
  },
  data() {},
  methods: { }  
}
</script>