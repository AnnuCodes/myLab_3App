import {
  IonActionSheet,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">My groceries</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem button routerLink="/NewList">
            New list
          </IonItem>
          <IonItem button routerLink="/OldLists">
            Select previous list
          </IonItem>

          <IonItem button routerLink="/Supermarkets">
            Supermarket locations
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
