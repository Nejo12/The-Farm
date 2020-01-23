import React from "react";

import Directory from "../../components/directory/directory";

import { StyledHome } from "./home.styles";
import HomeImage from "../../components/home-image/home-image";

const Home = () => (
  <StyledHome className="home-page-container">
    <HomeImage />
    <Directory />
  </StyledHome>
);

export default Home;
