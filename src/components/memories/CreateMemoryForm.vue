<template>
        <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle"></ion-input>
            </ion-item>
             <ion-item>
                <ion-label position="floating">Image Url</ion-label>
                <ion-input type="url" required v-model="enteredImageUrl"></ion-input>
            </ion-item>
                  <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
            </ion-item>
        </ion-list>
                <ion-button type="submit" expand="block">Save</ion-button>
    </form>
</template>


<script>
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue'
export default {
    emits:  ['save-memory'],
  components: {  
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton 
  },
  data() {
      // we could use refs to get the form data as well
      return {
          enteredTitle: '',
          enteredImageUrl: '',
          enteredDescription: '',
      }
  },
  methods: {
      submitForm() {
          // I could do form validation here if I had more time
          const memoryData = {
              title: this.enteredTitle,
              image: this.enteredImageUrl,
              description: this.enteredDescription
          }
          this.$emit('save-memory', memoryData);
      }
  }

    
}
</script>