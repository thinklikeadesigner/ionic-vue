
<template>
        <ion-item :router-link="`/things/${thing.id}`">
        <ion-thumbnail slot="start">
            <ion-img  :src="thing.image_uri" :alt="thing.file-name"></ion-img>
        </ion-thumbnail>
        <ion-label>
            {{ thing["file-name"] }}
            </ion-label>
        </ion-item>
</template>

<script>
import {IonItem, IonImg, IonThumbnail, IonLabel} from '@ionic/vue'
export default ({
    props: ["thing"],
    components: {
          IonItem,
          IonImg,
          IonThumbnail,
          IonLabel
    }
})
</script>
