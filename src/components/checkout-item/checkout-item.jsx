import React from "react";

import { StyledCheckoutItem } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <StyledCheckoutItem>
    <div className="image-container">
      <img src={imageUrl} alt="checkout-item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button" role="img" aria-labelledby="remove">
      &#10060;
    </span>
  </StyledCheckoutItem>
);

export default CheckoutItem;
