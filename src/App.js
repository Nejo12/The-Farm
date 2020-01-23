import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import HomeImage from "./components/home-image/home-image";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";

import { GlobalStyle } from "./global-styles";

const App = () => (
  <div className="App">
    <Navigation />
    {/* <HomeImage /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
    </Switch>
    <GlobalStyle />
  </div>
);

export default App;
