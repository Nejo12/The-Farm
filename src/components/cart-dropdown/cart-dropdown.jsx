import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import {
  CartDropdownStyles,
  CartItemsStyles,
  EmptyCartStyles,
  CartDropdownButton
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyles>
    <CartItemsStyles>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyCartStyles>Your cart is empty</EmptyCartStyles>
      )}
    </CartItemsStyles>
    <CartDropdownButton
      text="checkout"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    />
  </CartDropdownStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
