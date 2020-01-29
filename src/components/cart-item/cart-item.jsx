import React from "react";

import {
  CartItemStyles,
  CartItemDetailsStyles,
  CartItemImageStyles
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, quantity, name } }) => (
  <CartItemStyles>
    <CartItemImageStyles src={imageUrl} alt="cart-item" />
    <CartItemDetailsStyles>
      <span>{name}</span>
      <span>
        {quantity} x €{price}
      </span>
    </CartItemDetailsStyles>
  </CartItemStyles>
);

export default CartItem;
