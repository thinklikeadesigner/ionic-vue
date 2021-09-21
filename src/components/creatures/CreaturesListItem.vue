
<template>
        <ion-item :router-link="`/creatures/${creature.id}`">
        <ion-thumbnail slot="start">
            <ion-img  :src="creature.image_uri" :alt="creature.file-name"></ion-img>
        </ion-thumbnail>
        <ion-label>
            {{ creature["file-name"] }}
            </ion-label>
        </ion-item>
</template>

<script>
import {IonItem, IonImg, IonThumbnail, IonLabel} from '@ionic/vue'
export default ({
    props: ["creature"],
    components: {
          IonItem,
          IonImg,
          IonThumbnail,
          IonLabel
    }
})
</script>
