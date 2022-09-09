import './Tab1.css';
import React from "react";
import {
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonImg,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useAppGallery} from "../hooks/useAppGallery";

const Tab1: React.FC = () => {
    const {apps} = useAppGallery();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>应用</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        {apps.map((app, index) => (
                            <IonCol size-lg="3" size-md="4" size-sm="6" size-xs="6" key={index}>
                                <IonCard href={ app.url }>
                                    <IonCardHeader>
                                        <IonCardSubtitle>{ app.mark }</IonCardSubtitle>
                                        <IonCardTitle>{ app.name }</IonCardTitle>
                                    </IonCardHeader>

                                    <IonCardContent>
                                        <IonImg src={ app.logo } class="ionicImg"/>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
