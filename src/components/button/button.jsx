import React from "react";

import { StyledButton } from "./button.styles";

const Button = ({ text, isGoogleSignIn, callback, ...otherProps }) => (
  <StyledButton
    type="submit"
    onClick={callback}
    className={isGoogleSignIn ? "google-sign-in" : ""}
    {...otherProps}
  >
    {text}
  </StyledButton>
);

export default Button;
