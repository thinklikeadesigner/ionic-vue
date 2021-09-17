<template>
        <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle"></ion-input>
            </ion-item>
             <ion-item>
             <ion-thumbnail slot="start">
                 <img :src="takenImageUrl" :alt="enteredTitle"/>
             </ion-thumbnail>
                 <ion-button fill="clear" type="button" @click="takePhoto">
                     <ion-icon slot="start" :icon="camera"></ion-icon>
                     Take Photo
                     </ion-button>
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
import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonThumbnail, IonIcon} from '@ionic/vue'
import {camera} from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 
export default {
    emits:  ['save-memory'],
  components: {  
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton,
  IonThumbnail,
  IonIcon
  },
  data() {
      // we could use refs to get the form data as well
      return {
          enteredTitle: '',
          enteredDescription: '',
          takenImageUrl: null,
          camera
      }
  },
  methods: {
  async takePhoto() {
      // install 'pwa-camera-modal' to take pictures from the browser pwa https://capacitorjs.com/docs/web/pwa-elements
    const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60,
    });
    // TODO use file system capacitor plugin to persist image
this.takenImageUrl = photo.webPath;

      },
      submitForm() {
          // I could do form validation here if I had more time
          const memoryData = {
              title: this.enteredTitle,
              image: this.takenImageUrl,
              description: this.enteredDescription
          }
          this.$emit('save-memory', memoryData);
      }
  }

    
}
</script>