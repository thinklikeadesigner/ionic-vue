<template>
   <base-layout page-title="Ocean Scavenger Hunt">
   <div class="flex">
      <img class="round-image" src="https://images.unsplash.com/photo-1548032885-b5e38734688a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=907&q=80"/>
   </div>
  
   <form class="login" @submit.prevent="login">
  <ion-list>
<ion-item>     <ion-label  position="floating">Email</ion-label>
     <ion-input required v-model="email" type="email" placeholder="Name"/></ion-item>
<ion-item>
       <ion-label  position="floating">Password</ion-label>
     <ion-input required v-model="password" type="password" placeholder="Password"/>
</ion-item>


  </ion-list>
     <hr/>
     <ion-button type="submit" expand="block">Login</ion-button>
   </form>
 </base-layout>
</template>
<script>
import {IonInput, BaseLayout, IonList, IonItem, IonLabel, IonButton, toastController}  from '@ionic/vue'


  export default {
  components:{BaseLayout, IonInput, IonList, IonItem, IonLabel, IonButton},
    data(){
      return {
        email : "",
        password : ""
      }
    },
     methods: {
      login: function () {
        let email = this.email
        let password = this.password
        this.$store.dispatch('login', { email, password })
       .then(() => {
         this.$router.push('/')
              this.openToast()
    
         })
       .catch(err => console.log(err))
      },
    async openToast() {
      const toast = await toastController
        .create({
          message: 'Right On! You have signed up successfully.',
          duration: 2000
        })
      return toast.present();
    },
    }
  }
</script>
<style>
.round-image {
  border-radius: 50%;
  height: 400px;
  width: 400px;
  object-fit: cover;
}
.flex {
  display: flex;
  justify-content: center;
  padding: 20px;
}

</style>