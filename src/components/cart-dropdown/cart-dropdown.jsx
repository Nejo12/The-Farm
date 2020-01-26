import React from "react";

import Button from "../button/button";

import { StyledCartDropdown } from "./cart-dropdown.styles";

const CartDropdown = () => (
  <StyledCartDropdown>
    <div className="cart-items">
      <Button text="checkout" className="button" />
    </div>
  </StyledCartDropdown>
);

export default CartDropdown;
