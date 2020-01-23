import React from "react";
import { Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Contact from "./pages/contact/contact";

import { GlobalStyle } from "./global-styles";

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
    </Switch>
    <GlobalStyle />
  </div>
);

export default App;
