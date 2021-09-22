<template>
    <div class="overview-container">
        <ion-card>
            <ion-img :src="image" :alt="title"></ion-img>
<div class="text-container">
            <ion-card-title class="ion-text-center">{{title}}</ion-card-title>
            <ion-card-subtitle class="ion-text-center">{{description}}</ion-card-subtitle>
</div>
        </ion-card>
    </div>
</template>

<script>
import {IonImg, IonCard,  IonCardTitle, IonCardSubtitle} from '@ionic/vue'
export default {
    props: ['title', 'image', 'description'],
    components: {
        IonImg, IonCard,IonCardTitle,IonCardSubtitle
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