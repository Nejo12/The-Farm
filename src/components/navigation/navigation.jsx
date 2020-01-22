import React from "react";

import { StyledNavi } from "./navigation.styles";

// const Logo = require("../../media/logo.png");

const Navigation = () => (
  <StyledNavi className="navi-container">
    <div className="navigation-content">
      <div className="brang-logo">
        {/* <img src={Logo} alt="brand-logo" /> */}
        Logo
      </div>
      <div className="welcome-text">Hello Gabriel</div>
    </div>
  </StyledNavi>
);

export default Navigation;
