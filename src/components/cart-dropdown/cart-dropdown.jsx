import React from "react";
import { connect } from "react-redux";

import Button from "../button/button";
import CartItem from "../cart-item/cart-item";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { StyledCartDropdown } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems }) => (
  <StyledCartDropdown>
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <Button text="checkout" className="button" />
    </div>
  </StyledCartDropdown>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
