import React from "react";

import { StyledButton } from "./button.styles";

const Button = ({ text, isGoogleSignIn, ...otherProps }) => (
  <StyledButton
    className={isGoogleSignIn ? "google-sign-in" : ""}
    {...otherProps}
  >
    {text}
  </StyledButton>
);

export default Button;
