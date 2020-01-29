import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

import {
  CheckoutContainerStyles,
  CheckoutHeaderStyles,
  HeaderBlockStyles,
  TestWarningStyles,
  TotalStyles
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainerStyles>
    <CheckoutHeaderStyles>
      <HeaderBlockStyles>
        <span>Product</span>
      </HeaderBlockStyles>

      <HeaderBlockStyles>
        <span>Description</span>
      </HeaderBlockStyles>

      <HeaderBlockStyles>
        <span>Quantity</span>
      </HeaderBlockStyles>

      <HeaderBlockStyles>
        <span>Price</span>
      </HeaderBlockStyles>

      <HeaderBlockStyles>
        <span>Remove</span>
      </HeaderBlockStyles>
    </CheckoutHeaderStyles>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalStyles>TOTAL: € {total.toFixed(2)}</TotalStyles>

    <TestWarningStyles>
      *Kindly use this test credit card info to view the functionality*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      <br />
    </TestWarningStyles>
    <StripeCheckoutButton price={total} />
  </CheckoutContainerStyles>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
