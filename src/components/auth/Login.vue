<template>
<base-layout page-title="Ocean Scavenger Hunt">
    <ion-grid>
  <ion-row >
         <ion-col >
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
          <div class="toggle-form-text" text-center>
        If you don't have an account, please <a  class="toggle-form-link" href='/signup'>
          sign up</a> first!
          </div>
        </ion-col >
  </ion-row >

       </ion-grid>
</base-layout>
</template>
<script>
import {IonInput, IonList, IonItem, IonLabel, IonButton,   IonRow, IonGrid, IonCol}  from '@ionic/vue'
import BaseLayout from '../base/BaseLayout.vue'


  export default {
  components:{IonInput, IonList, IonItem, IonLabel, IonButton, BaseLayout,  IonRow, IonGrid, IonCol},
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
         email = '';
         password = '';
         this.$router.push('/')
    
         })
       .catch(err => console.log(err))
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

.toggle-form-link {
  text-decoration: none;
}

.toggle-form-text {
  margin-top: 40px;

}
</style>