<template>
  <base-layout page-title="Ocean Scavenger Hunt">
    <div class="flex">
      <img class="round-image" src="https://images.unsplash.com/photo-1548032885-b5e38734688a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=907&q=80"/>
   </div>
    <form @submit.prevent="register">
    <ion-list>
        <ion-item>
      <ion-label  position="floating" for="name">Name</ion-label>
          <ion-input id="name" type="text" v-model="name" required autofocus/>
      </ion-item>

      <ion-item>
      <ion-label   position="floating" for="email" >E-Mail Address</ion-label>
          <ion-input id="email" type="email" v-model="email" required/>
      </ion-item>

      <ion-item>
      <ion-label  position="floating" for="password">Password</ion-label>
          <ion-input id="password" type="password" v-model="password" required/>
      </ion-item>

      <ion-item>
      <ion-label  position="floating" for="password-confirm">Confirm Password</ion-label>
          <ion-input id="password-confirm" type="password" v-model="password_confirmation" required/>
      </ion-item>
    </ion-list>

      <div>
          <ion-button type="submit" expand="block">Login</ion-button>
      </div>
    </form>
  </base-layout>
</template>

<script>
import {IonInput, BaseLayout, IonList, IonItem, IonLabel, IonButton, toastController}  from '@ionic/vue'

  export default {
    components: {IonInput, BaseLayout,  IonList, IonItem, IonLabel, IonButton},
    data(){
      return {
        name : "",
        email : "",
        password : "",
        password_confirmation : "",
        is_admin : null
      }
    },
       methods: {
      register: function () {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          // is_admin: this.is_admin
        }
        console.log('done')
        this.$store.dispatch('register', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      },
          async openToast() {
      const toast = await toastController
        .create({
          message: 'Your settings have been saved.',
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