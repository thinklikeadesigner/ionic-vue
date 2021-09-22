<template>
<ion-grid >
    <ion-row>
        <!-- on large screens the last item expands to take the full width, if I had more time I would fix this -->
        <ion-col  col-12 col-xl-2 col-lg-3 col-md-4  v-for="creature in  creatures" :key="creature.id" :creature="creature">
            <ion-card  :router-link="`/creatures/${creature.id}`">  
       <ion-item>
        <ion-thumbnail slot="start">
            <ion-img  :src="creature.image" :alt="creature.name"></ion-img>
        </ion-thumbnail>
        <ion-card-title>
            {{ creature.name }}
            </ion-card-title>
        </ion-item>
</ion-card>
        </ion-col>
    </ion-row>
</ion-grid>
</template>

<script>
import { IonGrid, IonCol, IonRow,  IonItem,
          IonImg,
          IonThumbnail,
          IonCardTitle, IonCard } from '@ionic/vue';
export default ({
    /**
     * creatures props passed from the v-for in the parent component
     */
    props: ["creatures"],
    components: {
     IonGrid, IonCol, IonRow,  IonItem,
          IonImg,
          IonThumbnail,
        IonCardTitle,
          IonCard


    },
})
</script>
<style>
/* custom styling to provide more even card sizes.  */
 ion-card{
    min-width: 300px !important;
  }
  </style>