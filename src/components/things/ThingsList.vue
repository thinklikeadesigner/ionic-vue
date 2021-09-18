<template>
    <ion-list>
<things-list-item v-for="thing in  things" :key="thing.id" :thing="thing"></things-list-item>
    </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import ThingsListItem from './ThingsListItem.vue';
export default ({
    props: ["things"],
    components: {
         IonList,
       ThingsListItem,

    },
})
</script>
