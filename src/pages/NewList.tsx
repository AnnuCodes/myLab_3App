import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
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
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
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
            placeholder="Write item here"
            value={text}
            onIonChange={(e: any) => setInput(e.target.value)}
          ></IonInput>
          <IonItem slot="end">
            <IonButton
              color="tertiary"
              onClick={() => {
                setText("");
              }}
            >
              Save
            </IonButton>
          </IonItem>
        </IonItem>
        <IonItem>{input}</IonItem>
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

export default NewList;
