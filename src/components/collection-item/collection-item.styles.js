import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const CollectionItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22vw;
  height: 350px;
  margin: 30px 5px;

  &:hover {
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 900px) {
    width: 40vw;
  }

  @media screen and (max-width: 520px) {
    width: 80vw;
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 1380px) {
    display: flex;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  margin-left: 10px;
  text-transform: capitalize;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
  margin-right: 15px;
`;
