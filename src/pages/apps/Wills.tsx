import './Wills.css';
import React from "react";
import {
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonCol,
    IonContent, IonFab, IonFabButton,
    IonHeader, IonIcon, IonImg,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {Avatar, Badge, Card, Icon} from 'uiw';
import {useAppGallery} from "../../hooks/useAppGallery";
import {UserWill, useWillGallery} from "../../hooks/useWillGallery";
import {add} from "ionicons/icons";
const Wills: React.FC = () => {
    const footer = (will : UserWill) => (
        <a href="https://uiwjs.github.io">
            <span style={{ marginRight: 24 }}>
              <Avatar src={ will.createPortrait } />
            </span>&nbsp;
            { will.creater }
        </a>
    )
    const headerExtra = (will : UserWill) => (
        <div style={{ color: 'green', fontWeight: "bold" }}>
            <Icon type="check" />
        </div>

    )

    const { wills } = useWillGallery();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>许愿池</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRow>
                    {wills.map((will, index) => (
                        <IonCol size-lg="2" size-md="3" size-sm="4" size-xs="6"  key={index}>
                            <Card
                                title={ will.desc }
                                footer={ footer(will) }
                                // style={{ width: 240 }}
                                bodyStyle={{ padding: 0 }}
                                extra={ headerExtra(will) }
                            >
                                <div>
                                    <img alt="example" width="100%" src={ will.img } />
                                </div>
                                <div style={{ padding: `10px 16px` }}>
                                    <h3 style={{margin:0}}>{ will.mark }</h3>
                                    {/*<p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>*/}
                                </div>
                            </Card>
                        </IonCol>
                    ))}
                </IonRow>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Wills;
