import React from "react";

import { StyledCartItem } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, quantity, name } }) => (
  <StyledCartItem>
    <img src={imageUrl} alt="cart-item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x €{price}
      </span>
    </div>
  </StyledCartItem>
);

export default CartItem;
