import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { StyledNavi, StyledNaviContent } from "./navigation.styles";

const Logo = require("../../media/mill.png");

const Navigation = ({ currentUser }) => (
  <StyledNavi>
    <StyledNaviContent>
      <div className="brang-logo">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="nav-logo" />
        </Link>
        {currentUser ? <p> Hello, {currentUser.displayName}</p> : null}
      </div>

      <div className="options">
        <Link to="/farm" className="option">
          FARM
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </StyledNaviContent>
  </StyledNavi>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navigation);
