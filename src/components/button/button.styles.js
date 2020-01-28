import styled from "styled-components";

export const StyledButton = styled.div`
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
  font-weight: 700;
  color: white;
  background: green;
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

  &.inverted {
    background: white;
    color: green;
    border: 2px solid #fff;

    &:hover {
      color: white;
      background: green;
      border: 1px solid #fff;
    }
  }
`;
