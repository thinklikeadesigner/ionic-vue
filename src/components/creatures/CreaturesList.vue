<template>
    <ion-list>
<creatures-list-item v-for="creature in  creatures" :key="creature.id" :creature="creature"></creatures-list-item>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import CreaturesListItem from './CreaturesListItem.vue';
export default ({
    props: ["creatures"],
    components: {
         IonList,
       CreaturesListItem,

    },
})
</script>
