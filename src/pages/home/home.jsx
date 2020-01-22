import React from "react";

import { StyledHome } from "./home.styles";

const Home = () => (
  <StyledHome className="home-page-container">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Fruits </h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Vegetables </h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Cereals </h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Diaries </h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title"> Seasonings & Spices </h1>
          <span className="subtitle">Shop Now</span>
        </div>
      </div>
    </div>
  </StyledHome>
);

export default Home;
