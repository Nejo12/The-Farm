import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../media/shopping-bag.svg";

export const CartIconStyles = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconStyles = styled(ShoppingIcon)`
  width: 32px;
  height: 32px;
`;

export const ItemCountStyles = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;
