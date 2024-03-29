import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import React from "react";

const OldLists: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Old lists</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle>List name</IonTitle>
        <IonList>
          <IonItem>List for React Market</IonItem>
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

export default OldLists;
