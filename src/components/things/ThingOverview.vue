<template>
    <ion-img :src="image_uri" :alt="file-name"></ion-img>
    <h2 class="ion-text-center">{{file-name}}</h2>
    <p class="ion-text-center">{{speed}}</p>
</template>

<script>
import {IonImg} from '@ionic/vue'
export default {
    props: ['file-name', 'image_uri', 'speed'],
    components: {
        IonImg
    }
    
}
</script>