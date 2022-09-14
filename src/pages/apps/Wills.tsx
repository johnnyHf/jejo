import './Wills.css';
import React from "react";
import {
    IonCol,
    IonContent, IonFab, IonFabButton,
    IonHeader, IonIcon,
    IonPage, IonRow,
    IonTitle,
    IonToolbar, useIonActionSheet
} from '@ionic/react';
import {Avatar, Badge, Button, Card, Notify} from 'uiw';
import {UserWill, useWillGallery} from "../../hooks/useWillGallery";
import {add} from "ionicons/icons";
import { mailUnreadOutline, trash, checkmarkOutline, heart, close } from 'ionicons/icons';
import {Link} from "react-router-dom";

const Wills: React.FC = () => {
    const {wills} = useWillGallery();
    const [present, dismiss] = useIonActionSheet();

    const openMenu = (will: UserWill) => {
        present({
            buttons: [{
                text: '待办',
                cssClass: 'will-menu-todo',
                icon: mailUnreadOutline,
                handler: () => {
                    console.log('待办');
                    Notify.info({ title: '待办通知', description: `${will.creater}的愿望(${will.desc})在等候中！`, duration: 2});
                }
            },{
                text: '废弃',
                cssClass: 'will-menu-delete',
                icon: trash,
                handler: () => {
                    Notify.warning({ title: '废弃通知', description: `${will.creater}的愿望(${will.desc})已经废弃！`, duration: 2});
                }
            },{
                text: '完成',
                cssClass: 'will-menu-finish',
                icon: checkmarkOutline,
                handler: () => {
                    Notify.success({ title: '成功通知', description: `${will.creater}的愿望(${will.desc})已经完成！`, duration: 2});
                }
            }],
            header: `${will.desc} (${will.creater})`
        })
    }

    const footer = (will: UserWill) => (
        <span>
            <span style={{marginRight: 24}}>
              <Avatar shape="square" src={will.createPortrait}/>
            </span>&nbsp;
            {will.creater}
            <span style={{float: "right"}}>
                <Button
                    icon="more"
                    // @ts-ignore
                    onClick={function () {
                        openMenu(will);
                    }}
                />
            </span>
        </span>
    )
    const headerExtra = (will: UserWill) => (
        // @ts-ignore
        <Badge count={will.status.state} style={{backgroundColor: will.status.color}}/>
    )

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
                        // @ts-ignore
                        <IonCol size-lg="2" size-md="3" size-sm="4" size-xs="6" key={index}>
                            <Card
                                title={will.desc}
                                footer={footer(will)}
                                // style={{ width: 240 }}
                                bodyStyle={{padding: 0}}
                                extra={headerExtra(will)}
                            >
                                <Link to={`/wills/${will.id}`}>
                                    <div>
                                        <img alt="礼物" src={will.img}/>
                                    </div>
                                </Link>

                                <div className={'will-mark-wrapper'}>
                                    <h5 className={"will-mark"}>{will.mark}</h5>
                                </div>
                            </Card>
                        </IonCol>
                    ))}
                </IonRow>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={add}/>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Wills;
