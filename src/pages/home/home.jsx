import React from "react";

import HomeImage from "../../components/home-image/home-image";
import Directory from "../../components/directory/directory";

import { StyledHome } from "./home.styles";

const Home = () => (
  <StyledHome>
    <HomeImage />
    <Directory />
  </StyledHome>
);

export default Home;
