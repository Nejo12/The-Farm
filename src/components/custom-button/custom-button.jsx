import React from "react";

import { CustomButtonStyles } from "./custom-button.styles";

const CustomButton = ({ text, callback, ...props }) => (
  <CustomButtonStyles type="submit" onClick={callback} {...props}>
    {text}
  </CustomButtonStyles>
);

export default CustomButton;
