import React from "react";
import { Link } from "react-router-dom";

import { StyledNavi, StyledNaviContent } from "./navigation.styles";

// import { ReactComponent as Logo } from "../../media/mill.png";
const Logo = require("../../media/mill.png");

const Navigation = () => (
  <StyledNavi>
    <StyledNaviContent>
      <div className="brang-logo">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="nav-logo" />
        </Link>
      </div>

      <div className="options">
        <Link to="/farm" className="option">
          FARM
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
        <div className="welcome-text option">HELLO Gabriel</div>
      </div>
    </StyledNaviContent>
  </StyledNavi>
);

export default Navigation;
