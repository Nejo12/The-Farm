import styled from "styled-components";

export const StyledCartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  color: #000;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  .button {
    margin-top: auto;
  }
`;
