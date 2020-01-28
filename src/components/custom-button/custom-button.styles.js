import styled, { css } from "styled-components";

const GlobalButtonStyle = css`
  color: #fff;
  background: green;
  border: none;

  &:hover {
    background: #fff;
    color: green;
    border: 1px solid green;
  }
`;

const GoogleSignInStyles = css`
  background: darkblue;
  color: #fff;
  border: none;

  :hover {
    background: blue;
  }
`;

const InvertedButtonStyles = css`
  background: #fff;
  color: green;
  border: 2px solid green;

  &:hover {
    color: #fff;
    background: green;
    border: 1px solid #fff;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return GoogleSignInStyles;
  }
  return props.isInverted ? InvertedButtonStyles : GlobalButtonStyle;
};

export const CustomButtonStyles = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 25px;
  margin: 10px 0;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  font-family: "Quicksand", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  ${getButtonStyles}
`;
