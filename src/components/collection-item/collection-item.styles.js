import styled from "styled-components";

export const StyledCollectionItem = styled.div`
  position: relative;
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    :hover {
      opacity: 0.8;
    }
  }

  .inverted {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 250px;
    border: 1px solid green;
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
`;
