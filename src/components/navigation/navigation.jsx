import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { auth } from "../../firebase/firebase.utils";

import { StyledNavi, StyledNaviContent } from "./navigation.styles";

const Logo = require("../../media/mill.png");

const Navigation = ({ currentUser, hidden }) => (
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

        <CartIcon />
      </div>
    </StyledNaviContent>
    {hidden ? null : <CartDropdown />}
  </StyledNavi>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Navigation);
