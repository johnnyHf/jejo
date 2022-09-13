import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab3.css';
import axios from 'axios';
import ExploreContainer from "../components/ExploreContainer";
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
                <ExploreContainer name="1212"></ExploreContainer>
            </IonContent>
        </IonPage>
    );
};

export default Tab3;
