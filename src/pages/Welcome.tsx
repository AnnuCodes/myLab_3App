import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { storefront } from "ionicons/icons";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>
            <h1>My Groceries</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard color="light">
          <IonImg src={storefront} />
          <IonCardHeader>
            <IonCardTitle>Welcome to My Groceries</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonButton routerLink="/Home">Continue</IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
