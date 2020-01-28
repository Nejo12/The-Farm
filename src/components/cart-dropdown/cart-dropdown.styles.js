import styled from "styled-components";

export const StyledCartDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  color: #000;
  background: white;
  top: 90px;
  right: 40px;
  z-index: 9999999;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
  }

  .button {
    margin-top: auto;
  }
`;
