import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { storefrontOutline } from "ionicons/icons";

const Supermarkets: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Supermarkets</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList className="ion-padding">
          <IonItem>
            <IonIcon
              slot="start"
              icon={storefrontOutline}
              color="success"
            ></IonIcon>
            <h1>React Market</h1>
          </IonItem>
          <IonItem>
            <IonIcon
              slot="start"
              icon={storefrontOutline}
              color="success"
            ></IonIcon>
            <h1>Ionic Supermarket</h1>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Supermarkets;
