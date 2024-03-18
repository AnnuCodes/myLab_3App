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

const Home: React.FC = () => {
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
          <IonItem button routerLink="/NewList">
            New list
          </IonItem>
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
