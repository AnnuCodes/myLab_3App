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
  const [input, setInput] = useState<string>("");

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
          <IonInput
            label="Text input"
            placeholder="Write list here"
            value={input}
            onIonChange={(e: any) => setInput(e.target.value)}
          ></IonInput>
          <IonItem slot="end">
            <IonButton>Save</IonButton>
          </IonItem>
        </IonItem>
        <IonItem>{input}</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default NewList;
