<template>
<base-layout page-title="Account">
            <ExploreContainer name="Tab 3 page" >
        <ion-button @click="presentLogoutConfirm" router-link="/login">Logout</ion-button>
      </ExploreContainer>
</base-layout>
</template>



<script >
import ExploreContainer from '../components/ExplorerContainer.vue';
import {  logOutOutline } from 'ionicons/icons';
import {  alertController } from '@ionic/vue';


import BaseLayout from '../components/base/BaseLayout.vue';


export default  {
  name: 'Tab2',
  components: { ExploreContainer,BaseLayout},
    data() {
        return {  logOutOutline }
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




