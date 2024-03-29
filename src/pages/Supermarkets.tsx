import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
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
        <IonToolbar color="tertiary">
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
            <h1>Awesome Mart</h1>
          </IonItem>
          <IonItem>
            <IonIcon
              slot="start"
              icon={storefrontOutline}
              color="success"
            ></IonIcon>
            <h1>Wonder Supermarket</h1>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter className="ion-padding">
        <IonToolbar>
          <IonButton routerLink="/Welcome" color="tertiary">
            Back to Login
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Supermarkets;
