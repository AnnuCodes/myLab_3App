import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

const NewList: React.FC = () => {
  const [list, setlist] = useState("");
  const handleClick = () => {};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Make new list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonInput label="Text input" placeholder="Write list here"></IonInput>
          <IonItem slot="end">
            <IonButton onClick={handleClick}>Save</IonButton>
          </IonItem>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default NewList;
