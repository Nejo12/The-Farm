import styled from "styled-components";

export const CheckoutContainerStyles = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
export const CheckoutHeaderStyles = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockStyles = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalStyles = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarningStyles = styled.div`
  text-align: center;
  color: red;
  font-size: 24px;
  margin: 24px 0;

  button {
    margin-left: auto;
    width: 200px;
  }
`;
