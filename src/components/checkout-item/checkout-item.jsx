import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.action";

import { StyledCheckoutItem } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <StyledCheckoutItem>
      <div className="image-container">
        <img src={imageUrl} alt="checkout-item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="arrow"
          onClick={() => removeItem(cartItem)}
          role="img"
          aria-labelledby="decrease"
        >
          &#10134;
        </span>
        <span className="value">{quantity}</span>
        <span
          className="arrow"
          onClick={() => addItem(cartItem)}
          role="img"
          aria-labelledby="increase"
        >
          &#10133;
        </span>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => clearItem(cartItem)}
        role="img"
        aria-labelledby="remove"
      >
        &#10060;
      </span>
    </StyledCheckoutItem>
  );
};

const mapDisptachToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDisptachToProps)(CheckoutItem);
