import React from "react";
import { StyledFormInput } from "./form-input.styles";

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <StyledFormInput>
    <input onChange={handleChange} {...otherProps} className="form-input" />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </StyledFormInput>
);
export default FormInput;
