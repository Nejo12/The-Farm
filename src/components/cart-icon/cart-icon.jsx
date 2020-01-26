import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../media/shopping-bag.svg";
import { StyledCartIcon } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden }) => (
  <StyledCartIcon onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </StyledCartIcon>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
