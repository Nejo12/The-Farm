import styled from "styled-components";

export const StyledButton = styled.div`
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px;
  margin: 10px 0;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  color: white;
  background-color: green;
  border: none;
  cursor: pointer;

  :hover {
    background: white;
    color: green;
    border: 1px solid green;
  }

  &.google-sign-in {
    background: blue;
    color: #fff;

    :hover {
      background: #4285f4;
      border: none;
    }
  }
`;
