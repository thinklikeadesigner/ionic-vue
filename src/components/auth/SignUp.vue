<template>
<base-layout page-title="Ocean Scavenger Hunt">
    <ion-grid>
  <ion-row >
        <ion-col >
      <img class="round-image" src="https://images.unsplash.com/photo-1548032885-b5e38734688a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=907&q=80"/>
   
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
          <ion-button  type="submit" expand="block">Sign Up</ion-button>
      </div>
    </form>
          <div  class="toggle-form-text"  text-center >
        If you already have an account, please <a class="toggle-form" href='/login'>
          login</a>!
          </div>
    </ion-col>
    </ion-row>
    </ion-grid>
</base-layout>
 


</template>

<script>
import {IonInput, IonList, IonItem, IonLabel, IonButton, toastController, IonRow, IonGrid, IonCol}  from '@ionic/vue'
import BaseLayout from '../base/BaseLayout.vue'

  export default {
    components: {IonInput, IonList, BaseLayout, IonItem, IonLabel, IonButton, IonRow, IonGrid, IonCol},
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
        console.log("register")
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          // is_admin: this.is_admin
        }
        this.$store.dispatch('register', data)
       .then(() => {
         data.email = '';
         data.password = ''
         data.name = '';
         this.$router.push('/');
         this.openToast();
       })
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
  /* flex-direction: column; */
align-items: center;
}

.toggle-form-link  {
  text-decoration: none;
}

.toggle-form-text {
  margin-top: 40px;
}

</style>