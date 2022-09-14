import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab3.css';
import axios from 'axios';
import Clock from "@uiw/react-clock";
import {Button, ButtonGroup, Divider, Dropdown, Menu} from "uiw";

const Tab3: React.FC = () => {
    let nnq = "";

    axios.get("http://localhost:8080/hao123").then((data) => {
        nnq = JSON.stringify(data.data).toString();
        console.log(nnq)
    }).catch(err => {
        console.log(err)
    })

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 3</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large"></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <Clock style={{backgroundColor: "lightcyan"}} />
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
