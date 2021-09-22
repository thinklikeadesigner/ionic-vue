<template>


<ion-grid fixed="true">
    <ion-row>
        <!-- on large screens the last item expands to take the full width, if I had more time I would fix this -->
        <ion-col  col-12 col-xl-2 col-lg-3 col-md-4   v-for="memory in  memories" :key="memory.id" :memory="memory">
            <ion-card  :router-link="`/memories/${memory.id}`">  
        <ion-item :router-link="`/memories/${memory.id}`">
        <ion-thumbnail slot="start">
            <ion-img  :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-card-title>
            {{ memory.title }}
            </ion-card-title>
        </ion-item>
</ion-card>
        </ion-col>
    </ion-row>
</ion-grid>
 
</template>

<script>
import {    IonGrid, IonCol, IonRow,  IonItem,
          IonImg,
          IonThumbnail,
        IonCardTitle,
          IonCard } from '@ionic/vue'
export default ({
    props: ["memories"],
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
/* custom styling to provide more even card sizes. There's probably an attr for this, but I haven't found it yet */
 ion-card{
    min-width: 300px !important;
  }
  </style>