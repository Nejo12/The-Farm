import styled from "styled-components";

export const CollectionContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitleStyles = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
  text-transform: capitalize;
`;

export const CollectionItemsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    margin-left: -20px;
  }
`;
