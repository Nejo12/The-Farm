import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

import {
  CartIconStyles,
  ShoppingIconStyles,
  ItemCountStyles
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconStyles onClick={toggleCartHidden}>
    <ShoppingIconStyles />
    <ItemCountStyles>{itemCount}</ItemCountStyles>
  </CartIconStyles>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
