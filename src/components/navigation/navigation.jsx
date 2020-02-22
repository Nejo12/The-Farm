import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { clearCart } from "../../redux/cart/cart.action";

import { toast } from "react-toastify";
import {
  NaviContainer,
  StyledNaviContent,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  BrandLogo
} from "./navigation.styles";

const Navigation = ({ currentUser, hidden, clearCart }) => (
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
                border: "2px solid #fff",
                marginTop: "20px"
              }}
              src={currentUser.photoURL}
              alt="user-display"
            />
          ) : (
            <p className="capitalize"> Hi, {currentUser.displayName}</p>
          )
        ) : null}
      </BrandLogo>

      <OptionsContainer>
        <OptionLink to="/">HOME</OptionLink>

        <OptionLink to="/shop">SHOP</OptionLink>

        {currentUser ? (
          <OptionLink
            to="/"
            onClick={() => {
              auth.signOut();
              clearCart();
              toast.success("Signed Out Success.");
            }}
          >
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
