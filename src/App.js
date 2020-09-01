import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import SodaContainer from "./components/SodaContainer";
import JuiceContainer from "./components/JuiceContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <SodaContainer />
        <JuiceContainer />
      </div>
    </Provider>
  );
}

export default App;
