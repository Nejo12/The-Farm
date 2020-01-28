import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { StyledCartDropdown } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <StyledCartDropdown>
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton
        text="checkout"
        className="button"
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      />
    </div>
  </StyledCartDropdown>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
