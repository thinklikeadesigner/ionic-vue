<template>
<div class="overview-container">
<ion-card>
    <ion-img :src="image" :alt="title"></ion-img>
<div class="text-container">
    <h2 class="ion-text-center">{{title}}</h2>
    <p class="ion-text-center">{{description}}</p>
    </div>
    </ion-card>
</div>
</template>

<script>
import {IonImg, IonCard} from '@ionic/vue'
export default {
    props: ['title', 'image', 'description'],
    components: {
        IonImg,
        IonCard
    }
    
}
</script>
<style>
.overview-container {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text-container {
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    }
    </style>