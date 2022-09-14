import './Tab1.css';
import React from "react";
import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader, IonItem, IonNav,
    IonPage, IonRouterOutlet,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useAppGallery, UserApp} from "../hooks/useAppGallery";
import {Button, Card, Menu} from "uiw";
import {Link, Route} from "react-router-dom";
import Wills from "./apps/Wills";

const Tab1: React.FC = (props, context) => {
    const {apps} = useAppGallery();

    const title = (app : UserApp) => (
        <div className={'title'}>{ app.name }</div>
    )

    const headerExtra = (app : UserApp) => (
        <Button
            // @ts-ignore
            icon={ app.source.icon }
            // @ts-ignore
            type={ app.source.color }
            basic
            disabled
        >
            {/*{ app.source.name }*/}
        </Button>
    )
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
                                <Link to={app.url} className={'link'}>
                                    <Card
                                        title={ title(app) }
                                        extra={headerExtra(app)}
                                        bodyStyle={{ padding: 0}}
                                        key={index}
                                    >
                                        <div>
                                            <img alt="图片" className={'logo'} src={ app.logo } />
                                        </div>
                                        <div className={'footer-mark'}>
                                            {/*<h3 style={{margin:0}}>{ app.name }</h3>*/}
                                            <p className={'mark'}>{app.mark}</p>
                                        </div>
                                    </Card>
                                </Link>

                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
