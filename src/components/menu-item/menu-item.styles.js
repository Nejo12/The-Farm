import styled from "styled-components";

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
  min-width: 30%;
  height: 300px;
  align-items: center;
  border: 1px solid lightgreen;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    z-index: 3;

    &:hover {
      z-index: 1;
    }

    @media screen and (max-width: 1300px) {
      z-index: -9;
    }
  }
`;

export const MenuItemContent = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  max-width: 28%;
  padding: 30px 15px 0;
  color: #fff;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 2;
  border-radius: 4px;

  &:hover {
    z-index: 4;
  }

  @media screen and (max-width: 400px) {
    padding: 20px 10px;
    min-width: 40%;
    height: 300px;
  }
`;

export const MenuItemTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 24px;
`;
