import React, { useState } from "react";
import SiparisFormu from "./SiparisFormu";
import Home from "./Home";
import Succes from "./Success";
import { Route, Router, Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const[showExtras,setShowExtras] = useState([])
  const addExtras = (x) => {
setShowExtras([...showExtras, x])

  }
  return (
    
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza"> 
      <SiparisFormu addExtras={addExtras} />
      </Route>
      <Route showExtras={showExtras} path="/success">
        <Succes />
      </Route>
    </Switch>
  );
};
export default App;

