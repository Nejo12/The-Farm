import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_xzHx8YWdlidyI8OPnRRs2VC7001kKdGhg7";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Farm"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/hZQj6np/mill-157613-640.png"
      description={`Your total is € ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now."
      token={onToken}
      stripeKey={publishableKey}
      style={{ width: "200px" }}
    />
  );
};

export default StripeCheckoutButton;
