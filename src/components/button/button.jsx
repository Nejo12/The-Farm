import React from "react";

import { StyledButton } from "./button.styles";

const Button = ({ text, ...otherProps }) => (
  <StyledButton {...otherProps}>{text}</StyledButton>
);

export default Button;
