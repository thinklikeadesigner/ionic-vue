
<template>
<ion-page>
<ion-header>
    <ion-toolbar>
        <ion-buttons slot="end">
            <ion-button :router-link="`/tabs/tab2`">
                <ion-icon :icon="closeOutline"></ion-icon>
            </ion-button>
        </ion-buttons>
        <ion-title>{{pageTitle}}</ion-title>
    </ion-toolbar>
    </ion-header>
<ion-content>
<slot/>
    </ion-content>    
</ion-page>
</template>

<script>
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButtons, IonButton,  } from '@ionic/vue'
import {closeOutline} from 'ionicons/icons';
export default ({
    props: ['pageTitle', 'pageDefaultBackLink'],
    components: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonToolbar,
       IonIcon,
       IonButtons, IonButton
    },
    data() {
        return {
            closeOutline
        }
    }
 
})
</script>
