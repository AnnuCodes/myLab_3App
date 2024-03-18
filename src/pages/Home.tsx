import {
  IonActionSheet,
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
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
            Supermarkets
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter className="ion-padding">
        <IonToolbar>
          <IonButton routerLink="/Welcome">Back to Login</IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
