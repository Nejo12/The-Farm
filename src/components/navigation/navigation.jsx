import React from "react";
import { Link } from "react-router-dom";

import { StyledNavi, StyledNaviContent } from "./navigation.styles";

import { ReactComponent as Logo } from "../../media/search_icon.svg";

const Navigation = () => (
  <StyledNavi>
    <StyledNaviContent>
      <div className="brang-logo">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
      </div>

      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
      </div>
      <div className="welcome-text">HELLO Gabriel</div>
    </StyledNaviContent>
  </StyledNavi>
);

export default Navigation;
