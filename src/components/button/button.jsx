import React from "react";

import { StyledButton } from "./button.styles";

const Button = ({
  text,
  isGoogleSignIn,
  inverted,
  callback,
  ...otherProps
}) => (
  <StyledButton
    type="submit"
    onClick={callback}
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      inverted ? "inverted" : ""
    }`}
    {...otherProps}
  >
    {text}
  </StyledButton>
);

export default Button;
