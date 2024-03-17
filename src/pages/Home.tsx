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
          <IonItem
            button
            id="open-action-sheet"
            onClick={() => setIsOpen(true)}
          >
            Select previous list
          </IonItem>
          <IonActionSheet
            isOpen={isOpen}
            trigger="open-action-sheet"
            header="actions"
            buttons={[
              {
                text: "Delete",
                role: "destructive",
              },
            ]}
          ></IonActionSheet>
          <IonItem button>Supermarket locations</IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
