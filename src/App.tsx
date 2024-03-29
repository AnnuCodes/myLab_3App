import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import OldLists from "./pages/OldLists";
import NewList from "./pages/NewList";
import Supermarkets from "./pages/Supermarkets";
import Welcome from "./pages/Welcome";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Route exact path="/Welcome" component={Welcome}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/NewList" component={NewList}></Route>
        <Route exact path="/OldLists" component={OldLists}></Route>
        <Route exact path="/Supermarkets" component={Supermarkets}></Route>
        <Route exact path="/">
          <Redirect to="/Welcome" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
