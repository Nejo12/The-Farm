import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  NaviContainer,
  StyledNaviContent,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  BrandLogo
} from "./navigation.styles";

const Navigation = ({ currentUser, hidden }) => (
  <NaviContainer>
    <StyledNaviContent>
      <BrandLogo>
        <LogoContainer to="/">
          <img
            src="https://i.ibb.co/hZQj6np/mill-157613-640.png"
            alt="nav-logo"
          />
        </LogoContainer>
        {currentUser ? (
          currentUser.photoURL ? (
            <img
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "2px solid #fff"
              }}
              src={currentUser.photoURL}
              alt="user-display"
            />
          ) : (
            <p className="capitalize">
              {" "}
              Hi,{" "}
              {currentUser.displayName
                .split(" ")
                .slice(-1)
                .join(" ")}
            </p>
          )
        ) : null}
      </BrandLogo>

      <OptionsContainer>
        <OptionLink to="/">HOME</OptionLink>

        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
    </StyledNaviContent>
    {hidden ? null : <CartDropdown />}
  </NaviContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navigation);
