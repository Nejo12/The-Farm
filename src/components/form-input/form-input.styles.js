import styled from "styled-components";

const ShrinkLabel = () => {
  return ` top: -14px;
            font-size: 12px;
            color: lightgrey;
          `;
};

export const StyledFormInput = styled.div`
  position: relative;
  margin: 45px auto;

  .form-input {
    background: transparent;
    color: #fff;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      ${ShrinkLabel}
    }
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: #fff;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${ShrinkLabel}
    }
  }
`;
