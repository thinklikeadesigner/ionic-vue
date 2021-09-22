<template>
<base-layout page-title="Scavenger Hunt List">
<creatures-page></creatures-page>
</base-layout>
</template>

<script >
import CreaturesPage from '../pages/CreaturesPage.vue';
import {  alertController } from '@ionic/vue';

import BaseLayout from '../components/base/BaseLayout.vue';


export default  {
  name: 'Tab2',
  components: { CreaturesPage,BaseLayout},
    data() {
    },
  computed : {
    /**
     * check if user is logged in
     */
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      /**
       * logs user out and sends user back to login screen
       */
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      },
            /**
             * async method that triggers an alert to confirm logout action
             */
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