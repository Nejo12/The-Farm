import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../media/shopping-bag.svg";
import { StyledCartIcon } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <StyledCartIcon onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </StyledCartIcon>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuayntity, cartItem) =>
      accumulatedQuayntity + cartItem.quantity,
    0
  )
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
