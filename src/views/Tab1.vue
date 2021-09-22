<template>
<base-layout page-title="Your Collection">
         <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button router-link="/memories/add">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
      <memories-page></memories-page>
      
</base-layout>
</template> 

<script >
import { add } from 'ionicons/icons';
import {  alertController, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import MemoriesPage from '../pages/MemoriesPage.vue'


import BaseLayout from '../components/base/BaseLayout.vue';


export default  {
  name: 'Tab2',
  components: { BaseLayout, MemoriesPage, IonFab, IonFabButton, IonIcon},
    data() {
        return {  add }
    },
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
          async presentLogoutConfirm() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Log out',
          message: 'Are you sure?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel')
              },
            },
            {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay')
                 this.logout();
              },
            },
          ],
        });
      return alert.present();
    },
    },
}
</script>