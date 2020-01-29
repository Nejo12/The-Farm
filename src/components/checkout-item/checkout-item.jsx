import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.action";

import {
  CheckoutItemContainerStyles,
  ImageContainerStyles,
  TextContainerStyles,
  QuantityContainerStyles,
  RemoveButtonContainerStyles
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainerStyles>
      <ImageContainerStyles>
        <img src={imageUrl} alt="checkout-item" />
      </ImageContainerStyles>
      <TextContainerStyles>{name}</TextContainerStyles>
      <QuantityContainerStyles>
        <span
          onClick={() => removeItem(cartItem)}
          role="img"
          aria-labelledby="decrease"
        >
          &#10134;
        </span>
        <div>{quantity}</div>
        <span
          onClick={() => addItem(cartItem)}
          role="img"
          aria-labelledby="increase"
        >
          &#10133;
        </span>
      </QuantityContainerStyles>
      <TextContainerStyles>€ {price}</TextContainerStyles>
      <RemoveButtonContainerStyles>
        <span
          onClick={() => clearItem(cartItem)}
          role="img"
          aria-labelledby="remove"
        >
          &#10060;
        </span>
      </RemoveButtonContainerStyles>
    </CheckoutItemContainerStyles>
  );
};

const mapDisptachToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDisptachToProps)(CheckoutItem);
