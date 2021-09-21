<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Collection" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Collection</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="Scavenger List" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Scavenger List</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="Account" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script >
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>