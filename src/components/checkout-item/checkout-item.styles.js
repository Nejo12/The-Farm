import styled from "styled-components";

export const CheckoutItemContainerStyles = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const ImageContainerStyles = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    max-height: 150px;
  }
`;

export const TextContainerStyles = styled.span`
  width: 23%;
`;

export const QuantityContainerStyles = styled(TextContainerStyles)`
  display: flex;
  span {
    margin: 0 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    margin-right: 20px;
  }
`;

export const RemoveButtonContainerStyles = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
