import styled from "styled-components";

export const StyledCartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 32px;
    height: 32px;
  }

  .item-count {
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    bottom: 12px;
  }
`;
