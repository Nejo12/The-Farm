import React from "react";

import Navigation from "./components/navigation/navigation";
import HomeImage from "./components/home-image/home-image";
import Home from "./pages/home/home";

import { GlobalStyle } from "./global-styles";

const App = () => (
  <div className="App">
    <Navigation />
    <HomeImage />
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
