import React from "react";

import Directory from "../../components/directory/directory";

import { StyledHome } from "./home.styles";

const Home = () => (
  <StyledHome className="home-page-container">
    <Directory />
  </StyledHome>
);

export default Home;
