import {
  IonActionSheet,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";
import { useState } from "react";
import OldLists from "./OldLists";
import { Redirect } from "react-router";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Groceries</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Where is this</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem button>New list</IonItem>
          <IonItem button routerLink="/OldLists">
            Select previous list
          </IonItem>

          <IonItem button>Supermarket locations</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
